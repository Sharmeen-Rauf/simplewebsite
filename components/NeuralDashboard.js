'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSystem } from './SystemContext';
import NeuralIdentity from './modules/NeuralIdentity';
import MemoryArchive from './modules/MemoryArchive';
import NeuralConnections from './modules/NeuralConnections';
import SignalTransmission from './modules/SignalTransmission';
import FrequencyChamber from './modules/FrequencyChamber';
import AiTerminal from './modules/AiTerminal';
import ContactTransmission from './modules/ContactTransmission';

const NAV_ITEMS = [
  { id: 'identity',    label: 'ABOUT ME',   href: '/' },
  { id: 'skills',     label: 'SKILLS',      href: '/skills' },
  { id: 'experience', label: 'EXPERIENCE',  href: '/experience' },
  { id: 'education',  label: 'EDUCATION',   href: '/education' },
  { id: 'projects',   label: 'PROJECTS',    href: '/projects' },
  { id: 'frequency',  label: 'HOBBIES',     href: '/hobbies' },
  { id: 'terminal',   label: 'CONSOLE',     href: '/terminal' },
  { id: 'contact',    label: 'CONTACT',     href: '/contactus' },
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

function TopNavbar() {
  const pathname = usePathname();
  const { activeModule, audioMuted, setAudioMuted } = useSystem();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a14]/90 border-b border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Name Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display font-black text-sm md:text-base text-white tracking-widest group-hover:text-cyan-400 transition-colors">
            SHARMEEN RAUF
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activeModule === item.id || 
              (item.id === 'experience' && activeModule === 'experience' && pathname === '/experience') ||
              (item.id === 'education' && activeModule === 'experience' && pathname === '/education');
            return (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-xs tracking-wider transition-all duration-200 hover:text-white uppercase font-bold relative py-2"
                style={{
                  color: isActive ? 'var(--cyan)' : 'var(--text-secondary)',
                }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)' }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action & Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setAudioMuted(!audioMuted)}
            className="font-mono text-xs px-2.5 py-1 rounded transition-colors border border-white/10 hover:border-cyan-400 hover:text-cyan-400"
            style={{
              color: audioMuted ? 'var(--text-muted)' : 'var(--cyan)',
              background: audioMuted ? 'transparent' : 'rgba(0, 240, 255, 0.05)',
            }}
          >
            {audioMuted ? '🔇 MUTED' : '🔊 AUDIO'}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-cyan-400 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 bg-[#0a0a14]/95 border-b border-white/5 backdrop-blur-lg z-40 py-6 px-6 lg:hidden flex flex-col gap-4"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeModule === item.id || 
                (item.id === 'experience' && activeModule === 'experience' && pathname === '/experience') ||
                (item.id === 'education' && activeModule === 'experience' && pathname === '/education');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-xs tracking-wider uppercase font-bold py-2 border-b border-white/5"
                  style={{
                    color: isActive ? 'var(--cyan)' : 'var(--text-secondary)',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default function NeuralDashboard() {
  const { activeModule, isGlitching } = useSystem();
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
      <TopNavbar />

      {/* Main content viewport */}
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <ActiveModule />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
