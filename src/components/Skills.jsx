import { motion } from 'framer-motion';
import { Layers, Database, Code2, Cpu, Wrench } from 'lucide-react';

const skills = [
  { name: 'React.js', icon: <Code2 size={32} color="#61DAFB" /> },
  { name: 'Node.js', icon: <Layers size={32} color="#339933" /> },
  { name: 'Express.js', icon: <Cpu size={32} color="#fff" /> },
  { name: 'MongoDB', icon: <Database size={32} color="#47A248" /> },
  { name: 'JavaScript', icon: <Code2 size={32} color="#F7DF1E" /> },
  { name: 'Python', icon: <Code2 size={32} color="#3776AB" /> },
  { name: 'C++', icon: <Cpu size={32} color="#00599C" /> },
  { name: 'Git & GitHub', icon: <Wrench size={32} color="#F05032" /> }
];

export default function Skills() {
  return (
    <section id="skills" className="section-container" style={{ width: '100%', padding: '100px 5%', marginTop: '100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ color: 'var(--accent-blue)', letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 600 }}
        >
          Tech Stack
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title"
          style={{ marginBottom: 0 }}
        >
          Tools & Technologies
        </motion.h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className="glass-panel"
            style={{ padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', cursor: 'pointer' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
              {skill.icon}
            </div>
            <h3 style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)' }}>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
