import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Mail, Phone, MapPin, Linkedin, Github, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please fill in both your Name and Email.');
      return;
    }

    // Trigger Mailto Draft
    const emailTo = 'abhinavpk131@gmail.com';
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'N/A'}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open Mail Client
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;

    // Show Success State in UI
    setIsSubmitted(true);
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" style={{ width: '100%', position: 'relative', marginTop: '100px' }}>
      {/* Top transition area with light background */}
      <div style={{ background: '#f5f5f7', color: '#000', padding: '150px 5%', borderTopLeftRadius: '60px', borderTopRightRadius: '60px', position: 'relative', overflow: 'hidden' }}>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '20%', left: '10%', filter: 'drop-shadow(0 20px 20px rgba(236,72,153,0.3))', pointerEvents: 'none' }}
        >
          <Sparkles size={80} color="#ec4899" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 35, 0], rotate: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ position: 'absolute', top: '40%', right: '10%', filter: 'drop-shadow(0 20px 20px rgba(234,179,8,0.3))', pointerEvents: 'none' }}
        >
          <Zap size={100} color="#eab308" />
        </motion.div>

        <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto', gap: '4rem', position: 'relative', zIndex: 2 }}>
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: '5rem', fontWeight: 900, lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-2px', marginBottom: '1rem' }}>
              Let's<br/>Get In<br/>Touch
            </h2>
            <a href="mailto:abhinavpk131@gmail.com" style={{ fontSize: '1.2rem', fontWeight: 600, textDecoration: 'underline', color: 'var(--accent-blue)', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={20} /> abhinavpk131@gmail.com
            </a>
          </div>

          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '3rem 2rem', background: '#fff', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', border: '1px solid rgba(0,0,0,0.05)' }}
              >
                <CheckCircle2 size={60} color="var(--accent-blue)" />
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Draft Prepared!</h3>
                <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  Your email client has been opened to send the message. If it didn't open, you can send an email directly to <strong>abhinavpk131@gmail.com</strong>.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name*" 
                  required
                  style={{ width: '100%', padding: '15px 0', border: 'none', borderBottom: '2px solid rgba(0,0,0,0.1)', background: 'transparent', fontSize: '1.1rem', outline: 'none', color: '#000' }} 
                />
                
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*" 
                    required
                    style={{ flex: 1, padding: '15px 0', border: 'none', borderBottom: '2px solid rgba(0,0,0,0.1)', background: 'transparent', fontSize: '1.1rem', outline: 'none', color: '#000' }} 
                  />
                  <input 
                    type="text" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone" 
                    style={{ flex: 1, padding: '15px 0', border: 'none', borderBottom: '2px solid rgba(0,0,0,0.1)', background: 'transparent', fontSize: '1.1rem', outline: 'none', color: '#000' }} 
                  />
                </div>

                <input 
                  type="text" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message" 
                  style={{ width: '100%', padding: '15px 0', border: 'none', borderBottom: '2px solid rgba(0,0,0,0.1)', background: 'transparent', fontSize: '1.1rem', outline: 'none', marginBottom: '1.5rem', color: '#000' }} 
                />

                {error && (
                  <p style={{ color: '#dc2626', fontSize: '0.95rem', fontWeight: 500 }}>{error}</p>
                )}
                
                <button 
                  type="submit"
                  style={{ padding: '15px', borderRadius: '30px', border: '2px solid rgba(0,0,0,0.1)', background: 'transparent', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }} 
                  onMouseOver={e => {e.target.style.background='#000'; e.target.style.color='#fff';}} 
                  onMouseOut={e => {e.target.style.background='transparent'; e.target.style.color='#000';}}
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Massive Dark Footer */}
      <div style={{ background: '#050508', color: '#fff', padding: '100px 5% 50px 5%', borderTopLeftRadius: '60px', borderTopRightRadius: '60px', marginTop: '-60px', position: 'relative', zIndex: 5 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '4rem', marginBottom: '80px' }}>
          <div>
            <h2 style={{ fontSize: '6rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-2px', color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
              ABHINAV<br/>P K
            </h2>
          </div>
          
          <div style={{ display: 'flex', gap: '4rem' }}>
            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Social</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '1rem' }}>
                <li>
                  <a href="https://linkedin.com/in/abhinav--pk" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Linkedin size={16} color="var(--accent-blue)" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/abhinavv" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Github size={16} /> GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Contact</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={16} color="var(--accent-blue)" /> abhinavpk131@gmail.com</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={16} color="var(--accent-blue)" /> +91 9383455447</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} color="var(--accent-blue)" /> Kerala, India</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Abstract Colorful Shapes Row */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '150px' }}>
           <div style={{ width: '100px', height: '100px', background: '#fff', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}></div>
           <div style={{ width: '100px', height: '100px', background: '#ec4899', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{ background: 'currentColor', borderRadius: '50%' }}></div>
              <div style={{ background: 'currentColor', borderRadius: '50%' }}></div>
              <div style={{ background: 'currentColor', borderRadius: '50%' }}></div>
              <div style={{ background: 'currentColor', borderRadius: '50%' }}></div>
           </div>
           <div style={{ width: '100px', height: '100px', background: '#fff', borderRadius: '50% 0 0 50%' }}></div>
           <div style={{ width: '120px', height: '120px', background: '#8b5cf6', borderRadius: '50%' }}></div>
           <div style={{ width: '0', height: '0', borderLeft: '50px solid transparent', borderRight: '50px solid transparent', borderBottom: '100px solid #fff', transform: 'rotate(90deg)' }}></div>
           <div style={{ width: '100px', height: '100px', background: '#f59e0b', borderRadius: '50% 50% 0 0' }}></div>
           <div style={{ width: '100px', height: '100px', border: '30px solid #ec4899', borderRadius: '50%' }}></div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '60px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          © 2026 Abhinav P K. Inspired by amazing web designs.
        </div>
      </div>
    </section>
  );
}
