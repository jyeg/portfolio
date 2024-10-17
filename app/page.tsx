import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight } from "lucide-react";

export function Page() {
  return (
    <>
      <Head>
        <title>JY Labs - AI Automation Strategy and Software Development</title>
        <meta
          name="description"
          content="JY Labs offers AI automation strategy, implementation, and software development to help businesses innovate and grow."
        />
        <meta
          name="keywords"
          content="AI automation, software development, business process automation, lead generation"
        />
        <link rel="canonical" href="https://www.jy-labs.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50 text-gray-900">
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-50 to-pink-50 py-20 md:py-32">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  A better way to build software
                </h1>
                <p className="text-xl mb-8 text-gray-600">
                  We help you realize your digital business with AI-powered
                  solutions that suit your needs.
                </p>
                <div className="flex space-x-4">
                  <Button asChild size="lg">
                    <Link href="/contact">Get started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/work">View our work</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg"
                  alt="Hero Illustration"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Trusted By Section */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Trusted By
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <Image
                  src="/placeholder.svg"
                  alt="Google"
                  width={100}
                  height={30}
                  className="h-8"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Microsoft"
                  width={100}
                  height={30}
                  className="h-8"
                />
                <Image
                  src="/placeholder.svg"
                  alt="LinkedIn"
                  width={100}
                  height={30}
                  className="h-8"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Slack"
                  width={100}
                  height={30}
                  className="h-8"
                />
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-gray-50">
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
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                  <Image
                    src="/placeholder.svg"
                    alt="About Us Illustration"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2 md:pl-10">
                  <h2 className="text-3xl font-bold mb-6">
                    We are here to make success your business
                  </h2>
                  <p className="text-lg mb-6 text-gray-600">
                    At JY Labs, we&apos;re committed to delivering top-notch AI
                    and software solutions that drive your business forward. Our
                    team of experts is dedicated to understanding your unique
                    challenges and crafting tailored strategies for success.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Innovative solutions</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Experienced team</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Cutting-edge technology</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Get in Touch
                </h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>
                      Fill out the form below and we&apos;ll get back to you
                      shortly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input placeholder="First Name" required />
                        <Input placeholder="Last Name" required />
                      </div>
                      <Input type="email" placeholder="Email" required />
                      <Input placeholder="Company" />
                      <Textarea placeholder="How can we help you?" required />
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
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
          className="text-blue-600 hover:underline inline-flex items-center"
        >
          Learn more <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default Page;
