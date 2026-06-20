'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TYPING_LINES = [
  'AI + FULL-STACK DEVELOPER',
  'AI PROMPT ENGINEER',
  'FULL-STACK ARCHITECT',
  'DEVOPS ENGINEER',
  'CYBERSECURITY SPECIALIST',
];

function useTypingEffect(lines, speed = 80, pauseMs = 1800) {
  const [displayText, setDisplayText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[lineIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setLineIndex(l => (l + 1) % lines.length);
    }
    setDisplayText(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, lineIndex, lines, speed, pauseMs]);

  return displayText;
}

const DATA_RINGS = [
  { r: 120, speed: 20, items: ['REACT', 'NEXT.JS', 'VUE', 'NODE'] },
  { r: 170, speed: -30, items: ['DOCKER', 'K8S', 'CI/CD', 'AWS', 'LINUX'] },
  { r: 220, speed: 40, items: ['TS', 'PYTHON', 'SQL', 'GRAPHQL', 'REST'] },
];

export default function NeuralIdentity() {
  const typedText = useTypingEffect(TYPING_LINES);
  const [angle, setAngle] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    let af;
    let t = 0;
    const animate = () => {
      t += 0.3;
      setAngle(t);
      af = requestAnimationFrame(animate);
    };
    af = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(af);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setMouseOffset({
      x: (e.clientX - cx) / rect.width * 12,
      y: (e.clientY - cy) / rect.height * 12,
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 relative">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0, 240, 255, 0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* System tag */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px" style={{ background: 'var(--cyan)' }} />
            <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--cyan)' }}>
              STARK HUD IDENTITY / MARK-LXXXV OS
            </span>
          </div>

          {/* Status badge */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1 rounded-sm"
              style={{ border: '1px solid rgba(0, 255, 136, 0.3)', background: 'rgba(0, 255, 136, 0.05)' }}>
              <div className="w-2 h-2 rounded-full animate-pulse-cyan" style={{ background: 'var(--neon-green)', boxShadow: '0 0 6px var(--neon-green)' }} />
              <span className="font-mono text-xs" style={{ color: 'var(--neon-green)' }}>
                ✓ VERIFIED DEVELOPER
              </span>
            </div>
          </div>

          {/* Main Name */}
          <div>
            <h1 className="font-display font-black leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--text-primary)' }}>
              SHARMEEN
            </h1>
            <h1 className="font-display font-black leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--text-primary)' }}>
              RAUF
              <span style={{ color: 'var(--cyan)', textShadow: '0 0 20px var(--cyan)' }}>.</span>
            </h1>
          </div>

          {/* Dynamic typing role */}
          <div className="flex items-center gap-2 h-8">
            <span className="font-mono text-lg" style={{ color: 'var(--purple)', textShadow: '0 0 10px var(--purple)' }}>
              {typedText}
            </span>
            <span className="terminal-cursor" style={{ background: 'var(--purple)', boxShadow: '0 0 6px var(--purple)' }} />
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            AI + Full-Stack Developer & Prompt Engineer building scalable, high-performance web systems and automated AI workspaces from <span style={{ color: 'var(--cyan)' }}>DHA Suffah University</span> in Karachi, Pakistan.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { val: '4+', label: 'YEARS ACTIVE', color: 'var(--cyan)' },
              { val: '10+', label: 'PROJECTS SHIPPED', color: 'var(--purple)' },
              { val: '3+', label: 'ROLES HELD', color: 'var(--neon-green)' },
            ].map(({ val, label, color }) => (
              <div key={label} className="cyber-card p-4 text-center">
                <div className="font-display text-2xl font-bold mb-1" style={{ color }}>{val}</div>
                <div className="font-mono text-xs" style={{ color: 'var(--text-muted)', fontSize: '9px', letterSpacing: '1px' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="btn-cyber" style={{ padding: '12px 28px' }}>
              <span>EXPLORE MEMORY ARCHIVE</span>
            </button>
            <a
              href="mailto:sharmeenpakistan8@gmail.com"
              className="btn-ghost"
              style={{ padding: '12px 24px', display: 'inline-flex', alignItems: 'center' }}
            >
              INITIATE CONTACT
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>BROADCAST VIA:</span>
            {[
              { label: 'GH', href: 'https://github.com/Sharmeen-Rauf/', color: 'var(--text-secondary)' },
              { label: 'LI', href: 'https://www.linkedin.com/in/sharmeen-rauf-504097269', color: 'var(--cyan)' },
              { label: 'IG', href: 'https://www.instagram.com/sharmeen.rs/', color: 'var(--purple)' },
            ].map(({ label, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xs font-bold px-3 py-1 rounded-sm transition-all hover:scale-110"
                style={{ border: `1px solid ${color}30`, color, boxShadow: `0 0 0 0 ${color}` }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 12px ${color}40`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 0'}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Neural Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMouseOffset({ x: 0, y: 0 })}
          className="relative flex items-center justify-center"
          style={{ height: '500px' }}
        >
          {/* Orbital Data Rings */}
          {DATA_RINGS.map((ring, ri) => (
            <div
              key={ri}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: ring.r * 2,
                  height: ring.r * 2,
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                  transform: `rotate(${angle * (ring.speed / 20)}deg)`,
                }}
              >
                {ring.items.map((item, ii) => {
                  const theta = (ii / ring.items.length) * 360;
                  const rad = (theta * Math.PI) / 180;
                  return (
                    <div
                      key={ii}
                      className="absolute"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${theta}deg) translateY(-${ring.r}px) rotate(-${theta}deg) rotate(-${angle * (ring.speed / 20)}deg)`,
                      }}
                    >
                      <span className="font-mono text-xs" style={{ color: ri === 1 ? 'var(--purple)' : 'var(--cyan)', opacity: 0.7, fontSize: '10px' }}>
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Center Avatar Frame */}
          <motion.div
            animate={{
              x: mouseOffset.x,
              y: mouseOffset.y,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative z-10"
            style={{ width: '180px', height: '180px' }}
          >
            {/* Hexagon clip shape via border */}
            <div
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{
                border: '2px solid var(--cyan)',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.4), 0 0 60px rgba(0, 240, 255, 0.1), inset 0 0 30px rgba(0, 240, 255, 0.05)',
              }}
            >
              <Image
                src="/WhatsApp Image 2025-02-03 at 3.31.54 PM.jpeg"
                alt="Sharmeen Rauf - Neural Identity"
                fill
                sizes="180px"
                className="object-cover object-top"
                style={{ filter: 'saturate(0.8) brightness(0.9)' }}
              />
              {/* Inner overlay */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.6))' }} />
            </div>

            {/* Rotating outer ring */}
            <div
              className="absolute -inset-4 rounded-full pointer-events-none"
              style={{
                border: '1px dashed rgba(0, 240, 255, 0.3)',
                animation: 'neural-rotate 12s linear infinite',
              }}
            />
            <div
              className="absolute -inset-8 rounded-full pointer-events-none"
              style={{
                border: '1px dashed rgba(176, 38, 255, 0.2)',
                animation: 'neural-counter-rotate 18s linear infinite',
              }}
            />

            {/* Radar indicator */}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-sm font-mono text-xs"
              style={{
                background: 'rgba(0, 0, 0, 0.9)',
                border: '1px solid rgba(0, 240, 255, 0.4)',
                color: 'var(--cyan)',
                fontSize: '9px',
                whiteSpace: 'nowrap',
              }}
            >
              ARMOR: MARK-LXXXV
            </div>
          </motion.div>

          {/* HUD corner brackets around avatar area */}
          {[
            { top: '50px', left: '60px' },
            { top: '50px', right: '60px' },
            { bottom: '80px', left: '60px' },
            { bottom: '80px', right: '60px' },
          ].map((pos, pi) => (
            <div
              key={pi}
              className="absolute w-6 h-6 pointer-events-none"
              style={{
                ...pos,
                borderColor: 'rgba(0, 240, 255, 0.4)',
                borderStyle: 'solid',
                borderWidth: pi === 0 ? '2px 0 0 2px' : pi === 1 ? '2px 2px 0 0' : pi === 2 ? '0 0 2px 2px' : '0 2px 2px 0',
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
