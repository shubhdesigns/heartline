import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The Heartline Foundation's innovative approach to cardiovascular care has completely transformed how we treat our patients. Their technology is nothing short of revolutionary.",
    author: "Dr. Sarah Johnson",
    title: "Cardiologist, Metro Hospital",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    content: "As someone who has benefited directly from Heartline's research, I can't express enough gratitude. Their dedication to advancing heart health has given me a second chance at life.",
    author: "Michael Rodriguez",
    title: "Patient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    content: "Partnering with The Heartline Foundation has allowed our hospital to provide cutting-edge cardiovascular care that was previously unavailable in our region.",
    author: "Dr. Emily Chen",
    title: "Chief of Cardiology, Central Medical Center",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Are Saying</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from healthcare professionals and patients about the impact of our work.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${current * 100}%` }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <Quote className="h-12 w-12 text-primary opacity-20 mb-6" />
                    <p className="text-lg md:text-xl text-gray-700 mb-8">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                        <p className="text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>

          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;