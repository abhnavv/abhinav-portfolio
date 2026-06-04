import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax and fade animations for text and background
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);
  
  const scaleAvatar = useTransform(scrollY, [0, 500], [1, 0.85]);
  const opacityAvatar = useTransform(scrollY, [0, 500], [1, 0]);
  const yAvatar = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <motion.section 
      className="section-container" 
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5%', width: '100%', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background glow responding to scroll */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          width: '500px', 
          height: '500px', 
          background: 'var(--accent-blue)', 
          borderRadius: '50%', 
          filter: 'blur(120px)', 
          opacity: 0.15, 
          zIndex: -1,
          left: '10%',
          top: '20%',
          y: yText 
        }}
      />

      <motion.div style={{ flex: 1, zIndex: 2, y: yText, opacity: opacityText }}>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: 'var(--text-muted)', fontSize: '1.2rem', letterSpacing: '1px', marginBottom: '1rem', fontWeight: 500 }}
        >
          Hello, I'm
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: '5.5rem', fontWeight: 800, margin: '0 0 0.5rem 0', lineHeight: 1.1, letterSpacing: '-2px' }}
        >
          Abhinav
        </motion.h1>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: '1.8rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 400 }}
        >
          B.Tech CSE Graduate<br/>
          <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>MERN Stack Developer.</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ maxWidth: '500px', lineHeight: 1.6, marginBottom: '3rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}
        >
          I build clean, scalable, high-performance web applications that solve real-world problems and deliver meaningful user experiences.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: 'flex', gap: '1rem' }}
        >
          <a href="#projects" style={{ padding: '14px 28px', fontWeight: 600, color: '#fff', background: 'var(--accent-blue)', borderRadius: '8px', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)' }}>
            View My Work ↗
          </a>
          <a href="/ABHINAVPK.pdf" download="ABHINAVPK_Resume.pdf" className="glass-panel" style={{ padding: '14px 28px', fontWeight: 600, color: '#fff', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Download Resume ↓
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center', 
          position: 'relative',
          scale: scaleAvatar,
          opacity: opacityAvatar,
          y: yAvatar
        }}
      >
      <motion.img
  src="/avatar.png"
  alt="Abhinav"
  style={{
    width: '450px',
    height: '450px',
    objectFit: 'cover',
    objectPosition: 'center 25%',
    borderRadius: '50%',
    border: '1px solid var(--border-light)',
    boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
    transform: 'scale(0.92)'
  }}
  animate={{ y: [0, -15, 0] }}
  transition={{
    repeat: Infinity,
    duration: 6,
    ease: "easeInOut"
  }}
/>
      </motion.div>
    </motion.section>
  );
}
