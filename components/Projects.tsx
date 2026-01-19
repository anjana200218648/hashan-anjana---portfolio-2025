import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, Code, ChevronRight, Globe, Cpu } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'recent' | 'collaborative' | 'softwares'>('recent');

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Portfolio</h2>
            <h3 className="text-5xl font-bold font-poppins mb-6">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              A collection of my recent works, collaborative projects, and custom software solutions that showcase my expertise in modern web development.
            </p>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { key: 'recent', label: 'Recent Projects', icon: <Globe size={18} /> },
            { key: 'collaborative', label: 'Collaborative Work', icon: <Users size={18} /> },
            { key: 'softwares', label: 'Software Solutions', icon: <Cpu size={18} /> }
          ].map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Recent Projects */}
        {activeCategory === 'recent' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {PROJECTS.recent.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                  <img 
                    src={project.image || "/images/projects/default.jpg"} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status || 'Live'}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                        <p className="text-sm text-white/80 line-clamp-2 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {(project.tech || []).slice(0, 3).map((t: string, i: number) => (
                            <span key={i} className="text-xs font-medium text-blue-300 bg-blue-500/20 px-2 py-1 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Collaborative Projects */}
        {activeCategory === 'collaborative' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PROJECTS.collaborative.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 h-full hover:border-white/20 transition-all duration-300">
                  {/* Role Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                      {project.role || 'Team Member'}
                    </span>
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                    <Users size={24} className="text-purple-400" />
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-white/60 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(project.tech || []).slice(0, 4).map((t: string, i: number) => (
                      <span key={i} className="text-xs font-medium text-white/70 bg-white/10 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-purple-300"
                    >
                      Visit Website
                      <ChevronRight size={16} />
                    </motion.a>
                    <span className="text-xs text-white/40">
                      Team Project
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Software Solutions */}
        {activeCategory === 'softwares' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {PROJECTS.softwares.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/50 p-8 h-full">
                  {/* Category Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {project.category || 'Software'}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      <Code size={28} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                      <p className="text-white/60">{project.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {(project.tech || []).map((t: string, i: number) => (
                      <span key={i} className="text-sm font-medium text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-6 py-3 bg-white/10 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-white/20 transition-colors"
                      >
                        <Github size={18} />
                        View Code
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center gap-2 font-medium shadow-lg shadow-blue-500/25"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    )}
                    {!project.link && (
                      <div className="flex-1 px-6 py-3 bg-white/5 rounded-xl flex items-center justify-center gap-2 font-medium text-white/40">
                        <ExternalLink size={18} />
                        Demo Available Soon
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-white/10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {PROJECTS.recent.length + PROJECTS.collaborative.length + PROJECTS.softwares.length}+
              </div>
              <div className="text-lg font-semibold mb-2">Total Projects</div>
              <div className="text-sm text-white/60">Websites & Applications</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {PROJECTS.collaborative.length}
              </div>
              <div className="text-lg font-semibold mb-2">Team Projects</div>
              <div className="text-sm text-white/60">Successful Collaborations</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 hover:border-green-500/40 transition-colors">
              <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-lg font-semibold mb-2">Technologies</div>
              <div className="text-sm text-white/60">Modern Stack Mastery</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-lg font-semibold mb-2">Satisfaction</div>
              <div className="text-sm text-white/60">Client Feedback</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;