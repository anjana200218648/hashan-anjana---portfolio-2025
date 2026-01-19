
import React from 'react';
import { motion } from 'framer-motion';
import { RESEARCH_PROJECT } from '../constants';
import { Search, ShieldCheck, Zap, Layers } from 'lucide-react';

const ResearchHighlight: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6">
        <div className="glass p-10 md:p-16 rounded-[40px] border-white/10 relative">
          <div className="absolute top-0 right-0 p-8">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="w-32 h-32 border border-blue-500/20 rounded-full flex items-center justify-center"
            >
              <div className="w-24 h-24 border border-indigo-500/20 rounded-full" />
            </motion.div>
          </div>

          <div className="max-w-4xl relative z-10">
            <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Special Project Highlight</span>
            <h2 className="text-5xl md:text-7xl font-bold font-poppins mb-4">{RESEARCH_PROJECT.title}</h2>
            <h3 className="text-xl md:text-2xl text-white/60 font-light mb-12">{RESEARCH_PROJECT.subtitle}</h3>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-10">
                <div>
                  <h4 className="flex items-center gap-3 text-lg font-bold mb-4">
                    <Search className="text-blue-500" size={20} /> The Problem
                  </h4>
                  <p className="text-white/60 leading-relaxed italic border-l-2 border-blue-500/30 pl-4">
                    "{RESEARCH_PROJECT.problem}"
                  </p>
                </div>
                <div>
                  <h4 className="flex items-center gap-3 text-lg font-bold mb-4">
                    <Zap className="text-indigo-500" size={20} /> The Solution
                  </h4>
                  <p className="text-white/60 leading-relaxed">
                    {RESEARCH_PROJECT.solution}
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="flex items-center gap-3 text-lg font-bold mb-4">
                    <Layers className="text-purple-500" size={20} /> Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {RESEARCH_PROJECT.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 glass rounded-lg text-xs font-semibold text-white/80 border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="flex items-center gap-3 text-lg font-bold mb-4">
                    <ShieldCheck className="text-emerald-500" size={20} /> Impact
                  </h4>
                  <p className="text-white/60 leading-relaxed">
                    {RESEARCH_PROJECT.impact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlight;
