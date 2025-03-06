import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A group of passionate high school students dedicated to revolutionizing cardiovascular care through AI innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt="Student Leaders"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Student Leaders</h3>
              <p className="text-gray-600 mb-6">
                Our team consists of dedicated high school students who are passionate about leveraging artificial intelligence 
                to transform cardiovascular healthcare. We combine our technical skills with a deep commitment to community service, 
                organizing fundraisers and donation drives to support heart patients in need.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Follow us:</span>
                  <a 
                    href="https://www.instagram.com/the_heartlinefoundation/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF6B6B] transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Est. 2025</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-gray-600">
              Join us in our mission to help <span className="font-bold text-[#4D96FF]">10,000 people</span> through innovative cardiovascular care
            </p>
            <a href="#contact" className="btn-primary mt-6 inline-block">
              Get Involved
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;