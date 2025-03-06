import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lg font-bold">
                <span className="text-[#FF6B6B]">Heart</span>
                <span className="text-[#4D96FF]">line</span>
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Advancing cardiovascular health through innovation, research, and compassionate care.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/the_heartlinefoundation/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#FF6B6B] transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-[#4D96FF] transition-colors">About Us</a></li>
              <li><a href="#solutions" className="text-gray-600 hover:text-[#4D96FF] transition-colors">Our Solutions</a></li>
              <li><a href="#team" className="text-gray-600 hover:text-[#4D96FF] transition-colors">Team</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Goal</h3>
            <p className="text-gray-600">
              We aim to help 10,000 people through our nonprofit initiatives, combining AI innovation with community support to make cardiovascular care more accessible and effective.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} The Heartline Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-[#4D96FF] text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-[#4D96FF] text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;