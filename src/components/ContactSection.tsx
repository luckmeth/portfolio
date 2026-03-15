import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'methullakvindu5@gmail.com', href: 'mailto:methullakvindu5@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+94 71 041 6019', href: 'tel:+94710416019' },
  { icon: MapPin, label: 'Location', value: 'Panagoda, Sri Lanka', href: null },
];

const inputClasses =
  'w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-ash-600 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/20 transition-all duration-300 font-sans text-sm';

const ContactSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct the WhatsApp message
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/94767246019?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Simulate submission for UI feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 dot-bg" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase">// Contact</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-3">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-ash-400 text-lg max-w-2xl mx-auto mt-4">
            Ready to bring your digital vision to life? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white font-display font-bold text-2xl mb-4">Get In Touch</h3>
              <p className="text-ash-300 text-base leading-relaxed">
                Whether you need web development, digital marketing, creative design,
                or want to discuss innovative ideas, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-red-500/30 group-hover:bg-red-500/10 transition-all duration-300">
                    <info.icon size={18} className="text-ash-400 group-hover:text-red-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-ash-500 text-xs font-mono uppercase tracking-wider">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-white hover:text-red-400 transition-colors font-medium text-sm">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="glass-card rounded-2xl p-7 relative overflow-hidden">
              <div className="absolute -top-px -left-px -right-px h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />
              <h4 className="text-white font-display font-semibold text-lg mb-2">
                Ready to start your project?
              </h4>
              <p className="text-ash-400 text-sm mb-5">
                Let's build something amazing together.
              </p>
              <a
                href="tel:+94710416019"
                className="group inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
              >
                Schedule a Call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-400" size={32} />
                </div>
                <h3 className="text-white font-display font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-ash-400 text-sm">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-ash-400 text-xs font-mono uppercase tracking-wider mb-2">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClasses} placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-ash-400 text-xs font-mono uppercase tracking-wider mb-2">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClasses} placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-ash-400 text-xs font-mono uppercase tracking-wider mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClasses} placeholder="Project Discussion" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-ash-400 text-xs font-mono uppercase tracking-wider mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClasses} resize-none`} placeholder="Tell me about your project..." />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-500 hover:bg-red-600 disabled:bg-ash-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;