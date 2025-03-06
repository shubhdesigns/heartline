import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <div className="relative w-full h-full">
            {/* Gradient Circles */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-pink-100 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute right-48 top-48 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Advancing
              <br />
              <span className="text-[#4D96FF]">Cardiovascular</span>
              <br />
              Health Through
              <br />
              Innovation
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              The Heartline Foundation is dedicated to improving heart health through cutting-edge technology, research, and compassionate care.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#solutions" className="btn-primary">
                Explore Solutions
              </a>
              <a href="#about" className="btn-secondary">
                Learn More
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              {/* Gradient Heart */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-blue-500 rounded-full filter blur-xl opacity-50"></div>
                  <svg viewBox="0 0 512 512" className="w-full h-full relative z-10">
                    <path
                      d="M256 448l-30.29-27.52C118.22 319.28 48 260.24 48 176.65 48 114.54 98.54 64 160.65 64c34.84 0 68.29 16.43 89.35 42.59C271.06 80.43 304.51 64 339.35 64 401.46 64 452 114.54 452 176.65c0 83.59-70.22 142.63-177.71 243.83L256 448z"
                      fill="url(#heart-gradient)"
                    />
                    <defs>
                      <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF6B6B" />
                        <stop offset="100%" stopColor="#4D96FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
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
        onClick={() => window.location.href = '#contact'}
      >
        <svg className="w-6 h-6 text-[#4D96FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </motion.button>
    </section>
  );
};

export default Hero;