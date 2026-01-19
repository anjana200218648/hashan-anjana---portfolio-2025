
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Hashan Anjana. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Terms of Service</a>
        </div>
        <p className="text-white/40 text-xs tracking-widest uppercase">
          Sri Lanka 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
