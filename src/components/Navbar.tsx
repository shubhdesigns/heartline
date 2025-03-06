import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-xl font-bold">
              <span className="text-[#FF6B6B]">Heart</span>
              <span className="text-[#4D96FF]">line</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#solutions" className="nav-link">Solutions</a>
            <a href="#team" className="nav-link">Team</a>
            <a href="#contact" className="btn-primary">Contact Us</a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-700 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
              <a href="#solutions" className="nav-link" onClick={() => setIsOpen(false)}>Solutions</a>
              <a href="#team" className="nav-link" onClick={() => setIsOpen(false)}>Team</a>
              <a href="#contact" className="btn-primary w-full text-center" onClick={() => setIsOpen(false)}>Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;