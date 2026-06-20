'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSystem } from './SystemContext';

const BOOT_LINES = [
  { delay: 0,    text: 'JARVIS.OS v3.0 — STARK INDUSTRIES CORE SYSTEM',       type: 'header' },
  { delay: 200,  text: '=====================================',                   type: 'divider' },
  { delay: 400,  text: 'Initializing Stark Core arc reactor...       [OK]',      type: 'ok' },
  { delay: 700,  text: 'Connecting to satellite link...              [OK]',      type: 'ok' },
  { delay: 900,  text: 'Calibrating holographic HUD display...       [OK]',      type: 'ok' },
  { delay: 1100, text: 'Scanning Mark-LXXXV systems database...',                  type: 'info' },
  { delay: 1300, text: '  >> Thrusters Module ....................... ONLINE',      type: 'data' },
  { delay: 1450, text: '  >> Repulsor Arrays ........................ ONLINE',      type: 'data' },
  { delay: 1600, text: '  >> Secure Firewalls ....................... LOCKED',      type: 'warning' },
  { delay: 1800, text: 'Decrypting local core repositories...        [OK]',      type: 'ok' },
  { delay: 2000, text: 'Establishing secure JARVIS interface...        [OK]',      type: 'ok' },
  { delay: 2200, text: 'Detecting network telemetry...',                           type: 'info' },
  { delay: 2400, text: '  >> Latency: 1.2 ms',                                  type: 'data' },
  { delay: 2550, text: '  >> Bandwidth: 100 Gbps',                              type: 'data' },
  { delay: 2700, text: '  >> Signal integrity: 99.8%',                          type: 'data' },
  { delay: 2900, text: 'WARNING: Unauthorized scan on Stark servers',              type: 'danger' },
  { delay: 3050, text: 'COUNTERMEASURES: Intruder trace active — system secure',  type: 'ok' },
  { delay: 3200, text: 'Loading AI developer matrix...',                         type: 'info' },
  { delay: 3400, text: '  >> AI + FULL-STACK DEVELOPER ...... LOADED',           type: 'data' },
  { delay: 3550, text: '  >> AI PROMPT ENGINEER ............ LOADED',           type: 'data' },
  { delay: 3700, text: '  >> CYBERSECURITY SPECIALIST ........ LOADED',           type: 'data' },
  { delay: 3850, text: '  >> DEVOPS ENGINEER ............... LOADED',           type: 'data' },
  { delay: 4000, text: 'Synchronizing interface frequencies...',                  type: 'info' },
  { delay: 4200, text: 'Establishing secure HUD uplink...            [OK]',      type: 'ok' },
  { delay: 4400, text: 'Compiling Stark database records...',                     type: 'info' },
  { delay: 4700, text: '=====================================',                   type: 'divider' },
  { delay: 4900, text: '✓ ALL ARMOR SYSTEMS DEPLOYED',                          type: 'success' },
  { delay: 5000, text: '✓ JARVIS INTERFACE ON-LINE',                            type: 'success' },
  { delay: 5100, text: 'WELCOME TONY. CHOOSE PROTOCOL TO INTERFACE.',             type: 'header' },
];

const TOTAL_DURATION = 5800;

const lineColor = {
  header:  'var(--cyan)',
  divider: 'var(--text-muted)',
  ok:      'var(--neon-green)',
  info:    'var(--text-secondary)',
  data:    'var(--purple)',
  warning: 'var(--warning-amber)',
  danger:  'var(--danger-red)',
  success: 'var(--neon-green)',
};

export default function BootSequence() {
  const { bootSystem, goOnline, addLog } = useSystem();
  const [visibleLines, setVisibleLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('pre'); // pre | running | done
  const [bypassAvailable, setBypassAvailable] = useState(false);

  const startBoot = useCallback(() => {
    setPhase('running');
    bootSystem();

    BOOT_LINES.forEach((line) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line]);
      }, line.delay);
    });

    // Progress bar
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / TOTAL_DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(interval);
    }, 50);

    // Show bypass button after 1s
    setTimeout(() => setBypassAvailable(true), 1000);

    // Auto-complete after full duration
    setTimeout(() => {
      setPhase('done');
      goOnline();
    }, TOTAL_DURATION);
  }, [bootSystem, goOnline]);

  const bypass = useCallback(() => {
    setPhase('done');
    setProgress(100);
    addLog('COGNITIVE BUFFER BYPASSED BY USER', 'warning');
    goOnline();
  }, [goOnline, addLog]);

  // Auto-start boot
  useEffect(() => {
    const t = setTimeout(startBoot, 600);
    return () => clearTimeout(t);
  }, [startBoot]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9990] flex flex-col items-center justify-center"
          style={{ background: 'var(--bg-void)' }}
        >
          {/* Grid Background */}
          <div className="absolute inset-0 holo-grid opacity-30" />

          {/* Corner decorations */}
          <div className="absolute top-6 left-6 text-xs font-mono text-muted">
            <span style={{ color: 'var(--cyan)' }}>◈</span> JARVIS OS INIT
          </div>
          <div className="absolute top-6 right-6 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            SEC LEVEL: 5 | ENCRYPTED
          </div>
          <div className="absolute bottom-6 left-6 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            BUILD: {new Date().getFullYear()}.05.09-AI
          </div>
          <div className="absolute bottom-6 right-6 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            ARMOR: MARK-LXXXV OS
          </div>

          {/* Main Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full max-w-3xl mx-4 glass-panel rounded-lg overflow-hidden"
            style={{ border: '1px solid rgba(0, 240, 255, 0.2)' }}
          >
            {/* Terminal Title Bar */}
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ borderBottom: '1px solid rgba(0, 240, 255, 0.1)', background: 'rgba(0, 240, 255, 0.04)' }}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: 'var(--danger-red)' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: 'var(--warning-amber)' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: 'var(--neon-green)' }} />
              </div>
              <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                JARVIS HUD CONSOLE — BOOT LOADER v3.0
              </span>
              <div className="ml-auto flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'var(--neon-green)', boxShadow: '0 0 6px var(--neon-green)', animation: 'pulse-cyan 1s ease-in-out infinite' }}
                />
                <span className="font-mono text-xs" style={{ color: 'var(--neon-green)' }}>LIVE</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 h-80 overflow-y-auto no-scrollbar" style={{ fontFamily: 'var(--font-mono)' }}>
              {visibleLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-sm leading-6"
                  style={{ color: lineColor[line.type] || 'var(--text-secondary)' }}
                >
                  {line.type !== 'divider' && line.type !== 'header' && (
                    <span style={{ color: 'var(--text-muted)', marginRight: '8px' }}>
                      {String(i).padStart(3, '0')}
                    </span>
                  )}
                  {line.text}
                </motion.div>
              ))}
              {phase === 'running' && (
                <div className="flex items-center gap-1 mt-1">
                  <span className="font-mono text-sm" style={{ color: 'var(--cyan)' }}>{'>'}</span>
                  <span className="terminal-cursor" />
                </div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="px-6 pb-4">
              <div className="flex justify-between text-xs font-mono mb-2" style={{ color: 'var(--text-muted)' }}>
                <span>STARK HUD CORE INITIALIZATION</span>
                <span style={{ color: 'var(--cyan)' }}>{Math.floor(progress)}%</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
            </div>

            {/* Bypass Button */}
            <AnimatePresence>
              {bypassAvailable && phase === 'running' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="px-6 pb-6 text-right"
                >
                  <button
                    onClick={bypass}
                    className="btn-ghost text-xs"
                    style={{ color: 'var(--warning-amber)', borderColor: 'rgba(255, 149, 0, 0.3)' }}
                  >
                    ⚡ BYPASS COGNITIVE BUFFER
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Decorative corner brackets */}
          <div className="absolute top-20 left-20 w-12 h-12 opacity-30"
            style={{ borderTop: '2px solid var(--cyan)', borderLeft: '2px solid var(--cyan)' }} />
          <div className="absolute top-20 right-20 w-12 h-12 opacity-30"
            style={{ borderTop: '2px solid var(--purple)', borderRight: '2px solid var(--purple)' }} />
          <div className="absolute bottom-20 left-20 w-12 h-12 opacity-30"
            style={{ borderBottom: '2px solid var(--purple)', borderLeft: '2px solid var(--purple)' }} />
          <div className="absolute bottom-20 right-20 w-12 h-12 opacity-30"
            style={{ borderBottom: '2px solid var(--cyan)', borderRight: '2px solid var(--cyan)' }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
