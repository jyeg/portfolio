"use client";

import { motion } from "framer-motion";

const jobs = [
  {
    company: "Side",
    role: "Senior Software Engineer",
    period: "2023 - Oct 2024",
    description: "Payments platform senior backend engineer.",
    link: "https://www.side.com",
  },
  {
    company: "Harmonic.ai",
    role: "Senior Software Engineer",
    period: "2021 - 2023",
    description: "Full stack engineer.",
    link: "https://www.harmonic.ai",
  },
  {
    company: "Expedia Group",
    role: "Tech Lead",
    period: "2018 - 2021",
    description: "Full stack dev leader.",
    link: "https://www.expediagroup.com",
  },
  {
    company: "Blue Apron",
    role: "Software Engineer",
    period: "2015 - 2018",
    description: "Full stack growth hacker.",
    link: "https://www.blueapron.com",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">
                <a href={job.link} target="_blank" rel="noopener noreferrer">
                  {job.company}
                </a>
              </h3>
              <p className="text-blue-400 mb-2">{job.role}</p>
              <p className="text-gray-400 mb-4">{job.period}</p>
              <p>{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
