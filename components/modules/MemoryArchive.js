'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  {
    id: 'PROJ-001',
    title: 'Spotify UI Modernization',
    classification: 'TOP SECRET',
    description: 'Full-scale redesign of developer portfolios to match modern streaming platforms with glassmorphism and fluid animations.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'API'],
    status: 'COMPLETE',
    icon: '◈',
    color: 'var(--neon-green)',
    clearance: 5,
    lines: 2800,
    commits: 142,
  },
  {
    id: 'PROJ-002',
    title: 'E-Commerce Platform',
    classification: 'CLASSIFIED',
    description: 'High-performance online shopping platform with integrated Stripe payment gateway and real-time inventory management.',
    tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    status: 'COMPLETE',
    icon: '⬡',
    color: 'var(--cyan)',
    clearance: 4,
    lines: 5200,
    commits: 287,
  },
  {
    id: 'PROJ-003',
    title: 'Developer Portfolio v2',
    classification: 'RESTRICTED',
    description: 'Next-generation cinematic portfolio with Three.js neural backgrounds, GSAP animations, and WebGL shaders.',
    tech: ['React', 'Framer Motion', 'Tailwind', 'GSAP'],
    status: 'ACTIVE',
    icon: '⬢',
    color: 'var(--purple)',
    clearance: 3,
    lines: 3400,
    commits: 198,
  },
  {
    id: 'PROJ-004',
    title: 'Dev-Portfolio Open Source',
    classification: 'UNCLASSIFIED',
    description: 'Customizable open-source portfolio template for developers built with Next.js, TypeScript, and Tailwind CSS.',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    status: 'COMPLETE',
    icon: '◎',
    color: 'var(--warning-amber)',
    clearance: 2,
    lines: 1900,
    commits: 73,
  },
  {
    id: 'PROJ-005',
    title: 'Ecommerce Database System',
    classification: 'RESTRICTED',
    description: 'Comprehensive e-commerce database with full ERD design, complex SQL queries, indexing, and stored procedures.',
    tech: ['MySQL', 'SQL Server', 'Database Design', 'ERD'],
    status: 'ARCHIVED',
    icon: '⟟',
    color: 'var(--electric-blue)',
    clearance: 3,
    lines: 1200,
    commits: 45,
  },
];

const statusColor = {
  COMPLETE: 'var(--neon-green)',
  ACTIVE: 'var(--cyan)',
  ARCHIVED: 'var(--text-muted)',
};

const classColor = {
  'TOP SECRET': 'var(--danger-red)',
  'CLASSIFIED': 'var(--warning-amber)',
  'RESTRICTED': 'var(--purple)',
  'UNCLASSIFIED': 'var(--text-secondary)',
};

function ProjectCard({ project, onClick, isActive }) {
  return (
    <motion.div
      layout
      onClick={() => onClick(project)}
      className="cyber-card p-5 cursor-pointer relative overflow-hidden group"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        border: isActive ? `1px solid ${project.color}` : '1px solid rgba(0, 240, 255, 0.1)',
        boxShadow: isActive ? `0 0 20px ${project.color}20` : 'none',
      }}
    >
      {/* Corner code indicator */}
      <div className="absolute top-2 right-2 font-mono text-xs" style={{ color: 'var(--text-muted)', fontSize: '9px' }}>
        {project.id}
      </div>

      {/* Classification badge */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs px-2 py-0.5 rounded-sm" style={{
          color: classColor[project.classification],
          border: `1px solid ${classColor[project.classification]}30`,
          background: `${classColor[project.classification]}08`,
          fontSize: '9px',
        }}>
          ⚠ {project.classification}
        </span>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor[project.status] }} />
          <span className="font-mono text-xs" style={{ color: statusColor[project.status], fontSize: '9px' }}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Icon */}
      <div className="text-4xl mb-3 font-display" style={{ color: project.color, textShadow: `0 0 12px ${project.color}` }}>
        {project.icon}
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-sm mb-2 leading-tight" style={{ color: 'var(--text-primary)' }}>
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.slice(0, 3).map(t => (
          <span key={t} className="font-mono text-xs px-2 py-0.5 rounded-sm" style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: 'var(--text-muted)',
            fontSize: '9px',
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Metadata strip */}
      <div className="flex justify-between text-xs font-mono" style={{ color: 'var(--text-muted)', fontSize: '9px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '8px' }}>
        <span>{project.lines.toLocaleString()} LINES</span>
        <span>{project.commits} COMMITS</span>
        <span>SEC-{project.clearance}</span>
      </div>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}06, transparent 60%)` }} />
    </motion.div>
  );
}

export default function MemoryArchive() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen px-6 py-12 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: 'var(--purple)' }} />
          <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--purple)' }}>
            CLASSIFIED MEMORY ARCHIVE / SECTOR 7-ALPHA
          </span>
        </div>
        <h2 className="font-display font-black mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text-primary)' }}>
          MEMORY<span style={{ color: 'var(--purple)', textShadow: '0 0 20px var(--purple)' }}> ARCHIVE</span>
        </h2>
        <p className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
          {PROJECTS.length} encrypted memory fragments detected. Authorization required to access classified nodes.
        </p>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <ProjectCard
              project={p}
              onClick={setSelected}
              isActive={selected?.id === p.id}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Expanded Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="glass-panel rounded-lg p-8 max-w-2xl w-full relative"
              style={{ border: `1px solid ${selected.color}40` }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 font-mono text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                [ESC]
              </button>

              {/* Classification Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-4xl" style={{ color: selected.color, textShadow: `0 0 20px ${selected.color}` }}>
                  {selected.icon}
                </span>
                <div>
                  <span className="font-mono text-xs block mb-1" style={{ color: classColor[selected.classification] }}>
                    ⚠ {selected.classification} — {selected.id}
                  </span>
                  <h3 className="font-display text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {selected.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {selected.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: 'LINES OF CODE', val: selected.lines.toLocaleString() },
                  { label: 'COMMITS', val: selected.commits },
                  { label: 'SEC CLEARANCE', val: selected.clearance },
                ].map(({ label, val }) => (
                  <div key={label} className="cyber-card p-3 text-center">
                    <div className="font-display text-xl font-bold mb-1" style={{ color: selected.color }}>{val}</div>
                    <div className="font-mono text-xs" style={{ color: 'var(--text-muted)', fontSize: '9px' }}>{label}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <span className="font-mono text-xs mb-3 block" style={{ color: 'var(--text-muted)' }}>TECHNOLOGY STACK:</span>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map(t => (
                    <span key={t} className="font-mono text-xs px-3 py-1 rounded-sm" style={{
                      border: `1px solid ${selected.color}40`,
                      color: selected.color,
                      background: `${selected.color}08`,
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: statusColor[selected.status], boxShadow: `0 0 6px ${statusColor[selected.status]}` }} />
                  <span className="font-mono text-xs" style={{ color: statusColor[selected.status] }}>
                    STATUS: {selected.status}
                  </span>
                </div>
                <button className="btn-ghost text-xs">DECRYPT FULL RECORD</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
