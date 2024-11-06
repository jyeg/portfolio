"use client";

import { motion } from "framer-motion";

const skills = [
  "AirTable",
  "TypeScript",
  "Next.js",
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
  "Tailwind",
  "Jest",
  "Cypress",
  "Docker",
  "Serverless",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border p-4 text-center hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
