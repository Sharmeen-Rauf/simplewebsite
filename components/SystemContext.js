'use client';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const SystemContext = createContext(null);

export const MODULES = {
  IDENTITY: 'identity',
  PROJECTS: 'projects',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  FREQUENCY: 'frequency',
  TERMINAL: 'terminal',
  CONTACT: 'contact',
};

export const SYSTEM_STATES = {
  UNBOOTED: 'unbooted',
  BOOTING: 'booting',
  ONLINE: 'online',
  MALFUNCTION: 'malfunction',
};

const MAX_LOGS = 40;

export function SystemProvider({ children, initialModule = MODULES.IDENTITY }) {
  const [systemState, setSystemState] = useState(SYSTEM_STATES.UNBOOTED);
  const [activeModule, setActiveModule] = useState(initialModule);
  const [audioMuted, setAudioMuted] = useState(true);
  const [logs, setLogs] = useState([]);
  const [diagnostics, setDiagnostics] = useState({
    cpuLoad: 0,
    memoryUsed: 0,
    synapses: 0,
    frequency: 0,
    uptime: 0,
    signalStrength: 0,
  });
  const [isGlitching, setIsGlitching] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // On mount, check if we have already booted (for nav without full reboot)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const booted = sessionStorage.getItem('neural-booted');
      if (booted === 'true') {
        setSystemState(SYSTEM_STATES.ONLINE);
        setActiveModule(initialModule);
      }
    }
  }, [initialModule]);

  const addLog = useCallback((message, type = 'info') => {
    const timestamp = new Date().toISOString().slice(11, 23);
    setLogs(prev => [
      { id: Date.now() + Math.random(), message, type, timestamp },
      ...prev.slice(0, MAX_LOGS - 1),
    ]);
  }, []);

  const bootSystem = useCallback(() => {
    setSystemState(SYSTEM_STATES.BOOTING);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('neural-booted', 'true');
    }
  }, []);

  const goOnline = useCallback(() => {
    setSystemState(SYSTEM_STATES.ONLINE);
    addLog('SYSTEM CORE FULLY OPERATIONAL', 'success');
    addLog('PORTFOLIO MODULES SYNCHRONIZED', 'success');
    addLog(`ACTIVE MODULE: ${activeModule.toUpperCase()}`, 'info');
  }, [activeModule, addLog]);

  const navigateTo = useCallback((module) => {
    setActiveModule(module);
    addLog(`SWITCHING MODULE >>> ${module.toUpperCase()}`, 'info');
  }, [addLog]);

  const triggerGlitch = useCallback((duration = 500) => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), duration);
    addLog('NEURAL INTERFERENCE DETECTED', 'warning');
  }, [addLog]);

  const triggerMalfunction = useCallback((duration = 3000) => {
    setSystemState(SYSTEM_STATES.MALFUNCTION);
    addLog('⚠ CRITICAL SYSTEM MALFUNCTION', 'danger');
    addLog('INITIATING EMERGENCY RECOVERY...', 'danger');
    setTimeout(() => {
      setSystemState(SYSTEM_STATES.ONLINE);
      addLog('RECOVERY COMPLETE — SYSTEM RESTORED', 'success');
    }, duration);
  }, [addLog]);

  // Live diagnostics ticker
  useEffect(() => {
    if (systemState !== SYSTEM_STATES.ONLINE) return;
    const interval = setInterval(() => {
      setDiagnostics({
        cpuLoad: Math.floor(60 + Math.random() * 35),
        memoryUsed: Math.floor(40 + Math.random() * 50),
        synapses: Math.floor(10000 + Math.random() * 90000),
        frequency: +(88 + Math.random() * 20).toFixed(1),
        uptime: Math.floor(Date.now() / 1000) % 99999,
        signalStrength: Math.floor(80 + Math.random() * 20),
      });
    }, 1800);
    return () => clearInterval(interval);
  }, [systemState]);

  // Track mouse position globally
  useEffect(() => {
    const handleMouse = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const value = {
    systemState,
    setSystemState,
    activeModule,
    audioMuted,
    setAudioMuted,
    logs,
    addLog,
    diagnostics,
    isGlitching,
    cursorPos,
    bootSystem,
    goOnline,
    navigateTo,
    triggerGlitch,
    triggerMalfunction,
    MODULES,
    SYSTEM_STATES,
  };

  return (
    <SystemContext.Provider value={value}>
      {children}
    </SystemContext.Provider>
  );
}

export function useSystem() {
  const ctx = useContext(SystemContext);
  if (!ctx) throw new Error('useSystem must be used within SystemProvider');
  return ctx;
}
