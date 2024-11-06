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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Side Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
