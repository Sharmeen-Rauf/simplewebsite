'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const EXPERIENCES = [
  {
    id: 'TX-001',
    type: 'MISSION',
    role: 'Frontend Developer (Teacher)',
    company: 'Shamsi School of Professional Education',
    period: 'Aug 2023 — Present',
    location: 'Karachi, Pakistan',
    status: 'ACTIVE',
    clearance: 'LEVEL-5',
    color: 'var(--neon-green)',
    points: [
      'Delivered in-depth instruction on modern web technologies including React.',
      'Demonstrated expertise in industry-standard tools like Git and Webpack.',
      'Designed comprehensive hands-on courses adapted for various skill levels.',
      'Developed modular reusable components with Vue.js and TypeScript.',
    ],
  },
  {
    id: 'TX-002',
    type: 'OPERATION',
    role: 'Full Stack Software Engineer',
    company: 'Cowlar Design Studio',
    period: 'Feb 2024 — Aug 2024',
    location: 'Islamabad, Pakistan',
    status: 'COMPLETE',
    clearance: 'LEVEL-4',
    color: 'var(--cyan)',
    points: [
      'Developing AI-driven retail products with Vue.js, React.js, and TypeScript.',
      'Writing complex database queries and optimizing APIs for performance.',
      'Implementing RESTful APIs with Node.js and Express.js architecture.',
    ],
  },
  {
    id: 'TX-003',
    type: 'OPERATION',
    role: 'Python AI & Web Developer',
    company: 'Shamsi School of Professional Education',
    period: 'Jun 2023 — Aug 2023',
    location: 'Karachi, Pakistan',
    status: 'ARCHIVED',
    clearance: 'LEVEL-3',
    color: 'var(--purple)',
    points: [
      'Introduced students to Python and AI fundamentals through engaging lessons.',
      'Led interactive coding activities and AI project demonstrations.',
      'Developed flexible programming lessons for different learning speeds.',
    ],
  },
  {
    id: 'TX-004',
    type: 'DEPLOYMENT',
    role: 'Junior Web Developer',
    company: 'Waszaf Immigration Consultant',
    period: 'Jan 2022 — Jan 2023',
    location: 'Karachi, Pakistan',
    status: 'ARCHIVED',
    clearance: 'LEVEL-2',
    color: 'var(--warning-amber)',
    points: [
      'Worked on frontend for in-house HR automation projects.',
      'Created UI screens and handled client-side logic with Bootstrap and JS.',
      'Wrote reusable React components using Ant Design library.',
    ],
  },
];

const EDUCATION = [
  {
    id: 'EDU-001',
    type: 'ACADEMIC',
    degree: "Bachelor's in Cyber Security",
    institution: 'DHA Suffah University',
    period: '2021 — Present',
    location: 'Karachi, Pakistan',
    status: 'ACTIVE',
    color: 'var(--cyan)',
    highlights: [
      'Intensive CS curriculum: Data Structures, Algorithms, DBMS, OS, Machine Learning.',
      'MERN Stack Development and modern web ecosystem deep-dives.',
      'Led HackClub, GDSC, and IEEE tech communities.',
      'Software Requirements Engineering and Software Architecture courses.',
      'Active in diversity and leadership programs.',
    ],
  },
];

const statusColor = { ACTIVE: 'var(--neon-green)', COMPLETE: 'var(--cyan)', ARCHIVED: 'var(--text-muted)' };
const typeColors = { MISSION: 'var(--neon-green)', OPERATION: 'var(--cyan)', DEPLOYMENT: 'var(--warning-amber)', ACADEMIC: 'var(--purple)' };

function TransmissionEntry({ entry, index, isExp }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: `linear-gradient(to bottom, ${entry.color}, transparent)`, marginLeft: '19px' }} />

      {/* Node dot */}
      <div
        className="absolute left-0 top-6 w-10 h-10 rounded-full flex items-center justify-center"
        style={{
          background: 'var(--bg-void)',
          border: `2px solid ${entry.color}`,
          boxShadow: `0 0 12px ${entry.color}40`,
          zIndex: 1,
        }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
      </div>

      {/* Content card */}
      <div
        className="ml-14 mb-6 cyber-card cursor-pointer"
        style={{
          border: expanded ? `1px solid ${entry.color}50` : '1px solid rgba(0, 240, 255, 0.08)',
          transition: 'all 0.3s ease',
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Header */}
        <div className="p-5">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="font-mono text-xs px-2 py-0.5 rounded-sm" style={{
              color: typeColors[entry.type],
              border: `1px solid ${typeColors[entry.type]}30`,
              background: `${typeColors[entry.type]}08`,
              fontSize: '9px',
            }}>
              {entry.type}
            </span>
            <span className="font-mono text-xs" style={{ color: 'var(--text-muted)', fontSize: '9px' }}>
              ID: {entry.id}
            </span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor[entry.status] }} />
              <span className="font-mono text-xs" style={{ color: statusColor[entry.status], fontSize: '9px' }}>
                {entry.status}
              </span>
            </div>
            <span className="font-mono text-xs ml-auto" style={{ color: 'var(--text-muted)', fontSize: '9px' }}>
              {entry.clearance || ''}
            </span>
          </div>

          {/* Main info */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-display font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                {entry.role || entry.degree}
              </h3>
              <p className="font-mono text-sm" style={{ color: entry.color }}>
                {entry.company || entry.institution}
              </p>
              <p className="font-mono text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                ⌖ {entry.location}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="font-mono text-xs px-3 py-1 rounded-sm" style={{
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'var(--text-secondary)',
                fontSize: '10px',
                whiteSpace: 'nowrap',
              }}>
                ◷ {entry.period}
              </span>
              <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                {expanded ? '▲ COLLAPSE' : '▼ DECRYPT'}
              </span>
            </div>
          </div>
        </div>

        {/* Expanded Details */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-5 pb-5"
            style={{ borderTop: `1px solid ${entry.color}15` }}
          >
            <div className="pt-4 space-y-2">
              {(entry.points || entry.highlights).map((pt, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-mono text-xs mt-0.5 flex-shrink-0" style={{ color: entry.color }}>▹</span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function SignalTransmission() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname === '/education' ? 'education' : 'experience');

  const items = activeTab === 'experience' ? EXPERIENCES : EDUCATION;

  return (
    <section className="min-h-screen px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: 'var(--warning-amber)' }} />
          <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--warning-amber)' }}>
            SIGNAL TRANSMISSION / ENCRYPTED LOGS
          </span>
        </div>
        <h2 className="font-display font-black mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          SIGNAL <span style={{ color: 'var(--warning-amber)', textShadow: '0 0 20px var(--warning-amber)' }}>TRANSMISSION</span>
        </h2>

        {/* Tab Switcher */}
        <div className="flex gap-2">
          {[
            { id: 'experience', label: 'MISSION LOGS', count: EXPERIENCES.length },
            { id: 'education', label: 'ACADEMIC CORE', count: EDUCATION.length },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="font-mono text-xs px-4 py-2 rounded-sm transition-all"
              style={{
                border: activeTab === tab.id ? '1px solid var(--warning-amber)' : '1px solid rgba(255, 255, 255, 0.1)',
                color: activeTab === tab.id ? 'var(--warning-amber)' : 'var(--text-muted)',
                background: activeTab === tab.id ? 'rgba(255, 149, 0, 0.08)' : 'transparent',
              }}
            >
              {tab.label} [{tab.count}]
            </button>
          ))}
        </div>
      </motion.div>

      {/* Scanning animation header bar */}
      <div
        className="mb-6 p-3 rounded-sm font-mono text-xs flex items-center gap-3"
        style={{ border: '1px solid rgba(255, 149, 0, 0.2)', background: 'rgba(255, 149, 0, 0.04)', color: 'var(--warning-amber)' }}
      >
        <div className="w-2 h-2 rounded-full animate-pulse-cyan" style={{ background: 'var(--warning-amber)' }} />
        DECRYPTING {items.length} TRANSMISSION {activeTab === 'experience' ? 'MISSION RECORDS' : 'ACADEMIC LOGS'}...
        <span className="ml-auto" style={{ color: 'var(--text-muted)' }}>
          CLEARANCE VERIFIED ✓
        </span>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl relative">
        {items.map((entry, i) => (
          <TransmissionEntry key={entry.id} entry={entry} index={i} isExp={activeTab === 'experience'} />
        ))}
      </div>
    </section>
  );
}
