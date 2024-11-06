import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

let auth;
try {
  const credentialsPath = process.env.GOOGLE_SHEET_SA_APPLICATION_CREDENTIALS;
  if (!credentialsPath) {
    throw new Error('GOOGLE_SHEET_SA_APPLICATION_CREDENTIALS is not set');
  }
  const credentials = JSON.parse(
    fs.readFileSync(path.resolve(process.cwd(), credentialsPath), 'utf8'),
  );
  auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
} catch (error) {
  console.error('Error initializing Google Auth:', error);
}

const sheets = auth ? google.sheets({ version: 'v4', auth }) : null;

export async function POST(req: NextRequest) {
  if (!sheets) {
    return NextResponse.json(
      {
        success: false,
        error: 'Google Sheets API is not initialized properly.',
      },
      { status: 500 },
    );
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      bottlenecks,
      holdingBack,
      idealScenario,
      message,
    } = await req.json();

    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEETS_ID is not set');
    }

    const range = 'Sheet1!A:H';

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            name,
            email,
            phone,
            company,
            bottlenecks,
            holdingBack,
            idealScenario,
            message,
          ],
        ],
      },
    });

    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred while submitting the form.' },
      { status: 500 },
    );
  }
}
