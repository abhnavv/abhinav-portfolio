import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '4rem', marginTop: '100px', padding: '100px 5%' }}>
      
      {/* Background / Bio Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
        <div style={{ flex: '1 1 500px' }}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            style={{ color: 'var(--accent-blue)', letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 600 }}
          >
            About Me
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-1px' }}
          >
            Driven by curiosity.<br/>Focused on impact.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}
          >
            I'm a B.Tech CSE Graduate (Lateral Entry) passionate about turning ideas into real-world products. I enjoy solving problems, learning new technologies, and building clean, efficient, and scalable applications.
          </motion.p>

          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ listStyle: 'none', color: 'var(--accent-blue)', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '3rem', fontWeight: 500 }}
          >
            <li>✓ Problem solver</li>
            <li>✓ Fast learner</li>
            <li>✓ Team player</li>
            <li>✓ Clean code advocate</li>
          </motion.ul>

          <motion.a 
            href="/ABHINAVPK.pdf" 
            download="ABHINAVPK_Resume.pdf"
            className="glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ padding: '12px 24px', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: 600 }}
          >
            Download Resume ↓
          </motion.a>
        </div>
        
        <div style={{ flex: '1 1 400px' }}>
          <motion.div 
            className="glass-panel" 
            style={{ padding: '2.5rem' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: 500 }}>Interests</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Web Development', 'AI/ML', 'Cybersecurity', 'Open Source'].map((item, i) => (
                <span key={i} style={{ background: 'var(--bg-base)', border: '1px solid var(--border-light)', padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
