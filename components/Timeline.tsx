
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white/2">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Career Journey</h2>
          <h3 className="text-4xl font-bold font-poppins">Work Experience</h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-10 border-l border-white/10 pb-8 last:pb-0"
            >
              <div className="absolute left-[-17px] top-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white border-4 border-[#0a0a0a]">
                <Briefcase size={14} />
              </div>
              
              <div className="glass p-8 rounded-3xl border-white/5 hover:border-blue-500/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold font-poppins text-white">{exp.role}</h4>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1.5 glass rounded-full text-xs font-bold text-white/50 border-white/10 shrink-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-white/60 text-sm flex gap-3 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
