
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-4 bg-black/60 backdrop-blur-lg border-b border-white/10' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold font-poppins bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
        >
          H. ANJANA
        </motion.div>
        
        <div className="hidden md:flex gap-8 items-center">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
