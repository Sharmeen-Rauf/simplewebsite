'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const FREQUENCIES = [
  { id: 'lofi', label: 'LO-FI DECAY',     hz: '88.8',  color: '#00f0ff',  mood: 'FOCUS',    desc: 'Deep concentration waves' },
  { id: 'synth', label: 'SYNTHWAVE',       hz: '100.0', color: '#b026ff',  mood: 'CREATE',   desc: 'Creative cyberpunk pulse' },
  { id: 'ambient', label: 'AMBIENT CORE', hz: '92.3',  color: '#00ff88',  mood: 'CALM',     desc: 'Neural rest frequency' },
  { id: 'jazz', label: 'QUANTUM JAZZ',    hz: '96.7',  color: '#ff9500',  mood: 'ENERGY',   desc: 'Chaotic harmonic series' },
  { id: 'dark', label: 'DARK WAVE',       hz: '78.4',  color: '#ff2244',  mood: 'INTENSE',  desc: 'Low bandwidth encoding' },
];

const MOODS = ['DEVELOPER', 'EDUCATOR', 'LEARNER', 'BUILDER', 'SECURITY ADVOCATE', 'OPEN SOURCE CONTRIB'];

const INTERESTS = [
  { icon: '💃', label: 'Dance & Rhythm' },
  { icon: '🏎️', label: 'F1 Racing' },
  { icon: '🏏', label: 'Cricket' },
  { icon: '🤼‍♂️', label: 'WWE Wrestling' },
  { icon: '🚗', label: 'Supercars' },
  { icon: '⚡', label: 'AI & Prompt Eng' },
  { icon: '🔐', label: 'CyberSecurity' },
  { icon: '🛸', label: 'Sci-Fi Universes' },
];

function EqBar({ color, delay = 0, playing }) {
  const heights = useRef([30, 50, 70, 40, 80, 60, 45, 75]);
  const [bar, setBar] = useState(heights.current[Math.floor(Math.random() * heights.current.length)]);

  useEffect(() => {
    if (!playing) { setBar(10); return; }
    const t = setInterval(() => {
      setBar(Math.floor(20 + Math.random() * 75));
    }, 80 + Math.random() * 120);
    return () => clearInterval(t);
  }, [playing]);

  return (
    <div
      className="w-1.5 rounded-full transition-all"
      style={{
        height: `${bar}%`,
        background: color,
        boxShadow: playing ? `0 0 6px ${color}` : 'none',
        transitionDuration: `${80 + Math.random() * 60}ms`,
        transition: 'height 100ms ease',
      }}
    />
  );
}

function CassetteDeck({ playing, color }) {
  return (
    <div
      className="relative rounded-lg p-6 flex flex-col items-center"
      style={{
        background: 'rgba(10, 10, 20, 0.8)',
        border: `2px solid ${color}40`,
        boxShadow: playing ? `0 0 30px ${color}20` : 'none',
        transition: 'all 0.5s ease',
      }}
    >
      {/* Cassette shell */}
      <div
        className="w-48 h-28 rounded-lg relative flex items-center justify-around px-4"
        style={{ background: 'rgba(20, 20, 35, 0.9)', border: `1px solid ${color}30` }}
      >
        {/* Window */}
        <div
          className="absolute inset-x-8 top-1 bottom-8 rounded-sm"
          style={{ background: 'rgba(0, 0, 0, 0.6)', border: `1px solid ${color}20` }}
        />
        {/* Reels */}
        {[0, 1].map(i => (
          <div key={i} className="relative z-10">
            <div
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
              style={{
                borderColor: color,
                boxShadow: `0 0 10px ${color}40`,
                animation: playing ? `cassette-spin ${1.5 + i * 0.3}s linear infinite` : 'none',
              }}
            >
              <div className="w-4 h-4 rounded-full" style={{ background: color, opacity: 0.8 }} />
              {/* Spokes */}
              {[0, 60, 120, 180, 240, 300].map(deg => (
                <div
                  key={deg}
                  className="absolute w-px h-4 origin-bottom"
                  style={{ background: color + '60', transform: `rotate(${deg}deg) translateX(-50%)`, transformOrigin: '50% 100%', top: 0, left: '50%' }}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Label */}
        <div className="absolute bottom-2 left-0 right-0 text-center">
          <span className="font-mono text-xs" style={{ color: color + 'aa', fontSize: '8px' }}>
            SR-BROADCAST-CORE
          </span>
        </div>
      </div>

      {/* Tape indicator */}
      <div className="mt-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full" style={{
          background: playing ? color : 'var(--text-muted)',
          boxShadow: playing ? `0 0 8px ${color}` : 'none',
          animation: playing ? 'pulse-cyan 1s ease-in-out infinite' : 'none',
        }} />
        <span className="font-mono text-xs" style={{ color: playing ? color : 'var(--text-muted)', fontSize: '10px' }}>
          {playing ? 'TRANSMITTING' : 'STANDBY'}
        </span>
      </div>
    </div>
  );
}

export default function FrequencyChamber() {
  const [activeFreq, setActiveFreq] = useState(FREQUENCIES[0]);
  const [playing, setPlaying] = useState(false);
  const [currentMood, setCurrentMood] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentMood(m => (m + 1) % MOODS.length), 2500);
    return () => clearInterval(t);
  }, []);

  const EQ_BARS = 20;

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
          <div className="w-8 h-px" style={{ background: activeFreq.color }} />
          <span className="font-mono text-xs tracking-widest" style={{ color: activeFreq.color, transition: 'color 0.5s ease' }}>
            FREQUENCY CHAMBER / PERSONALITY BROADCAST
          </span>
        </div>
        <h2 className="font-display font-black mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          FREQUENCY <span style={{ color: activeFreq.color, textShadow: `0 0 20px ${activeFreq.color}`, transition: 'all 0.5s ease' }}>CHAMBER</span>
        </h2>
        <p className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
          Select a broadcast frequency to tune into the neural personality stream
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: Frequency Selector */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <div className="font-mono text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
            BROADCAST CHANNELS ({FREQUENCIES.length}):
          </div>
          {FREQUENCIES.map(f => (
            <button
              key={f.id}
              onClick={() => { setActiveFreq(f); setPlaying(false); }}
              className="w-full p-4 rounded-lg text-left transition-all group"
              style={{
                background: activeFreq.id === f.id ? `${f.color}10` : 'rgba(10, 10, 20, 0.5)',
                border: `1px solid ${activeFreq.id === f.id ? f.color + '60' : 'rgba(255,255,255,0.06)'}`,
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-display text-sm font-bold" style={{ color: activeFreq.id === f.id ? f.color : 'var(--text-primary)' }}>
                  {f.label}
                </span>
                <span className="font-mono text-xs" style={{ color: activeFreq.id === f.id ? f.color : 'var(--text-muted)', fontSize: '10px' }}>
                  {f.hz} MHz
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs" style={{ color: 'var(--text-muted)', fontSize: '9px' }}>{f.desc}</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded-sm" style={{
                  color: f.color,
                  border: `1px solid ${f.color}30`,
                  fontSize: '8px',
                }}>
                  {f.mood}
                </span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Center: Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Currently transmitting */}
          <div
            className="w-full p-3 rounded-sm font-mono text-xs flex items-center gap-3"
            style={{
              border: `1px solid ${activeFreq.color}30`,
              background: `${activeFreq.color}06`,
              color: activeFreq.color,
            }}
          >
            <div className="w-2 h-2 rounded-full" style={{
              background: activeFreq.color,
              boxShadow: `0 0 6px ${activeFreq.color}`,
              animation: playing ? 'pulse-cyan 1s ease-in-out infinite' : 'none',
            }} />
            CURRENTLY TRANSMITTING: {activeFreq.label}
            <span className="ml-auto" style={{ color: 'var(--text-muted)' }}>{activeFreq.hz} MHz</span>
          </div>

          {/* Cassette */}
          <CassetteDeck playing={playing} color={activeFreq.color} />

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              className="font-mono text-lg px-4 py-2 rounded"
              style={{ color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.1)' }}
            >◂◂</button>
            <button
              onClick={() => setPlaying(!playing)}
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all"
              style={{
                background: playing ? activeFreq.color : 'transparent',
                border: `2px solid ${activeFreq.color}`,
                boxShadow: playing ? `0 0 20px ${activeFreq.color}60` : 'none',
                color: playing ? '#000' : activeFreq.color,
                fontSize: '20px',
              }}
            >
              {playing ? '▮▮' : '▶'}
            </button>
            <button
              className="font-mono text-lg px-4 py-2 rounded"
              style={{ color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.1)' }}
            >▸▸</button>
          </div>

          {/* Equalizer */}
          <div
            className="w-full h-20 rounded-lg flex items-end gap-1 justify-center px-4"
            style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            {Array.from({ length: EQ_BARS }).map((_, i) => (
              <EqBar key={i} color={activeFreq.color} delay={i * 30} playing={playing} />
            ))}
          </div>

          {/* Mood display */}
          <div
            className="w-full p-3 rounded-sm text-center font-mono text-sm"
            style={{ border: '1px solid rgba(255,255,255,0.06)', color: 'var(--text-secondary)' }}
          >
            <span style={{ color: 'var(--text-muted)', fontSize: '10px' }}>CURRENT MODE: </span>
            <motion.span
              key={currentMood}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              style={{ color: activeFreq.color }}
            >
              {MOODS[currentMood]}
            </motion.span>
          </div>
        </motion.div>

        {/* Right: Interests */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div className="font-mono text-xs mb-4" style={{ color: 'var(--text-muted)' }}>NEURAL INTEREST MAP:</div>
          <div className="grid grid-cols-2 gap-3">
            {INTERESTS.map((interest, i) => (
              <motion.div
                key={i}
                className="cyber-card p-4 text-center cursor-default"
                whileHover={{ scale: 1.05, borderColor: activeFreq.color }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <div className="text-2xl mb-2">{interest.icon}</div>
                <div className="font-mono text-xs" style={{ color: 'var(--text-secondary)', fontSize: '10px' }}>
                  {interest.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Personality readout */}
          <div className="glass-panel p-4 rounded-lg">
            <div className="font-mono text-xs mb-3" style={{ color: 'var(--text-muted)' }}>PERSONALITY VECTORS:</div>
            {[
              { label: 'Creativity', val: 90, color: activeFreq.color },
              { label: 'Problem Solving', val: 95, color: 'var(--neon-green)' },
              { label: 'Leadership', val: 80, color: 'var(--purple)' },
              { label: 'Curiosity', val: 98, color: 'var(--warning-amber)' },
            ].map(({ label, val, color }) => (
              <div key={label} className="mb-3">
                <div className="flex justify-between text-xs font-mono mb-1" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ fontSize: '10px' }}>{label}</span>
                  <span style={{ color, fontSize: '10px' }}>{val}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${val}%`, background: color }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
