"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Saveur",
    description: "A SaaS tool to automate backups for social media accounts",
  },
  {
    name: "dvv.js",
    description:
      "Benchmark and analysis of a distributed computing npm module for computing algorithms",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Side Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
  );
}
