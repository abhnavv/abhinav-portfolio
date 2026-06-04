import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "SHIELD",
    subtitle: "Real-Time Disaster Prediction",
    category: "AI / ML SYSTEM",
    year: "2026",
    desc: "An intelligent disaster prediction system using IoT sensors and machine learning algorithms to detect floods and landslides in real-time. Features live sensor dashboards, prediction confidence scoring, and automated alert systems.",
    tech: ["Python", "FastAPI", "Machine Learning", "IoT Sensors", "Real-Time"],
    image: "/shield_project.png",
    color: "#3b82f6",
    live: "#",
    github: "https://github.com/abhnavv/SHIELD"
  },
  {
    id: "02",
    title: "Quantum Vault",
    subtitle: "Cross-Platform Password Manager",
    category: "SECURITY / FULL STACK",
    year: "2025",
    desc: "A secure cross-platform password manager with end-to-end encryption, role-based access control, multi-factor authentication, and comprehensive admin analytics dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Encryption", "MFA"],
    image: "/quantumvault_project.png",
    color: "#8b5cf6",
    live: "#",
    github: "#"
  },
  {
    id: "03",
    title: "Personal Portfolio",
    subtitle: "Interactive Web Experience",
    category: "WEB DEVELOPMENT",
    year: "2026",
    desc: "A highly interactive 3D animated portfolio built with modern web technologies. Features scroll-driven animations, stacking card effects, liquid 3D backgrounds, and premium glassmorphism design.",
    tech: ["React", "Three.js", "Framer Motion", "Vite"],
    image: "/portfolio_project.png",
    color: "#06b6d4",
    live: "https://abhinavpk-portfolio.vercel.app/",
    github: "https://github.com/abhnavv/abhinav-portfolio"
  }
];

function Card({ project, i, progress, range, targetScale }) {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const isEven = i % 2 === 1;

  return (
    <div ref={containerRef} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky', top: 0 }}>
      <motion.div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'relative',
          top: `calc(-10vh + ${i * 40}px)`,
          height: '550px',
          width: '1100px',
          maxWidth: '92vw',
          borderRadius: '30px',
          border: '1px solid rgba(255,255,255,0.08)',
          background: '#0a0a0f',
          boxShadow: '0 -10px 40px rgba(0,0,0,0.5)',
          overflow: 'hidden',
          scale,
          transformOrigin: 'top center'
        }}
      >
        {/* Preview Side */}
        <div style={{ 
          order: isEven ? 2 : 1,
          flex: '1 1 45%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: `radial-gradient(circle at ${isEven ? '30%' : '70%'} 50%, ${project.color}15 0%, transparent 70%)`
        }}>
          {/* Large faded number */}
          <span style={{ 
            position: 'absolute',
            fontSize: '18rem',
            fontWeight: 900,
            color: 'rgba(255,255,255,0.03)',
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: '-10px',
            userSelect: 'none',
            lineHeight: 1
          }}>
            {project.id}
          </span>
          
          {/* Project image */}
          <motion.img 
            src={project.image}
            alt={project.title}
            style={{ 
              width: '85%',
              height: '75%',
              objectFit: 'cover',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.08)',
              position: 'relative',
              zIndex: 2,
              boxShadow: `0 20px 60px ${project.color}20`
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />

          {/* Subtle glow behind */}
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            background: project.color,
            borderRadius: '50%',
            filter: 'blur(80px)',
            opacity: 0.15,
            zIndex: 1
          }} />
        </div>

        {/* Content Side */}
        <div style={{ 
          order: isEven ? 1 : 2,
          flex: '1 1 55%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '50px',
          position: 'relative'
        }}>
          {/* Category & Year Tag */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            marginBottom: '1.2rem',
            fontSize: '0.8rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'var(--text-muted)',
            fontFamily: "'Outfit', sans-serif"
          }}>
            <span style={{ color: project.color }}>◆</span>
            <span>{project.category}</span>
            <span style={{ 
              color: project.color, 
              background: `${project.color}15`,
              padding: '3px 10px',
              borderRadius: '20px',
              fontSize: '0.75rem'
            }}>
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3 style={{ 
            fontSize: '2.8rem', 
            fontWeight: 800, 
            marginBottom: '0.5rem',
            lineHeight: 1.1,
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: '-1px',
            color: '#fff'
          }}>
            {project.title}
          </h3>

          {/* Subtitle */}
          <p style={{ 
            fontSize: '1.15rem', 
            color: project.color, 
            fontWeight: 500, 
            marginBottom: '1.5rem',
            fontFamily: "'Outfit', sans-serif"
          }}>
            {project.subtitle}
          </p>

          {/* Description */}
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '1.05rem', 
            lineHeight: 1.7, 
            marginBottom: '2rem',
            maxWidth: '500px'
          }}>
            {project.desc}
          </p>

          {/* Tech Stack Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem' }}>
            {project.tech.map((t, idx) => (
              <span key={idx} style={{ 
                padding: '6px 14px',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                fontWeight: 500,
                background: 'rgba(255,255,255,0.03)',
                transition: 'all 0.3s'
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* View Project Link */}
          {/* Action Links */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a 
              href={project.live} 
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                background: project.color,
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.9rem',
                borderRadius: '8px',
                fontFamily: "'Outfit', sans-serif",
                textDecoration: 'none',
                transition: 'all 0.3s',
                boxShadow: `0 4px 15px ${project.color}40`
              }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 25px ${project.color}60`; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 15px ${project.color}40`; }}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
            <a 
              href={project.github} 
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                background: 'transparent',
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.9rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.15)',
                fontFamily: "'Outfit', sans-serif",
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Github size={16} /> GitHub
            </a>
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
      
      {/* Header Section */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
        alignItems: 'flex-end',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 5% 4rem 5%',
        gap: '2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <div style={{ width: '30px', height: '2px', background: 'var(--accent-blue)' }}></div>
            <span style={{ color: 'var(--accent-blue)', letterSpacing: '3px', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 700, fontFamily: 'Outfit' }}>
              Projects
            </span>
            <div style={{ width: '30px', height: '2px', background: 'var(--accent-blue)' }}></div>
          </div>
          <h2 style={{ 
            fontSize: '5rem', 
            lineHeight: 1.05, 
            letterSpacing: '-1px',
            fontFamily: "'Playfair Display', serif"
          }}>
            <span style={{ fontWeight: 800, fontStyle: 'italic', color: '#fff' }}>Selected</span>
            <br/>
            <span style={{ 
              fontWeight: 900, 
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              work
            </span>
          </h2>
        </div>
        <p style={{ 
          color: 'var(--text-muted)', 
          fontSize: '1.1rem', 
          lineHeight: 1.7, 
          maxWidth: '400px',
          textAlign: 'right'
        }}>
          A curated selection of projects that showcase my expertise in full-stack development, AI/ML, and modern web technologies.
        </p>
      </div>

      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05);
        const range = [i * 0.33, 1];
        return (
          <Card key={project.id} i={i} project={project} progress={scrollYProgress} range={range} targetScale={targetScale} />
        );
      })}
    </section>
  );
}
