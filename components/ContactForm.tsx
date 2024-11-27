'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { trackEvent } from '@/lib/mpixel';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [bottlenecks, setBottlenecks] = useState('');
  const [holdingBack, setHoldingBack] = useState('');
  const [idealScenario, setIdealScenario] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          bottlenecks,
          holdingBack,
          idealScenario,
          message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setName('');
        setEmail('');
        setCompany('');
        setBottlenecks('');
        setHoldingBack('');
        setIdealScenario('');
        setMessage('');

        trackEvent('Contact', {
          name,
          email,
          phone,
          company,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Let&apos;s discuss your business</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-0">
                <Input
                  placeholder="Name"
                  required
                  type="text"
                  className="required"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  placeholder="Phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <Input
                type="email"
                placeholder="Email"
                className="email-input required"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                placeholder="Company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <Textarea
                placeholder="What are the bottlenecks in your business?"
                required
                value={bottlenecks}
                onChange={(e) => setBottlenecks(e.target.value)}
              />
              <Textarea
                placeholder="What's holding your business back?"
                required
                value={holdingBack}
                onChange={(e) => setHoldingBack(e.target.value)}
              />
              <Textarea
                placeholder="If time and manpower wasn't an issue, what would you like to do with your business?"
                required
                value={idealScenario}
                onChange={(e) => setIdealScenario(e.target.value)}
              />
              <Textarea
                placeholder="Any additional message or questions?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {submitStatus === 'success' && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600">
                  An error occurred. Please try again.
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
