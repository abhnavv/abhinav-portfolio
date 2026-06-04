import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, School } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Govt. Engineering College Wayanad · Lateral Entry',
    period: '2023 - 2026',
    score: 'CGPA: 7.9',
    details: 'Graduated with strong foundations in software engineering, algorithms, database systems, and full-stack web applications. Participated in technical projects and coding hackathons.',
    icon: <GraduationCap size={22} />
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'Seethi Sahib Memorial Polytechnic College, Tirur',
    period: '2020 - 2023',
    score: 'CGPA: 8.76',
    details: 'Acquired core computing concepts including data structures, object-oriented programming, operating systems, and computer hardware fundamentals.',
    icon: <BookOpen size={22} />
  },
  {
    degree: 'Higher Secondary — Computer Science',
    institution: 'Govt. Model Higher Secondary School, Calicut University',
    period: '2018 - 2020',
    score: '86.5%',
    details: 'Formed the initial foundation in programming concepts (C++), computer systems, and foundational engineering mathematics.',
    icon: <School size={22} />
  }
];

export default function Education() {
  return (
    <section id="education" className="section-container" style={{ width: '100%', padding: '100px 5%', marginTop: '100px' }}>
      
      {/* 6 Years of Engineering Title & Description */}
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
          <div style={{ width: '30px', height: '2px', background: 'var(--accent-blue)' }}></div>
          <span style={{ color: 'var(--accent-blue)', letterSpacing: '3px', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 700, fontFamily: 'Outfit' }}>
            Education
          </span>
          <div style={{ width: '30px', height: '2px', background: 'var(--accent-blue)' }}></div>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ 
            marginBottom: '1.5rem', 
            fontSize: '5rem', 
            lineHeight: 1.05, 
            letterSpacing: '-1px',
            fontFamily: "'Playfair Display', serif"
          }}
        >
          <span style={{ fontWeight: 800, fontStyle: 'italic', color: '#fff' }}>6 Years of</span>
          <br/>
          <span style={{ 
            fontWeight: 900, 
            fontStyle: 'italic',
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Engineering
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto' }}
        >
          A continuous engineering journey — from Higher Secondary through Diploma to Bachelor's — building a comprehensive technical and analytical foundation.
        </motion.p>
      </div>

      <div style={{ position: 'relative', maxWidth: '850px', margin: '0 auto', padding: '20px 0' }}>
        {/* Animated Vertical Line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ 
            position: 'absolute', 
            left: '30px', 
            top: 0, 
            width: '2px', 
            background: 'linear-gradient(to bottom, var(--accent-blue), transparent)', 
            transformOrigin: 'top' 
          }} 
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {educationData.map((item, index) => (
            <div key={index} style={{ display: 'flex', gap: '30px', position: 'relative' }}>
              
              {/* Timeline dot with icon */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ type: 'spring', stiffness: 200, delay: index * 0.15 }}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'var(--bg-base)',
                  border: '2px solid var(--accent-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
                  flexShrink: 0
                }}
              >
                <div style={{ color: 'var(--accent-blue)' }}>{item.icon}</div>
              </motion.div>

              {/* Timeline Card with premium hover animations */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100, delay: index * 0.1 }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.015,
                  borderColor: 'rgba(59, 130, 246, 0.5)', 
                  boxShadow: '0 20px 50px rgba(59, 130, 246, 0.12), 0 0 0 1px rgba(59, 130, 246, 0.15)',
                  backgroundColor: 'rgba(25, 25, 30, 0.9)'
                }}
                style={{ 
                  flex: 1, 
                  padding: '2.5rem', 
                  position: 'relative',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '20px',
                  background: 'rgba(15, 15, 20, 0.7)',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
              >
                {/* Visual Accent Indicator */}
                <div style={{ 
                  position: 'absolute', 
                  left: 0, 
                  top: '15%', 
                  bottom: '15%', 
                  width: '4px', 
                  background: 'linear-gradient(to bottom, var(--accent-blue), var(--accent-cyan))', 
                  borderRadius: '0 4px 4px 0' 
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px', marginBottom: '1.2rem' }}>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.4rem', 
                      fontWeight: 700, 
                      marginBottom: '0.4rem', 
                      color: '#fff', 
                      fontFamily: "'Outfit', sans-serif",
                      letterSpacing: '-0.3px'
                    }}>
                      {item.degree}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 500 }}>{item.institution}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                    <span style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '6px', 
                      fontSize: '0.85rem', 
                      background: 'rgba(59, 130, 246, 0.1)', 
                      color: 'var(--accent-blue)', 
                      padding: '4px 12px', 
                      borderRadius: '30px', 
                      fontWeight: 600 
                    }}>
                      <Calendar size={12} /> {item.period}
                    </span>
                    <span style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '6px', 
                      fontSize: '0.85rem', 
                      background: 'rgba(245, 158, 11, 0.08)', 
                      color: '#f59e0b', 
                      border: '1px solid rgba(245, 158, 11, 0.2)',
                      padding: '4px 12px', 
                      borderRadius: '30px', 
                      fontWeight: 600 
                    }}>
                      <Award size={12} color="#f59e0b" /> {item.score}
                    </span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{item.details}</p>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
