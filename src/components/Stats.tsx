import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, BookOpen } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: 'Lives Improved',
    value: '100,000+',
    icon: Heart,
    color: 'text-accent',
  },
  {
    id: 2,
    title: 'Medical Partners',
    value: '500+',
    icon: Users,
    color: 'text-primary',
  },
  {
    id: 3,
    title: 'Research Papers',
    value: '250+',
    icon: BookOpen,
    color: 'text-secondary',
  },
  {
    id: 4,
    title: 'Awards',
    value: '75+',
    icon: Award,
    color: 'text-primary-light',
  },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${stat.color} bg-opacity-10 bg-current`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2 gradient-text">{stat.value}</h3>
              <p className="text-gray-600">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;