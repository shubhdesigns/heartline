import React from 'react';
import { motion } from 'framer-motion';

const HeartScene: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.img
          src="/heartline-gradient.png"
          alt="Heartline Gradient Heart"
          className="w-64 h-64 object-contain"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>
      <motion.div
        className="absolute bottom-4 right-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-white rounded-full p-4 shadow-lg">
          <img
            src="/ai-assistant.png"
            alt="AI Assistant"
            className="w-16 h-16"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeartScene;