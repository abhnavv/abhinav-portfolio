import React from 'react';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      <Background3D />
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(3, 3, 5, 0.8)', backdropFilter: 'blur(15px)', zIndex: 100, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '1px', fontFamily: 'Outfit' }}>
            ABHINAV P K<span style={{ color: 'var(--accent-blue)' }}>.</span>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.9rem', fontWeight: 500 }}>
            <a href="#about" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-blue)'} onMouseOut={e => e.target.style.color='inherit'}>About</a>
            <a href="#education" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-blue)'} onMouseOut={e => e.target.style.color='inherit'}>Education</a>
            <a href="#skills" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-blue)'} onMouseOut={e => e.target.style.color='inherit'}>Skills</a>
            <a href="#projects" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-blue)'} onMouseOut={e => e.target.style.color='inherit'}>Projects</a>
            <a href="#contact" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-blue)'} onMouseOut={e => e.target.style.color='inherit'}>Contact</a>
          </div>
        </nav>
        
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
