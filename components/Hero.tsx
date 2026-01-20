import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  // ✅ Google Drive Link එක (ඔබේ file ID එකට change කරන්න)
  const cvDriveLink = "https://drive.google.com/file/d/1qFaZv_PmvF6WMrK0mYkdSrksHWssYPzp/view?usp=sharing";

  // ✅ CV download කරගන්න function එක
  const handleDownloadCV = () => {
    // Google Drive direct download link එක open කරන්න
    window.open(cvDriveLink, '_blank');
    
    
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-500/20">
            Available for New Projects
          </span>
          <h1 className="text-5xl md:text-8xl font-bold font-poppins leading-tight mb-6">
            Building modern, <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">meaningful</span> experiences
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            I'm <span className="text-white font-medium">Hashan Anjana</span>, a software developer dedicated to crafting 
            polished digital products that merge sophisticated UI with robust performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-colors"
            >
              View My Work <ExternalLink size={18} />
            </motion.a>
            
            {/* ✅ Updated Download CV Button - Google Drive වලින් */}
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              Download CV <Download size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
