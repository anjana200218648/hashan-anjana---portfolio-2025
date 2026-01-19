import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Facebook, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Hardcoded EmailJS configuration (remove if using .env)
      const serviceId = 'service_o4f1dlz';
      const templateId = 'template_adjgm13';
      const publicKey = '2Roij0ll3goKmpU37';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'hashananjanahh3@gmail.com',
        reply_to: formData.email
      };

      console.log('Attempting to send email with:', {
        serviceId,
        templateId,
        templateParams
      });

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log('EmailJS response:', response);
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error) {
      console.error('Email send failed:', error);
      
      // Check specific error types
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-poppins mb-8 leading-tight">Let's build something <br />amazing together.</h3>
            <p className="text-white/60 text-lg mb-10 max-w-md">
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail size={20} />, label: 'Email', value: 'hashananjanahh3@gmail.com', href: 'mailto:hashananjanahh3@gmail.com' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'Hashan Anjana', href: 'https://linkedin.com/in/hashan-anjana-62bb18254' },
                { icon: <Github size={20} />, label: 'GitHub', value: '@anjana200218648', href: 'https://github.com/anjana200218648' },
                { icon: <Facebook size={20} />, label: 'Facebook Page', value: 'Hashan Anjana', href: 'https://web.facebook.com/profile.php?id=61582504365615' }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-4 glass rounded-2xl group hover:bg-white/5 transition-all duration-300 border-white/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="font-medium text-white/80">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[40px] border-white/10"
          >
            <div className="space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors" 
                    placeholder="Project Inquiry" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                  <textarea 
                    rows={5} 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none" 
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                </motion.button>
              </form>
              
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm"
                >
                  ❌ Failed to send message. Please try again or contact me directly at hashananjanahh3@gmail.com
                </motion.div>
              )}
              
              {/* Debug information (remove in production) */}
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;