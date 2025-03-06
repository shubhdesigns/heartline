import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1a2b4b] mb-6">
            Connect With Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow us on Instagram to stay updated with our latest initiatives and community events.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#4D96FF] to-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-6">
              <Instagram className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a2b4b] mb-4">
              Follow Us on Instagram
            </h3>
            <p className="text-gray-600 mb-6">
              @the_heartlinefoundation
            </p>
            <a
              href="https://www.instagram.com/the_heartlinefoundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#4D96FF] to-[#FF6B6B] text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow"
            >
              Visit Our Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;