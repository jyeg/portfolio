'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900"
        >
          John Yegs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-4 text-gray-600"
        >
          Software Guy...
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl mb-8 text-gray-600"
        >
          Let&apos;s build something great.
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
            <Github className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors" />
          </Link>
          <Link
            href="https://linkedin.com/in/johnyeg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors" />
          </Link>
        </motion.div>
      </div>
      <div
        onClick={() => handleScrollToSection('experience')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-blue-600 animate-bounce" />
      </div>
    </section>
  );
}
