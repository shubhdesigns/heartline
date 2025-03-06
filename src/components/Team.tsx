import type { FC } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Mithun Gopinath",
    role: "Founder",
    image: "/mithun.jpg",
    bio: "Leading the vision of revolutionizing cardiovascular healthcare through innovative technology and student-led initiatives"
  },
  {
    name: "Navin Maji",
    role: "Co-President",
    image: "/navin.jpg",
    bio: "Driving innovation in healthcare technology and leading strategic initiatives for community impact"
  },
  {
    name: "Shubh Patel",
    role: "Vice President & Web Developer",
    image: "/shubh.jpg",
    bio: "Leading technical development and implementing innovative web solutions for healthcare accessibility"
  },
  {
    name: "Pranav Katta",
    role: "Treasurer",
    image: "/pranav.jpg",
    bio: "Overseeing financial planning and resource allocation to support our healthcare initiatives"
  },
  {
    name: "Rehaan Grover",
    role: "Marketing Coordinator",
    image: "/rehaan.jpg",
    bio: "Spearheading marketing strategies and building meaningful connections within the healthcare community"
  },
  {
    name: "Kuhu Barole",
    role: "Volunteer Coordinator",
    image: "/kuhu.jpg",
    bio: "Coordinating volunteer initiatives and fostering community engagement in healthcare outreach programs"
  }
];

const Team: FC = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1a2b4b] mb-6">
            Our Leadership Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team of students leading the Heartline Foundation's mission to revolutionize cardiovascular healthcare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#4D96FF] to-[#FF6B6B] rounded-full opacity-0 hover:opacity-20 transition-opacity" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a2b4b] mb-2 text-center">
                {member.name}
              </h3>
              <p className="text-[#4D96FF] font-medium mb-2 text-center">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm mb-4 text-center">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;