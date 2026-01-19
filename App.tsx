
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import ResearchHighlight from './components/ResearchHighlight';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
      />
      
      <Header />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ResearchHighlight />
        <Timeline />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Global Elements */}
      <FloatingChat />
      
      {/* Global Glass Gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
};

export default App;
