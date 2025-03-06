import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our solutions or how we can help? Reach out to us on Instagram.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary bg-opacity-10 rounded-full p-3">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Follow Us on Instagram</h3>
                  <p className="text-gray-600">@the_heartlinefoundation</p>
                  <a 
                    href="https://www.instagram.com/the_heartlinefoundation/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-2 inline-block"
                  >
                    Visit our Instagram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              The Heartline Foundation is dedicated to transforming cardiovascular healthcare through AI innovation. As a student-led nonprofit, we combine cutting-edge technology with community support to make heart health more accessible and effective.
            </p>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4 gradient-text">10,000</div>
              <p className="text-xl text-gray-700">People to Help</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;