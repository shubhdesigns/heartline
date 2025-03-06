import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-[#4D96FF]">
            Heartline
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-[#4D96FF] transition-colors">About</a>
            <a href="#solutions" className="text-gray-600 hover:text-[#4D96FF] transition-colors">Solutions</a>
            <a href="#team" className="text-gray-600 hover:text-[#4D96FF] transition-colors">Team</a>
            <a href="#contact" className="text-gray-600 hover:text-[#4D96FF] transition-colors">Contact</a>
          </div>
          <button 
            className="md:hidden text-gray-600 hover:text-[#4D96FF] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-[#4D96FF] transition-colors" onClick={() => setIsOpen(false)}>About</a>
              <a href="#solutions" className="text-gray-600 hover:text-[#4D96FF] transition-colors" onClick={() => setIsOpen(false)}>Solutions</a>
              <a href="#team" className="text-gray-600 hover:text-[#4D96FF] transition-colors" onClick={() => setIsOpen(false)}>Team</a>
              <a href="#contact" className="text-gray-600 hover:text-[#4D96FF] transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;