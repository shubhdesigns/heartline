import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-pulse text-primary">Loading...</div>
  </div>
);

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-pink-50 opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#1a2b4b]">
              Advancing
              <br />
              <motion.span 
                className="text-[#4D96FF]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Cardiovascular
              </motion.span>
              <br />
              Health Through
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Innovation
              </motion.span>
            </h1>
            <motion.p 
              className="text-gray-600 text-lg mt-6 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              The Heartline Foundation is dedicated to improving heart health through cutting-edge technology, research, and compassionate care.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a 
                href="#solutions" 
                className="bg-gradient-to-r from-[#4D96FF] to-[#FF6B6B] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
              >
                Explore Solutions
              </a>
              <a 
                href="#about" 
                className="border-2 border-[#4D96FF] text-[#4D96FF] px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-96 h-96">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#4D96FF] to-[#FF6B6B] rounded-full filter blur-3xl opacity-30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="w-full h-full relative z-10"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <defs>
                    <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4D96FF" />
                      <stop offset="100%" stopColor="#FF6B6B" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="url(#heartGradient)"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-8 right-8 bg-white p-4 rounded-full shadow-lg z-50 hover:shadow-xl transition-shadow"
        onClick={() => {
          const contact = document.getElementById('contact');
          if (contact) {
            contact.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <svg className="w-6 h-6 text-[#4D96FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </motion.button>
    </section>
  );
};

export default Hero;