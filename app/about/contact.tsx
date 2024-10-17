import { motion } from "framer-motion";
import { Mail, MapPin, Calendar, FilePlus2 } from "lucide-react";

export default function Contact() {
  return (
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
              john.yeg.is+portfolio@gmail.com
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
            transition={{ duration: 0.5, delay: 0.3 }}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <FilePlus2 className="w-6 h-6 text-blue-400" />
            <a
              href="/JohnYegsResume.pdf"
              download="JohnYegsResume.pdf"
              className="hover:text-blue-400 transition-colors"
            >
              Download My Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
