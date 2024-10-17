import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JY Labs",
  description: "Let's build something great.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>JY Labs - Automation and Software Development Company</title>
        <meta
          name="description"
          content="JY Labs offers AI automation strategy, implementation, and software development to help businesses innovate and grow."
        />
        <meta
          name="keywords"
          content="AI automation, software development, business process automation, lead generation, lead generation software, ai software development, ai automation software, ai automation company, ai automation software development, ai automation software development company, ai automation software development company in austin, ai automation software development company in texas, ai automation software development company in austin texas, ai automation software development company in austin, ai automation software development company in texas, ai automation software development company in austin texas, ai automation software development company in austin, ai automation software development company in texas, ai automation software development company in austin texas, ai automation software development company in austin, ai automation software development company in texas, ai automation software development company in austin texas"
        />
        <link rel="canonical" href="https://www.jy-labs.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
