import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Download, ExternalLink } from 'lucide-react';

interface Research {
  title: string;
  authors: string[];
  abstract: string;
  date: string;
  category: string;
  link: string;
}

const researchData: Research[] = [
  {
    title: "AI-Driven ECG Analysis for Early Detection of Heart Conditions",
    authors: ["Mithun Gopinath", "Navin Maji", "Dr. Sarah Chen"],
    abstract: "A novel approach using deep learning to analyze ECG patterns and identify potential cardiac abnormalities with high accuracy. Our research demonstrates significant improvements in early detection rates.",
    date: "2024",
    category: "AI & Machine Learning",
    link: "#"
  },
  {
    title: "Mobile Heart Rate Monitoring: A Comparative Study",
    authors: ["Shubh Patel", "Pranav Katta", "Dr. Michael Park"],
    abstract: "Evaluation of smartphone-based heart rate monitoring techniques and their accuracy compared to medical-grade devices. Our findings show promising results for accessible heart health monitoring.",
    date: "2024",
    category: "Mobile Health",
    link: "#"
  },
  {
    title: "Improving Cardiovascular Health Through Technology",
    authors: ["Rehaan Grover", "Kuhu Barole", "Dr. Emily Rodriguez"],
    abstract: "A comprehensive review of technological innovations in cardiovascular healthcare and their impact on patient outcomes. This study explores the intersection of technology and community health initiatives.",
    date: "2024",
    category: "Healthcare Technology",
    link: "#"
  },
  {
    title: "Community Impact of AI-Driven Heart Health Solutions",
    authors: ["Navin Maji", "Kuhu Barole", "Dr. James Wilson"],
    abstract: "Analysis of the effectiveness of AI-powered cardiovascular health solutions in community settings. The study highlights the importance of accessible healthcare technology.",
    date: "2024",
    category: "Healthcare Technology",
    link: "#"
  }
];

const categories = ["All", "AI & Machine Learning", "Mobile Health", "Healthcare Technology"];

const ResearchHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredResearch = researchData.filter(research => {
    const matchesSearch = research.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      research.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
      research.authors.join(' ').toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || research.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-[#4D96FF] to-[#FF6B6B]">
        <h2 className="text-2xl font-bold text-white">Research Hub</h2>
        <p className="text-white/80">Access our latest cardiovascular research findings</p>
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search research papers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#4D96FF] focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#4D96FF] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredResearch.map((research, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2b4b] mb-2">
                    {research.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {research.authors.join(', ')} • {research.date}
                  </p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-[#4D96FF] rounded-full text-sm">
                  {research.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">
                {research.abstract}
              </p>

              <div className="flex gap-4">
                <a
                  href={research.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#4D96FF] hover:underline"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Paper
                </a>
                <a
                  href={research.link}
                  download
                  className="flex items-center text-[#4D96FF] hover:underline"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
                <a
                  href={research.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#4D96FF] hover:underline"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Source
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchHub; 