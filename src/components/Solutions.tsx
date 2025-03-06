import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, Brain, Search } from 'lucide-react';
import ECGAnalysis from './solutions/ECGAnalysis';
import Chatbot from './solutions/Chatbot';
import HeartRateMonitor from './solutions/HeartRateMonitor';
import ResearchHub from './solutions/ResearchHub';

interface Solution {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  component: React.ComponentType;
}

const solutions: Solution[] = [
  {
    id: 'ecg-analysis',
    title: "AI ECG Analysis",
    description: "Upload ECG data for instant AI-powered analysis and interpretation.",
    icon: Activity,
    color: "from-[#4D96FF] to-[#FF6B6B]",
    component: ECGAnalysis
  },
  {
    id: 'chatbot',
    title: "Heart Health Chatbot",
    description: "Get instant answers to your cardiovascular health questions.",
    icon: Brain,
    color: "from-[#FF6B6B] to-[#FFA07A]",
    component: Chatbot
  },
  {
    id: 'monitor',
    title: "Health Monitor",
    description: "Real-time heart rate monitoring and analysis using your device's camera.",
    icon: Heart,
    color: "from-[#4D96FF] to-[#00CED1]",
    component: HeartRateMonitor
  },
  {
    id: 'research',
    title: "Research Hub",
    description: "Access our database of cardiovascular research and findings.",
    icon: Search,
    color: "from-[#00CED1] to-[#4D96FF]",
    component: ResearchHub
  }
];

const Solutions = () => {
  const [activeSolution, setActiveSolution] = useState<string | null>(null);

  const handleSolutionClick = (solutionId: string) => {
    setActiveSolution(solutionId === activeSolution ? null : solutionId);
  };

  const ActiveComponent = activeSolution 
    ? solutions.find(s => s.id === activeSolution)?.component 
    : null;

  return (
    <section id="solutions" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1a2b4b] mb-6">
            Our Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our innovative tools and solutions designed to advance cardiovascular health through technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group ${
                activeSolution === solution.id ? 'ring-2 ring-[#4D96FF]' : ''
              }`}
              onClick={() => handleSolutionClick(solution.id)}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} p-4 mb-6 transform group-hover:scale-110 transition-transform`}>
                <solution.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a2b4b] mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-600">
                {solution.description}
              </p>
              <div className="mt-6 flex items-center text-[#4D96FF] font-medium">
                <span>{activeSolution === solution.id ? 'Close' : 'Try Now'}</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {ActiveComponent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <ActiveComponent />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#4D96FF] to-[#FF6B6B] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;