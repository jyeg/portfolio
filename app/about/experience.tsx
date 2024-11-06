'use client';

import { motion } from 'framer-motion';

const jobs = [
  {
    company: 'Side',
    role: 'LeadSoftware Engineer',
    period: '2023 - 2024',
    description: 'Payments platform lead backend engineer.',
    link: 'https://www.side.com',
  },
  {
    company: 'Harmonic.ai',
    role: 'Senior Software Engineer',
    period: '2021 - 2023',
    description: 'Full stack engineer.',
    link: 'https://www.harmonic.ai',
  },
  {
    company: 'Expedia Group',
    role: 'Tech Lead',
    period: '2018 - 2021',
    description: 'Full stack dev leader.',
    link: 'https://www.expediagroup.com',
  },
  {
    company: 'Blue Apron',
    role: 'Software Engineer',
    period: '2015 - 2018',
    description: 'Full stack growth hacker.',
    link: 'https://www.blueapron.com',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          Work Experience
        </h2>
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border shadow p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  {job.company}
                </a>
              </h3>
              <p className="text-blue-600 mb-2">{job.role}</p>
              <p className="text-gray-600 mb-4">{job.period}</p>
              <p className="text-gray-600">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
