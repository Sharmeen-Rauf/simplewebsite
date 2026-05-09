'use client';
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSystem } from './SystemContext';
import NeuralIdentity from './modules/NeuralIdentity';
import MemoryArchive from './modules/MemoryArchive';
import NeuralConnections from './modules/NeuralConnections';
import SignalTransmission from './modules/SignalTransmission';
import FrequencyChamber from './modules/FrequencyChamber';
import AiTerminal from './modules/AiTerminal';
import ContactTransmission from './modules/ContactTransmission';

const NAV_ITEMS = [
  { id: 'identity',    icon: '◉', label: 'IDENTITY',    sublabel: 'Neural Core' },
  { id: 'projects',   icon: '⬡', label: 'MEMORY',      sublabel: 'Archive' },
  { id: 'skills',     icon: '⬢', label: 'NEURAL',      sublabel: 'Connections' },
  { id: 'experience', icon: '◈', label: 'SIGNAL',      sublabel: 'Transmission' },
  { id: 'frequency',  icon: '◎', label: 'FREQUENCY',   sublabel: 'Chamber' },
  { id: 'terminal',   icon: '⌘', label: 'TERMINAL',    sublabel: 'AI Console' },
  { id: 'contact',    icon: '⟟', label: 'CONTACT',     sublabel: 'Transmit' },
];

const MODULE_COMPONENTS = {
  identity:   NeuralIdentity,
  projects:   MemoryArchive,
  skills:     NeuralConnections,
  experience: SignalTransmission,
  frequency:  FrequencyChamber,
  terminal:   AiTerminal,
  contact:    ContactTransmission,
};

function DiagnosticBar({ diagnostics, audioMuted, setAudioMuted, systemState, SYSTEM_STATES }) {
  const isMalfunctioning = systemState === SYSTEM_STATES.MALFUNCTION;
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-2 no-select"
      style={{
        background: 'rgba(5, 5, 8, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${isMalfunctioning ? 'rgba(255, 34, 68, 0.4)' : 'rgba(0, 240, 255, 0.12)'}`,
        transition: 'border-color 0.3s ease',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <span
            className="font-display text-sm font-bold tracking-widest"
            style={{ color: 'var(--cyan)', textShadow: '0 0 10px var(--cyan)' }}
          >
            SR
          </span>
          <div
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
            style={{
              background: isMalfunctioning ? 'var(--danger-red)' : 'var(--neon-green)',
              boxShadow: `0 0 6px ${isMalfunctioning ? 'var(--danger-red)' : 'var(--neon-green)'}`,
              animation: 'pulse-cyan 1.5s ease-in-out infinite',
            }}
          />
        </div>
        <div className="hidden sm:flex flex-col">
          <span className="font-mono text-xs" style={{ color: 'var(--cyan)', lineHeight: 1.2 }}>
            SHARMEEN.RAUF
          </span>
          <span className="font-mono text-xs" style={{ color: 'var(--text-muted)', lineHeight: 1.2, fontSize: '9px' }}>
            NEURAL BROADCAST CORE
          </span>
        </div>
      </div>

      {/* Diagnostics */}
      <div className="hidden md:flex items-center gap-6">
        {[
          { label: 'CPU', value: `${diagnostics.cpuLoad}%`, color: diagnostics.cpuLoad > 85 ? 'var(--danger-red)' : 'var(--neon-green)' },
          { label: 'MEM', value: `${diagnostics.memoryUsed}%`, color: 'var(--cyan)' },
          { label: 'SYNAPSE', value: diagnostics.synapses.toLocaleString(), color: 'var(--purple)' },
          { label: 'FREQ', value: `${diagnostics.frequency}Hz`, color: 'var(--warning-amber)' },
        ].map(({ label, value, color }) => (
          <div key={label} className="flex flex-col items-center">
            <span className="font-mono text-xs" style={{ color: 'var(--text-muted)', fontSize: '9px' }}>{label}</span>
            <span className="font-mono text-xs font-bold" style={{ color }}>{value}</span>
          </div>
        ))}
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: isMalfunctioning ? 'var(--danger-red)' : 'var(--neon-green)',
              boxShadow: `0 0 4px ${isMalfunctioning ? 'var(--danger-red)' : 'var(--neon-green)'}`,
            }}
          />
          <span className="font-mono text-xs" style={{ color: isMalfunctioning ? 'var(--danger-red)' : 'var(--neon-green)', fontSize: '10px' }}>
            {isMalfunctioning ? 'MALFUNCTION' : 'ONLINE'}
          </span>
        </div>
        <button
          onClick={() => setAudioMuted(!audioMuted)}
          className="font-mono text-xs px-3 py-1 rounded transition-colors"
          style={{
            border: '1px solid rgba(0, 240, 255, 0.2)',
            color: audioMuted ? 'var(--text-muted)' : 'var(--cyan)',
            background: audioMuted ? 'transparent' : 'rgba(0, 240, 255, 0.05)',
          }}
        >
          {audioMuted ? '○ MUTED' : '◉ AUDIO'}
        </button>
      </div>
    </header>
  );
}

function SideNav({ activeModule, navigateTo }) {
  return (
    <nav
      className="fixed left-0 top-12 bottom-0 z-30 flex flex-col items-center py-6 gap-2 no-select"
      style={{
        width: '60px',
        background: 'rgba(5, 5, 8, 0.85)',
        backdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(0, 240, 255, 0.08)',
      }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeModule === item.id;
        return (
          <button
            key={item.id}
            onClick={() => navigateTo(item.id)}
            title={`${item.label} — ${item.sublabel}`}
            className="relative group flex flex-col items-center justify-center w-10 h-10 rounded transition-all duration-200"
            style={{
              background: isActive ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
              border: isActive ? '1px solid rgba(0, 240, 255, 0.3)' : '1px solid transparent',
              color: isActive ? 'var(--cyan)' : 'var(--text-muted)',
            }}
          >
            <span className="text-lg leading-none" style={{ textShadow: isActive ? '0 0 8px var(--cyan)' : 'none' }}>
              {item.icon}
            </span>
            {/* Tooltip */}
            <div
              className="absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap"
              style={{
                background: 'rgba(5, 5, 8, 0.95)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                borderRadius: '4px',
                padding: '6px 12px',
                zIndex: 50,
              }}
            >
              <span className="font-mono text-xs block" style={{ color: 'var(--cyan)' }}>{item.label}</span>
              <span className="font-mono text-xs block" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>{item.sublabel}</span>
            </div>
            {/* Active indicator */}
            {isActive && (
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-l"
                style={{ background: 'var(--cyan)', boxShadow: '0 0 6px var(--cyan)' }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}

function SystemFooter({ logs }) {
  const latest = logs.slice(0, 3);
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-30 flex items-center gap-4 px-4 py-2 no-select"
      style={{
        background: 'rgba(5, 5, 8, 0.9)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(0, 240, 255, 0.08)',
        height: '36px',
      }}
    >
      <span className="font-mono text-xs" style={{ color: 'var(--cyan)', flexShrink: 0 }}>SYS://</span>
      <div className="flex gap-6 overflow-hidden">
        {latest.map((log) => (
          <span
            key={log.id}
            className="font-mono text-xs whitespace-nowrap"
            style={{
              color: log.type === 'danger' ? 'var(--danger-red)' :
                     log.type === 'warning' ? 'var(--warning-amber)' :
                     log.type === 'success' ? 'var(--neon-green)' :
                     'var(--text-muted)',
            }}
          >
            [{log.timestamp}] {log.message}
          </span>
        ))}
      </div>
      <div className="ml-auto flex items-center gap-3 flex-shrink-0">
        <span className="font-mono text-xs" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
          BROADCAST CORE v4.2.7
        </span>
      </div>
    </footer>
  );
}

export default function NeuralDashboard() {
  const { activeModule, navigateTo, diagnostics, audioMuted, setAudioMuted, systemState, SYSTEM_STATES, logs, isGlitching } = useSystem();
  const ActiveModule = MODULE_COMPONENTS[activeModule] || NeuralIdentity;

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'var(--bg-void)',
        filter: isGlitching ? 'hue-rotate(15deg) saturate(2)' : 'none',
        transition: 'filter 0.1s ease',
      }}
    >
      <DiagnosticBar
        diagnostics={diagnostics}
        audioMuted={audioMuted}
        setAudioMuted={setAudioMuted}
        systemState={systemState}
        SYSTEM_STATES={SYSTEM_STATES}
      />
      <SideNav activeModule={activeModule} navigateTo={navigateTo} />

      {/* Main content viewport */}
      <main
        style={{
          paddingLeft: '60px',
          paddingTop: '48px',
          paddingBottom: '36px',
          minHeight: '100vh',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(2px)' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="h-full"
          >
            <ActiveModule />
          </motion.div>
        </AnimatePresence>
      </main>

      <SystemFooter logs={logs} />
    </div>
  );
}
