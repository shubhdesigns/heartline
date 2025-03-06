import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About The Heartline Foundation</h2>
            <p className="text-lg text-gray-700 mb-6">
              Heartline Foundation is a student-led nonprofit founded in 2025 with a mission to transform cardiology through AI-driven innovation. As a high school-led initiative, we are committed to using artificial intelligence to enhance heart health diagnostics and accessibility.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Beyond technology, we actively organize fundraisers and donation drives to support heart patients in need. Our focus remains on making a meaningful impact in the field of cardiology and improving lives through innovation and community support.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#4D96FF]">Our Goal</h3>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4 gradient-text">10,000</div>
              <p className="text-xl text-gray-700">People to Help</p>
            </div>
            <div className="mt-8">
              <p className="text-gray-600">
                We're on a mission to make a significant impact in cardiovascular health. Through our AI-driven solutions and community initiatives, we aim to help 10,000 people access better heart care and support.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;