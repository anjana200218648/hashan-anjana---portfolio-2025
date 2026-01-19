
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu, Lightbulb } from 'lucide-react';

const STATS = [
  { label: 'Projects Done', value: '25+', icon: <Globe size={24} /> },
  { label: 'Years Experience', value: '1.5+', icon: <Code2 size={24} /> },
  { label: 'Technologies', value: '15+', icon: <Cpu size={24} /> },
  { label: 'Creative Ideas', value: '∞', icon: <Lightbulb size={24} /> }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
              <img 
                src="/images/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl border-blue-500/30">
              <p className="text-3xl font-bold font-poppins">99.9%</p>
              <p className="text-xs text-white/50 uppercase tracking-widest">Code Quality</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">About Me</h2>
            <h3 className="text-4xl font-bold font-poppins mb-6">Building intelligent, user-focused digital solutions.</h3>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              I’m an IT and software-focused professional experienced in developing practical digital systems and research-driven solutions. My background combines real-world project experience with work in Image Processing and Machine Learning, enabling me to design technology that is efficient, scalable, and user-centric.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 glass rounded-2xl hover:bg-white/5 transition-colors border-white/5"
                >
                  <div className="text-blue-500 mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold font-poppins mb-1">{stat.value}</div>
                  <div className="text-sm text-white/40">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
