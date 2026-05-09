'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useSystem } from '../SystemContext';

const COMMANDS = {
  help: () => [
    { text: '╔════════════════════════════════════╗', type: 'header' },
    { text: '║   SR NEURAL CORE — COMMAND INDEX   ║', type: 'header' },
    { text: '╚════════════════════════════════════╝', type: 'header' },
    { text: '', type: 'blank' },
    { text: '  identity      — Load neural identity data', type: 'cmd' },
    { text: '  about         — About this system', type: 'cmd' },
    { text: '  projects      — List memory archive nodes', type: 'cmd' },
    { text: '  skills        — Display synaptic frequency map', type: 'cmd' },
    { text: '  experience    — Decrypt mission logs', type: 'cmd' },
    { text: '  contact       — Open transmission console', type: 'cmd' },
    { text: '  clear         — Flush display buffer', type: 'cmd' },
    { text: '  hack          — ⚠ Initiate security breach simulation', type: 'cmd' },
    { text: '  self-destruct — ⚠⚠ Trigger neural implosion protocol', type: 'cmd' },
    { text: '  ping          — Test neural uplink latency', type: 'cmd' },
    { text: '  whoami        — Identity verification', type: 'cmd' },
    { text: '  matrix        — Activate matrix mode', type: 'cmd' },
    { text: '', type: 'blank' },
    { text: '  NOTE: Hidden commands exist. Keep exploring.', type: 'info' },
  ],

  identity: () => [
    { text: '> LOADING IDENTITY RECORD...', type: 'info' },
    { text: '> DECRYPTING NODE SR-PRIME-001', type: 'info' },
    { text: '', type: 'blank' },
    { text: '  NAME:         SHARMEEN RAUF', type: 'data' },
    { text: '  NODE ID:      SR-PRIME-001', type: 'data' },
    { text: '  CLEARANCE:    LEVEL-5 / FULL ACCESS', type: 'data' },
    { text: '  ROLE:         FULL-STACK DEVELOPER', type: 'data' },
    { text: '  SPECIALITY:   MERN / MEVN / DEVOPS', type: 'data' },
    { text: '  INSTITUTION:  DHA SUFFAH UNIVERSITY', type: 'data' },
    { text: '  LOCATION:     KARACHI, PAKISTAN', type: 'data' },
    { text: '  STATUS:       ◉ ONLINE', type: 'ok' },
  ],

  about: () => [
    { text: '> SR NEURAL BROADCAST CORE v4.2.7', type: 'header' },
    { text: '', type: 'blank' },
    { text: '  This terminal interfaces with the digital consciousness of', type: 'info' },
    { text: '  Sharmeen Rauf — Full-stack developer and cybersecurity', type: 'info' },
    { text: '  specialist with 4+ years of experience building AI-driven,', type: 'info' },
    { text: '  scalable web applications and teaching the next generation.', type: 'info' },
    { text: '', type: 'blank' },
    { text: '  BUILT WITH: Next.js 15 | Tailwind CSS | Framer Motion', type: 'data' },
    { text: '  GSAP | Canvas API | Web Audio API', type: 'data' },
  ],

  projects: () => [
    { text: '> SCANNING MEMORY ARCHIVE...', type: 'info' },
    { text: '', type: 'blank' },
    { text: '  [PROJ-001] Spotify UI Modernization ........ COMPLETE', type: 'data' },
    { text: '  [PROJ-002] E-Commerce Platform ............. COMPLETE', type: 'data' },
    { text: '  [PROJ-003] Developer Portfolio v2 .......... ACTIVE', type: 'ok' },
    { text: '  [PROJ-004] Dev-Portfolio Open Source ........ COMPLETE', type: 'data' },
    { text: '  [PROJ-005] Ecommerce Database System ........ ARCHIVED', type: 'info' },
    { text: '', type: 'blank' },
    { text: '  5 NODES FOUND | Navigate to MEMORY module for full access', type: 'info' },
  ],

  skills: () => [
    { text: '> LOADING SYNAPTIC FREQUENCY MAP...', type: 'info' },
    { text: '', type: 'blank' },
    { text: '  FRONTEND CLUSTER:', type: 'header' },
    { text: '    React [92%] | Next.js [88%] | Vue [80%] | TS [85%] | Tailwind [90%]', type: 'data' },
    { text: '', type: 'blank' },
    { text: '  BACKEND CLUSTER:', type: 'header' },
    { text: '    Node.js [84%] | Express [82%] | MongoDB [78%] | SQL [80%]', type: 'data' },
    { text: '', type: 'blank' },
    { text: '  DEVOPS CLUSTER:', type: 'header' },
    { text: '    Docker [75%] | Git/CI-CD [88%] | Linux [72%]', type: 'data' },
    { text: '', type: 'blank' },
    { text: '  AI CLUSTER:', type: 'header' },
    { text: '    Python [70%] | CyberSec [76%]', type: 'data' },
  ],

  experience: () => [
    { text: '> DECRYPTING MISSION LOGS...', type: 'info' },
    { text: '', type: 'blank' },
    { text: '  [TX-001] Frontend Developer (Teacher)', type: 'data' },
    { text: '           Shamsi School | Aug 2023 — PRESENT', type: 'info' },
    { text: '', type: 'blank' },
    { text: '  [TX-002] Full Stack Software Engineer', type: 'data' },
    { text: '           Cowlar Design Studio | Feb 2024 — Aug 2024', type: 'info' },
    { text: '', type: 'blank' },
    { text: '  [TX-003] Python AI & Web Developer', type: 'data' },
    { text: '           Shamsi School | Jun 2023 — Aug 2023', type: 'info' },
    { text: '', type: 'blank' },
    { text: '  [TX-004] Junior Web Developer', type: 'data' },
    { text: '           Waszaf Immigration | Jan 2022 — Jan 2023', type: 'info' },
  ],

  contact: () => [
    { text: '> OPENING TRANSMISSION CONSOLE...', type: 'info' },
    { text: '', type: 'blank' },
    { text: '  EMAIL:    sharmeenpakistan8@gmail.com', type: 'data' },
    { text: '  GITHUB:   github.com/Sharmeen-Rauf', type: 'data' },
    { text: '  LINKEDIN: linkedin.com/in/sharmeen-rauf-504097269', type: 'data' },
    { text: '  INSTAGRAM: instagram.com/sharmeen.rs', type: 'data' },
    { text: '', type: 'blank' },
    { text: '  Navigate to CONTACT module for encrypted transmission.', type: 'info' },
  ],

  ping: () => [
    { text: '> PINGING NEURAL UPLINK...', type: 'info' },
    { text: `  LATENCY: ${Math.floor(1 + Math.random() * 15)}ms`, type: 'ok' },
    { text: '  UPLINK:  STABLE', type: 'ok' },
    { text: '  PACKET LOSS: 0%', type: 'ok' },
  ],

  whoami: () => [
    { text: '> IDENTITY VERIFICATION...', type: 'info' },
    { text: '  ENTITY:    EXTERNAL VISITOR', type: 'data' },
    { text: '  CLEARANCE: LEVEL-1 / GUEST ACCESS', type: 'data' },
    { text: '  NODE:      UNKNOWN ENDPOINT', type: 'data' },
    { text: '  STATUS:    MONITORED ◉', type: 'warning' },
  ],

  matrix: () => [
    { text: '01010011 01101000 01100001 01110010', type: 'matrix' },
    { text: '01101101 01100101 01100101 01101110', type: 'matrix' },
    { text: '00100000 01010010 01100001 01110101', type: 'matrix' },
    { text: '01100110 00100000 01001110 01000101', type: 'matrix' },
    { text: '01010101 01010010 01000001 01001100', type: 'matrix' },
    { text: '', type: 'blank' },
    { text: '  "SHARMEEN RAUF NEURAL" — decoded', type: 'ok' },
  ],

  hack: 'HACK_MODE',
  'self-destruct': 'DESTRUCT_MODE',
};

const typeStyle = {
  header:  { color: 'var(--cyan)',          fontWeight: 'bold' },
  data:    { color: 'var(--purple)' },
  ok:      { color: 'var(--neon-green)' },
  info:    { color: 'var(--text-secondary)' },
  cmd:     { color: 'var(--text-secondary)' },
  warning: { color: 'var(--warning-amber)' },
  danger:  { color: 'var(--danger-red)' },
  error:   { color: 'var(--danger-red)' },
  matrix:  { color: 'var(--neon-green)', fontFamily: 'monospace', letterSpacing: '4px' },
  blank:   { color: 'transparent' },
};

const INITIAL_LINES = [
  { text: 'SR NEURAL CORE v4.2.7 — INTERACTIVE TERMINAL', type: 'header' },
  { text: 'Copyright © 2026 Sharmeen Rauf | All transmissions encrypted', type: 'info' },
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', type: 'header' },
  { text: 'Type "help" to list all available commands.', type: 'info' },
  { text: '', type: 'blank' },
];

export default function AiTerminal() {
  const [lines, setLines] = useState(INITIAL_LINES);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [glitchMode, setGlitchMode] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const { triggerMalfunction, navigateTo, MODULES } = useSystem();

  const appendLines = useCallback((newLines) => {
    setLines(prev => [...prev, ...newLines]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const executeCommand = useCallback((raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    // Add command echo
    appendLines([{ text: `> ${raw}`, type: 'header' }]);
    setHistory(prev => [raw, ...prev]);
    setHistoryIdx(-1);
    setInput('');

    if (cmd === 'clear') {
      setLines(INITIAL_LINES);
      return;
    }

    if (cmd === 'hack') {
      appendLines([
        { text: '⚠⚠⚠ UNAUTHORIZED ACCESS DETECTED ⚠⚠⚠', type: 'danger' },
        { text: 'INITIATING COUNTERMEASURES...', type: 'danger' },
        { text: 'TRACING INTRUSION VECTOR...', type: 'danger' },
        { text: 'FIREWALLING BREACH POINT...', type: 'warning' },
        { text: '', type: 'blank' },
        { text: '  Just kidding. Nice try though. 😄', type: 'ok' },
        { text: '  Security audit logged. You\'ve been flagged.', type: 'info' },
      ]);
      setGlitchMode(true);
      setTimeout(() => setGlitchMode(false), 2000);
      return;
    }

    if (cmd === 'self-destruct') {
      appendLines([
        { text: '⚠⚠⚠ NEURAL IMPLOSION PROTOCOL INITIATED ⚠⚠⚠', type: 'danger' },
        { text: 'COUNTING DOWN: 3... 2... 1...', type: 'danger' },
        { text: '', type: 'blank' },
        { text: '  System destabilized.', type: 'danger' },
        { text: '  Emergency recovery initiated...', type: 'warning' },
        { text: '', type: 'blank' },
      ]);
      triggerMalfunction(3500);
      setTimeout(() => {
        appendLines([{ text: '  SYSTEM RESTORED. All neural pathways intact.', type: 'ok' }]);
      }, 4000);
      return;
    }

    // Navigation shorthands
    const navCmds = { identity: MODULES.IDENTITY, about: MODULES.IDENTITY, projects: MODULES.PROJECTS, skills: MODULES.SKILLS, experience: MODULES.EXPERIENCE, contact: MODULES.CONTACT };
    if (navCmds[cmd]) {
      const cmdResult = COMMANDS[cmd];
      if (cmdResult && typeof cmdResult === 'function') appendLines(cmdResult());
      setTimeout(() => navigateTo(navCmds[cmd]), 600);
      return;
    }

    const handler = COMMANDS[cmd];
    if (handler && typeof handler === 'function') {
      appendLines(handler());
    } else {
      appendLines([
        { text: `Command not found: '${raw}'`, type: 'error' },
        { text: `Type 'help' for available commands.`, type: 'info' },
      ]);
    }
  }, [appendLines, navigateTo, triggerMalfunction, MODULES]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      const idx = Math.min(historyIdx + 1, history.length - 1);
      setHistoryIdx(idx);
      if (history[idx]) setInput(history[idx]);
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      const idx = Math.max(historyIdx - 1, -1);
      setHistoryIdx(idx);
      setInput(idx === -1 ? '' : history[idx]);
      e.preventDefault();
    }
  };

  return (
    <section className="min-h-screen px-4 md:px-6 py-8 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: 'var(--neon-green)' }} />
          <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--neon-green)' }}>
            AI TERMINAL / NEURAL CONSOLE INTERFACE
          </span>
        </div>
        <h2 className="font-display font-black" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          AI <span style={{ color: 'var(--neon-green)', textShadow: '0 0 20px var(--neon-green)' }}>TERMINAL</span>
        </h2>
      </motion.div>

      {/* Terminal Window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex-1 flex flex-col rounded-lg overflow-hidden"
        style={{
          maxHeight: 'calc(100vh - 280px)',
          border: '1px solid rgba(0, 255, 136, 0.2)',
          background: 'rgba(0, 8, 0, 0.9)',
          filter: glitchMode ? 'hue-rotate(30deg) saturate(3) brightness(1.3)' : 'none',
          transition: 'filter 0.3s ease',
        }}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal Title */}
        <div
          className="flex items-center gap-3 px-4 py-2"
          style={{ borderBottom: '1px solid rgba(0, 255, 136, 0.1)', background: 'rgba(0, 255, 136, 0.03)' }}
        >
          <div className="flex gap-2">
            {['#ff5f56', '#ffbd2e', '#27c93f'].map(c => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
            ))}
          </div>
          <span className="font-mono text-xs" style={{ color: 'rgba(0,255,136,0.5)' }}>
            sr@neural-core: ~ terminal v4.2.7
          </span>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--neon-green)', boxShadow: '0 0 4px var(--neon-green)', animation: 'pulse-cyan 1.5s ease-in-out infinite' }} />
            <span className="font-mono text-xs" style={{ color: 'var(--neon-green)', fontSize: '9px' }}>CONNECTED</span>
          </div>
        </div>

        {/* Output */}
        <div
          ref={terminalRef}
          className="flex-1 overflow-y-auto p-4 space-y-0.5 no-scrollbar"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className="text-sm leading-5"
              style={{ ...(typeStyle[line.type] || { color: 'var(--text-secondary)' }) }}
            >
              {line.text}
            </div>
          ))}
        </div>

        {/* Input Line */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ borderTop: '1px solid rgba(0, 255, 136, 0.1)' }}
        >
          <span className="font-mono text-sm" style={{ color: 'var(--cyan)', flexShrink: 0 }}>
            sr@neural:~$
          </span>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none font-mono text-sm"
            style={{ color: 'var(--neon-green)', caretColor: 'var(--neon-green)' }}
            placeholder="Type a command..."
            autoComplete="off"
            spellCheck="false"
            autoFocus
          />
          <span className="terminal-cursor" />
        </div>
      </motion.div>

      {/* Quick Command Hints */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 flex flex-wrap gap-2"
      >
        {['help', 'identity', 'projects', 'skills', 'ping', 'matrix'].map(cmd => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="font-mono text-xs px-3 py-1 rounded-sm transition-all hover:scale-105"
            style={{
              border: '1px solid rgba(0, 255, 136, 0.2)',
              color: 'rgba(0, 255, 136, 0.6)',
              background: 'rgba(0, 255, 136, 0.03)',
            }}
          >
            {cmd}
          </button>
        ))}
        <span className="font-mono text-xs self-center" style={{ color: 'var(--text-muted)' }}>
          ← click or type
        </span>
      </motion.div>
    </section>
  );
}
