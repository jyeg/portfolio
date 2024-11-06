import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import BenefitItem from '@/components/BenefitItem';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A better way to build software',
  description:
    'We help you realize your business potential with cutting edge technology.',
  openGraph: {
    title: 'A better way to build software',
    description:
      'We help you realize your business potential with cutting edge technology.',
    type: 'website',
  },
};

export function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center">
          {/* Background Image with Blur */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.webp"
              alt="Background Illustration"
              fill
              className="object-cover"
              quality={50}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 to-indigo-60/90 backdrop-blur-sm min-h-[80vh]" />
          </div>

          {/* Content */}
          <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Hero content */}
            <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                More than just a software agency{' '}
              </h1>
              <p className="text-xl mb-8 text-gray-600">
                We help you realize your business potential with cutting edge
                technology.
              </p>
              <div className="flex space-x-4">
                <Button asChild size="xxl" className="bg-blue-600">
                  <Link href="#contact" className="text-white font-bold">
                    Get started
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="md:w-1/2 w-full">
              <div className="backdrop-blur-md rounded shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="AI Strategy"
                description="Develop a comprehensive AI roadmap tailored to your business needs and goals."
              />
              <ServiceCard
                title="Software Development"
                description="Custom software solutions tailored to your unique business needs and challenges."
              />
              <ServiceCard
                title="Business Process Automation"
                description="Streamline your operations with cutting-edge AI-powered automation solutions."
              />
              <ServiceCard
                title="Content Writing"
                description="Engage your users through generated blogs, articles, social media posts, or email newsletters using AI."
              />
              <ServiceCard
                title="Enhanced Marketing"
                description="Generate ad copy, marketing campaigns, and strategies."
              />
              <ServiceCard
                title="Customer Support"
                description="Support users with the power of AI, handling common inquiries, reducing human workload."
              />
              <ServiceCard
                title="Social Media Management"
                description="Create posts, captions, and manage your business social presence."
              />
              <ServiceCard
                title="Lead Generation"
                description="Help develop new leads by crafting compelling outreach messages with AI."
              />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 relative group">
                <Image
                  src="/business-shot.webp"
                  alt="About Us Illustration"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-lg relative z-10"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6">
                  We are here to grow your business
                </h2>
                <p className="text-lg mb-6 text-gray-600">
                  We are a team of experienced developers and AI experts who are
                  passionate about helping businesses move forward with
                  technology.
                </p>
                <h3 className="text-xl font-semibold mb-4">
                  What does that mean to you?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600 hover:text-blue-600 transition-colors">
                      Efficient workflows
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600 hover:text-blue-600 transition-colors">
                      Unblock your business bottlenecks
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600 hover:text-blue-600 transition-colors">
                      Technical documentation
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600 hover:text-blue-600 transition-colors">
                      Quality assurance
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600 hover:text-blue-600 transition-colors">
                      Business growth
                    </span>
                  </li>
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="mt-8 bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/services">Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section id="benefits" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start gap-12">
              {/* Left Column */}
              <div className="md:w-1/3">
                <h2 className="text-3xl font-bold mb-6">Why work with us?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our approach to software development and consulting starts
                  with the end in sight - your company&apos;s success and
                  long-term ability to adapt as technology evolves around you.
                  That&apos;s why thousands of software development companies in
                  the world. Here&apos;s why we are different:
                </p>
                <div className="relative group">
                  <Image
                    src="/whimsical.webp"
                    alt="Benefits Illustration"
                    width={400}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-lg" /> */}
                </div>
              </div>

              {/* Right Column */}
              <div className="md:w-2/3">
                <div className="space-y-6">
                  {/* Revenue Section */}
                  <BenefitItem
                    number="1"
                    title="Increase your revenue"
                    description="Use AI to handle more visitors, traffic, sales, and brand loyalty - you name it. Recurring revenue and repeat business is the foundation of your business, and we've helped our clients generate strong recurring revenues for success."
                  />

                  {/* User Acquisition Section */}
                  <BenefitItem
                    number="2"
                    title="Attract more users"
                    description="We help you reach and engage your target audience effectively, driving user acquisition and retention through data-driven strategies and innovative solutions that resonate with your market."
                  />

                  {/* Professional Scaling Section */}
                  <BenefitItem
                    number="3"
                    title="Scale with agents"
                    description="Our agents are capable of handling a wide range of tasks, from customer support to social media management, ensuring your project scales efficiently and effectively, providing the expertise and resources needed to grow your business sustainably."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href="/services"
          prefetch={true}
          className="text-blue-600 hover:underline inline-flex items-center"
        >
          Learn more <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default Page;
