import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldAlert, KeyRound, Laptop } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "SHIELD",
    subtitle: "Real-time AI Landslide & Flood Prediction",
    desc: "Cybersecurity awareness platform-style UI with real-time threat detection demos, user quizzes, and admin analytics.",
    color: "#0a0a0f",
    icon: <ShieldAlert size={100} color="#3b82f6" />
  },
  {
    id: "02",
    title: "Quantum Vault",
    subtitle: "Beyond Conventional Security",
    desc: "Secure document storage with end-to-end encryption, role-based access, and activity tracking.",
    color: "#0a0a0f",
    icon: <KeyRound size={100} color="#8b5cf6" />
  },
  {
    id: "03",
    title: "Personal Portfolio",
    subtitle: "Interactive Web Experience",
    desc: "A highly interactive 3D animated portfolio built with React, Vite, Framer Motion, and Three.js.",
    color: "#0a0a0f",
    icon: <Laptop size={100} color="#06b6d4" />
  }
];

function Card({ project, i, progress, range, targetScale }) {
  const containerRef = useRef(null);
  
  // Scale down when scroll moves past this card's range
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={containerRef} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky', top: 0 }}>
      <motion.div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          top: `calc(-10vh + ${i * 40}px)`,
          height: '600px',
          width: '900px',
          maxWidth: '90vw',
          borderRadius: '30px',
          border: '1px solid rgba(255,255,255,0.1)',
          background: project.color,
          boxShadow: '0 -10px 40px rgba(0,0,0,0.5)',
          overflow: 'hidden',
          scale,
          transformOrigin: 'top center'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px 50px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
            <span style={{ fontSize: '3rem', fontWeight: 900, color: '#fff' }}>{project.id}</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>Project</span>
              <span style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 500 }}>{project.title}</span>
            </div>
          </div>
          <a href="#" style={{ padding: '10px 24px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '30px', color: '#fff', fontWeight: 500, fontSize: '0.9rem', transition: 'background 0.3s' }} onMouseOver={e=>e.target.style.background='rgba(255,255,255,0.1)'} onMouseOut={e=>e.target.style.background='transparent'}>
            LIVE PROJECT
          </a>
        </div>
        
        <div style={{ flex: 1, display: 'flex', padding: '40px 50px', gap: '40px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700, lineHeight: 1.1 }}>{project.subtitle}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>{project.desc}</p>
          </div>
          <div style={{ flex: 1, background: 'rgba(255,255,255,0.02)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
             {project.icon}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" ref={containerRef} style={{ position: 'relative', marginTop: '100px', marginBottom: '100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'sticky', top: '20px', zIndex: 10 }}>
        <h2 className="section-title" style={{ fontSize: '4rem' }}>Featured Projects</h2>
      </div>
      
      {projects.map((project, i) => {
        const targetScale = 1 - ( (projects.length - i) * 0.05 );
        const range = [i * 0.33, 1];
        return (
          <Card key={project.id} i={i} project={project} progress={scrollYProgress} range={range} targetScale={targetScale} />
        );
      })}
    </section>
  );
}
