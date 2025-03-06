import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const researchAreas = [
  {
    id: 1,
    title: 'Artificial Intelligence in Cardiology',
    description: 'Leveraging machine learning algorithms to improve diagnosis accuracy and treatment planning.',
    image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Preventive Cardiology',
    description: 'Developing strategies to identify and mitigate cardiovascular risk factors before disease onset.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Regenerative Medicine',
    description: 'Exploring stem cell therapies and tissue engineering to repair damaged heart tissue.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
];

const Research: React.FC = () => {
  return (
    <section id="research" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Innovation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pioneering advancements in cardiovascular medicine through cutting-edge research and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{area.description}</p>
                <a href="#" className="inline-flex items-center text-primary font-medium hover:underline mt-auto">
                  Read research <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="btn-primary">
            View All Research
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;