import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight, ExternalLink } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Our Services | Software Development & AI Solutions',
  description:
    'Comprehensive software development and AI integration services to help your business grow.',
};

const services = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy',
    description:
      'Develop a comprehensive AI roadmap tailored to your business needs and goals.',
    details: [
      'AI readiness assessment',
      'Custom AI implementation roadmap',
      'ROI analysis and projections',
      'Technology stack recommendations',
      'Integration planning',
    ],
    caseStudy: {
      client: 'Johnson & Associates Law Firm',
      challenge:
        'Struggling to manage high volume of document processing and client inquiries',
      outcome:
        '75% faster document processing, 40% reduction in response time to client inquiries',
      link: 'https://example.notion.site/law-firm-ai-strategy',
    },
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description:
      'Custom software solutions tailored to your unique business needs and challenges.',
    details: [
      'Full-stack web applications',
      'Mobile app development',
      'API development and integration',
      'Database design and optimization',
      'Cloud infrastructure setup',
    ],
    caseStudy: {
      client: 'Pacific Northwest Retail Chain',
      challenge:
        'Outdated inventory management system causing stock issues across 12 locations',
      outcome: 'New system reduced stockouts by 65%, increased sales by 28%',
      link: 'https://example.notion.site/retail-software-dev',
    },
  },
  {
    id: 'process-automation',
    title: 'Business Process Automation',
    description:
      'Streamline your operations with cutting-edge AI-powered automation solutions.',
    details: [
      'Workflow automation',
      'Document processing',
      'Data entry automation',
      'Customer service automation',
      'Integration with existing systems',
    ],
    caseStudy: {
      client: 'Summit Roofing Solutions',
      challenge:
        'Manual quote generation taking too long, losing potential customers',
      outcome:
        'Automated system provides quotes in minutes, 45% increase in conversion rate',
      link: 'https://example.notion.site/roofing-automation',
    },
  },
  {
    id: 'content-writing',
    title: 'Content Writing',
    description:
      'Engage your users through AI-generated content that maintains your brand voice.',
    details: [
      'Blog posts and articles',
      'Social media content',
      'Email newsletters',
      'Product descriptions',
      'SEO-optimized content',
    ],
    caseStudy: {
      client: 'Wellness Center Chain',
      challenge: 'Struggling to maintain consistent content across 5 locations',
      outcome: '3x more content output, 55% increase in organic traffic',
      link: 'https://example.notion.site/wellness-content',
    },
  },
  {
    id: 'marketing',
    title: 'Enhanced Marketing',
    description:
      'Generate compelling ad copy and data-driven marketing campaigns.',
    details: [
      'Ad copy generation',
      'Campaign strategy development',
      'A/B testing optimization',
      'Marketing analytics',
      'Personalized content creation',
    ],
    caseStudy: {
      client: 'Local Restaurant Group',
      challenge:
        'Limited marketing budget, needed better targeting for local customers',
      outcome: '2x ROI on ad spend, 35% increase in new customer acquisition',
      link: 'https://example.notion.site/restaurant-marketing',
    },
  },
  {
    id: 'customer-support',
    title: 'Customer Support',
    description:
      'Support users with AI-powered solutions that enhance human capabilities.',
    details: [
      'Chatbot implementation',
      '24/7 automated support',
      'Ticket classification',
      'Response automation',
      'Support analytics',
    ],
    caseStudy: {
      client: 'Regional Insurance Agency',
      challenge: 'After-hours support gaps leading to lost opportunities',
      outcome: '24/7 coverage achieved, 50% reduction in response time',
      link: 'https://example.notion.site/insurance-support',
    },
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description:
      'Create and manage your social media presence with AI assistance.',
    details: [
      'Content calendar planning',
      'Post generation',
      'Engagement monitoring',
      'Trend analysis',
      'Performance tracking',
    ],
    caseStudy: {
      client: 'Boutique Fashion Retailer',
      challenge: 'Inconsistent social media presence, low engagement rates',
      outcome:
        '150% increase in engagement, 80% time saved on content creation',
      link: 'https://example.notion.site/fashion-social',
    },
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    description:
      'Help develop new leads by crafting compelling outreach messages with AI.',
    details: [
      'Prospect identification',
      'Personalized outreach',
      'Lead scoring',
      'Campaign automation',
      'Conversion optimization',
    ],
    caseStudy: {
      client: 'Local Real Estate Brokerage',
      challenge: 'Manual lead generation process limiting growth potential',
      outcome: '3x more qualified leads, 40% higher conversion rate',
      link: 'https://example.notion.site/realestate-leads',
    },
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive software solutions powered by cutting-edge AI
              technology to help your business thrive in the digital age.
            </p>
            <Button asChild size="lg" className="bg-blue-600">
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8 min-h-[400px]">
                  {/* Service Details */}
                  <div className="lg:w-1/2 flex flex-col">
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6 flex-grow">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center text-gray-600"
                        >
                          <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Case Study */}
                  <div className="lg:w-1/2 flex items-center">
                    <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 w-full h-full flex flex-col">
                      <div className="flex-grow">
                        <h3 className="text-2xl font-semibold mb-6">
                          Case Study: {service.caseStudy.client}
                        </h3>
                        <div className="space-y-6 mb-8">
                          <div>
                            <p className="font-medium text-gray-900 mb-2">
                              Challenge:
                            </p>
                            <p className="text-gray-600">
                              {service.caseStudy.challenge}
                            </p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 mb-2">
                              Outcome:
                            </p>
                            <p className="text-gray-600">
                              {service.caseStudy.outcome}
                            </p>
                          </div>
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full mt-auto"
                      >
                        <Link
                          href={service.caseStudy.link}
                          target="_blank"
                          className="flex items-center justify-center gap-2"
                        >
                          Read Full Case Study
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ready to Get Started?
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
