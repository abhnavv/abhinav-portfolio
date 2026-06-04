import React, { useState, useEffect } from 'react';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Menu, X } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      <div className="noise-overlay"></div>
      <Background3D />
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <nav style={{ 
          position: 'fixed', 
          top: 0, 
          width: '100%', 
          padding: scrolled ? '14px 5%' : '20px 5%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          background: scrolled ? 'rgba(3, 3, 5, 0.9)' : 'rgba(3, 3, 5, 0.4)', 
          backdropFilter: 'blur(20px)', 
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 100, 
          borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)'}`,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '1px', fontFamily: 'Outfit' }}>
            ABHINAV<span style={{ color: 'var(--accent-blue)' }}>.</span>
          </div>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.9rem', fontWeight: 500 }} className="desktop-nav">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href} 
                style={{ transition: 'color 0.3s', position: 'relative' }} 
                onMouseOver={e => e.target.style.color='var(--accent-blue)'} 
                onMouseOut={e => e.target.style.color='inherit'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ 
              display: 'none', 
              background: 'none', 
              border: 'none', 
              color: '#fff', 
              cursor: 'pointer',
              padding: '5px',
              zIndex: 110
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(3, 3, 5, 0.95)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem'
            }}
            className="mobile-menu-overlay"
          >
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ 
                  fontSize: '2rem', 
                  fontWeight: 700, 
                  fontFamily: "'Outfit', sans-serif",
                  color: '#fff',
                  transition: 'color 0.3s'
                }}
                onMouseOver={e => e.target.style.color='var(--accent-blue)'}
                onMouseOut={e => e.target.style.color='#fff'}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
