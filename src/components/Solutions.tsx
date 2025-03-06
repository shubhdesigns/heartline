import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, BarChart3, Microscope, ArrowRight } from 'lucide-react';

const solutions = [
  {
    id: 1,
    title: 'HeartFlow Analysis',
    description: 'Non-invasive coronary artery disease diagnosis using advanced computational fluid dynamics.',
    icon: Activity,
    color: 'bg-primary text-white',
  },
  {
    id: 2,
    title: 'Cardiac Monitoring',
    description: 'Continuous remote monitoring solutions for patients with heart conditions.',
    icon: Heart,
    color: 'bg-white text-primary border border-primary',
  },
  {
    id: 3,
    title: 'Data Analytics',
    description: 'AI-powered analytics to predict and prevent cardiovascular events.',
    icon: BarChart3,
    color: 'bg-white text-primary border border-primary',
  },
  {
    id: 4,
    title: 'Research Initiatives',
    description: 'Cutting-edge research programs advancing the field of cardiovascular medicine.',
    icon: Microscope,
    color: 'bg-primary text-white',
  },
];

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Innovative technologies and approaches to improve cardiovascular health and patient outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${solution.color}`}>
                <solution.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{solution.description}</p>
              <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;