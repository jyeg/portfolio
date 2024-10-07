"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function PortfolioLandingComponent() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "experience", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-6">
            {["Home", "Skills", "Experience", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm font-medium hover:text-blue-400 transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-400"
                        : ""
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center relative"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-4"
            >
              John Yegs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8"
            >
              Senior Software Engineer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-4"
            >
              <Link
                href="https://github.com/jyeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
              </Link>
              <Link
                href="https://linkedin.com/in/johnyeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
              </Link>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-blue-400 animate-bounce" />
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "TypeScript",
                "Next.js",
                "Webpack",
                "Node",
                "Python",
                "Git",
                "GCP",
                "Fastify",
                "ElasticSearch",
                "Lerna",
                "React",
                "GraphQL",
                "Postgres",
                "DataDog",
              ].map((skill) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-700 rounded-lg p-4 text-center hover:bg-blue-600 transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Work Experience
            </h2>
            <div className="space-y-12">
              {[
                {
                  company: "Side",
                  role: "Senior Software Engineer",
                  period: "2023 - Oct 2024",
                  description:
                    "Led the design and implementation of key features for payment reconciliation operations. Reduced software subscription costs by 75% through migration of payment processing systems.",
                },
                {
                  company: "Harmonic.ai",
                  role: "Senior Software Engineer",
                  period: "2021 - 2023",
                  description:
                    "Increased annual recurring revenue by 15% YoY. Designed and built a greenfield scalable notification engine. Optimized performance of the API tier.",
                },
                {
                  company: "Expedia Group",
                  role: "Senior Software Engineer",
                  period: "2018 - 2021",
                  description:
                    "Managed a team to launch a platform for coaching automation. Engineered a GraphQL API to securely deliver enriched data. Optimized the footprint of the consumer-facing site.",
                },
                {
                  company: "Blue Apron",
                  role: "Software Engineer",
                  period: "2015 - 2018",
                  description:
                    "Modernized the client-side platform and DevOps deploy workflows. Built out a shared react component library. Created complex animations for the marketing homepage.",
                },
              ].map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">{job.company}</h3>
                  <p className="text-blue-400 mb-2">{job.role}</p>
                  <p className="text-gray-400 mb-4">{job.period}</p>
                  <p>{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Side Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Saveur",
                  description:
                    "A SaaS tool to automate backups for social media accounts",
                },
                {
                  name: "dvv.js",
                  description:
                    "Benchmark and analysis of a distributed computing npm module for computing algorithms",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
                  <p>{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
            <div className="max-w-md mx-auto space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-4"
              >
                <Mail className="w-6 h-6 text-blue-400" />
                <a
                  href="mailto:john.yeg.is@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  john.yeg.is@gmail.com
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center space-x-4"
              >
                <Phone className="w-6 h-6 text-blue-400" />
                <a
                  href="tel:+18046831201"
                  className="hover:text-blue-400 transition-colors"
                >
                  (804) 683-1201
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <MapPin className="w-6 h-6 text-blue-400" />
                <span>Austin, TX</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <Calendar className="w-6 h-6 text-blue-400" />
                <a
                  href="https://calendar.app.google/SnBiM9Rnp7vQxeHLA"
                  className="hover:text-blue-400 transition-colors"
                >
                  Schedule a meeting
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} John Yegs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
