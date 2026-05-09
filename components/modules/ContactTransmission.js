'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const TRANSMISSION_STATES = {
  IDLE: 'idle',
  ENCRYPTING: 'encrypting',
  TRANSMITTING: 'transmitting',
  SUCCESS: 'success',
  ERROR: 'error',
};

const TRANSMISSION_STEPS = [
  { label: 'INITIALIZING SECURE UPLINK...', duration: 600 },
  { label: 'ENCRYPTING PAYLOAD...', duration: 800 },
  { label: 'ROUTING THROUGH NEURAL RELAY...', duration: 700 },
  { label: 'TRANSMITTING SIGNAL...', duration: 1000 },
  { label: 'AWAITING ACKNOWLEDGEMENT...', duration: 600 },
];

export default function ContactTransmission() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [txState, setTxState] = useState(TRANSMISSION_STATES.IDLE);
  const [txStep, setTxStep] = useState(0);
  const [txProgress, setTxProgress] = useState(0);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const transmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setTxState(TRANSMISSION_STATES.ENCRYPTING);
    setTxStep(0);
    setTxProgress(0);

    const totalDuration = TRANSMISSION_STEPS.reduce((s, step) => s + step.duration, 0);
    let elapsed = 0;

    for (let i = 0; i < TRANSMISSION_STEPS.length; i++) {
      setTxStep(i);
      await new Promise(r => setTimeout(r, TRANSMISSION_STEPS[i].duration));
      elapsed += TRANSMISSION_STEPS[i].duration;
      setTxProgress(Math.floor((elapsed / totalDuration) * 100));
    }

    setTxState(TRANSMISSION_STATES.SUCCESS);
    setTxProgress(100);
  };

  const reset = () => {
    setTxState(TRANSMISSION_STATES.IDLE);
    setTxStep(0);
    setTxProgress(0);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const isTransmitting = txState === TRANSMISSION_STATES.ENCRYPTING || txState === TRANSMISSION_STATES.TRANSMITTING;

  return (
    <section className="min-h-screen px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: 'var(--cyan)' }} />
          <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--cyan)' }}>
            CONTACT TRANSMISSION / ENCRYPTED SIGNAL CONSOLE
          </span>
        </div>
        <h2 className="font-display font-black mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          SIGNAL <span style={{ color: 'var(--cyan)', textShadow: '0 0 20px var(--cyan)' }}>TRANSMISSION</span>
        </h2>
        <p className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
          Send an encrypted signal directly into the neural network. All transmissions are quantum-secured.
        </p>
      </motion.div>

      <div className="max-w-5xl grid lg:grid-cols-2 gap-10">
        {/* Left: Signal Console Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {txState === TRANSMISSION_STATES.SUCCESS ? (
              /* Success State */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="glass-panel rounded-lg p-8 text-center"
                style={{ border: '1px solid rgba(0, 255, 136, 0.4)' }}
              >
                <div className="text-6xl mb-4">◉</div>
                <div
                  className="font-display text-xl font-bold mb-2"
                  style={{ color: 'var(--neon-green)', textShadow: '0 0 20px var(--neon-green)' }}
                >
                  TRANSMISSION ACKNOWLEDGED
                </div>
                <div className="font-mono text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Signal received and decrypted successfully.<br />
                  Neural response will be dispatched shortly.
                </div>
                <div className="glass-panel rounded p-4 mb-6 text-left">
                  {[
                    '✓ UPLINK: ESTABLISHED',
                    '✓ ENCRYPTION: AES-256-QUANTUM',
                    '✓ PAYLOAD: DELIVERED',
                    '✓ ACK: RECEIVED FROM SR-PRIME-001',
                  ].map((line, i) => (
                    <div key={i} className="font-mono text-xs mb-1" style={{ color: 'var(--neon-green)' }}>{line}</div>
                  ))}
                </div>
                <button onClick={reset} className="btn-ghost">SEND ANOTHER TRANSMISSION</button>
              </motion.div>
            ) : isTransmitting ? (
              /* Transmission Progress */
              <motion.div
                key="transmitting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass-panel rounded-lg p-8"
                style={{ border: '1px solid rgba(0, 240, 255, 0.3)' }}
              >
                <div className="font-display text-lg font-bold mb-6" style={{ color: 'var(--cyan)' }}>
                  TRANSMISSION IN PROGRESS
                </div>
                <div className="space-y-3 mb-6">
                  {TRANSMISSION_STEPS.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{
                          background: i < txStep ? 'var(--neon-green)' : i === txStep ? 'var(--cyan)' : 'var(--text-muted)',
                          boxShadow: i === txStep ? '0 0 6px var(--cyan)' : 'none',
                          animation: i === txStep ? 'pulse-cyan 1s ease-in-out infinite' : 'none',
                        }}
                      />
                      <span
                        className="font-mono text-xs"
                        style={{
                          color: i < txStep ? 'var(--neon-green)' : i === txStep ? 'var(--cyan)' : 'var(--text-muted)',
                          fontSize: '11px',
                        }}
                      >
                        {i < txStep ? '✓ ' : ''}{step.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mb-2 flex justify-between font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                  <span>SIGNAL PROPAGATION</span>
                  <span style={{ color: 'var(--cyan)' }}>{txProgress}%</span>
                </div>
                <div className="progress-bar h-1.5">
                  <motion.div
                    className="progress-fill"
                    animate={{ width: `${txProgress}%` }}
                    transition={{ duration: 0.5 }}
                    style={{ height: '100%' }}
                  />
                </div>
              </motion.div>
            ) : (
              /* Form */
              <motion.form
                key="form"
                onSubmit={transmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass-panel rounded-lg p-6 space-y-4"
                style={{ border: '1px solid rgba(0, 240, 255, 0.12)' }}
              >
                <div className="font-mono text-xs mb-4" style={{ color: 'var(--cyan)' }}>
                  ◈ COMPOSE ENCRYPTED TRANSMISSION
                </div>

                {[
                  { name: 'name', label: 'SENDER IDENTIFICATION', placeholder: 'Your name...' },
                  { name: 'email', label: 'RETURN SIGNAL ADDRESS', placeholder: 'your@email.com', type: 'email' },
                  { name: 'subject', label: 'TRANSMISSION SUBJECT', placeholder: 'Subject...' },
                ].map(field => (
                  <div key={field.name}>
                    <label className="font-mono text-xs block mb-1" style={{ color: 'var(--text-muted)', fontSize: '10px', letterSpacing: '1px' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type || 'text'}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full bg-transparent outline-none font-mono text-sm px-4 py-3 rounded-sm transition-all"
                      style={{
                        border: '1px solid rgba(0, 240, 255, 0.15)',
                        color: 'var(--text-primary)',
                        '::placeholder': { color: 'var(--text-muted)' },
                      }}
                      onFocus={e => e.target.style.borderColor = 'rgba(0, 240, 255, 0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(0, 240, 255, 0.15)'}
                    />
                  </div>
                ))}

                <div>
                  <label className="font-mono text-xs block mb-1" style={{ color: 'var(--text-muted)', fontSize: '10px', letterSpacing: '1px' }}>
                    SIGNAL PAYLOAD
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    className="w-full bg-transparent outline-none font-mono text-sm px-4 py-3 rounded-sm transition-all resize-none"
                    style={{
                      border: '1px solid rgba(0, 240, 255, 0.15)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0, 240, 255, 0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(0, 240, 255, 0.15)'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 font-display font-bold text-sm tracking-widest transition-all rounded-sm"
                  style={{
                    background: 'linear-gradient(90deg, var(--cyan), var(--purple))',
                    color: '#000',
                    boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 240, 255, 0.5)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.3)'}
                >
                  ⟟ INITIATE TRANSMISSION
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right: Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {/* Radar / Signal visual */}
          <div
            className="glass-panel p-6 rounded-lg flex items-center justify-center"
            style={{ height: '200px', border: '1px solid rgba(0, 240, 255, 0.1)', position: 'relative', overflow: 'hidden' }}
          >
            {/* Concentric circles */}
            {[60, 90, 120].map((r, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: r * 2,
                  height: r * 2,
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                  animation: `pulse-cyan ${2 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
            {/* Radar sweep */}
            <div
              className="absolute top-1/2 left-1/2 w-24 h-0.5 origin-left"
              style={{
                background: 'linear-gradient(to right, rgba(0,240,255,0.6), transparent)',
                transform: 'translateY(-50%) rotate(0deg)',
                animation: 'radar-sweep 4s linear infinite',
              }}
            />
            {/* Center dot */}
            <div className="relative z-10 w-4 h-4 rounded-full" style={{ background: 'var(--cyan)', boxShadow: '0 0 15px var(--cyan)' }} />
            <div className="absolute top-3 left-3 font-mono text-xs" style={{ color: 'var(--text-muted)', fontSize: '9px' }}>
              SIGNAL SCANNER ACTIVE
            </div>
          </div>

          {/* Direct channels */}
          <div className="glass-panel p-6 rounded-lg space-y-4">
            <div className="font-mono text-xs mb-4" style={{ color: 'var(--text-muted)' }}>DIRECT CHANNELS:</div>
            {[
              { icon: <FaGithub size={18} />, label: 'github.com/Sharmeen-Rauf', href: 'https://github.com/Sharmeen-Rauf/', color: 'var(--text-secondary)' },
              { icon: <FaLinkedin size={18} />, label: 'linkedin.com/in/sharmeen-rauf', href: 'https://www.linkedin.com/in/sharmeen-rauf-504097269', color: 'var(--cyan)' },
              { icon: <FaInstagram size={18} />, label: 'instagram.com/sharmeen.rs', href: 'https://www.instagram.com/sharmeen.rs/', color: 'var(--purple)' },
            ].map(({ icon, label, href, color }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-sm transition-all group"
                style={{ border: '1px solid rgba(255,255,255,0.05)', color }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${color}40`}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
              >
                <span style={{ color, flexShrink: 0 }}>{icon}</span>
                <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>{label}</span>
                <span className="ml-auto font-mono text-xs group-hover:opacity-100 opacity-0 transition-opacity" style={{ color }}>→</span>
              </a>
            ))}

            <a
              href="mailto:sharmeenpakistan8@gmail.com"
              className="flex items-center gap-4 p-3 rounded-sm transition-all"
              style={{ border: '1px solid rgba(0, 240, 255, 0.2)', background: 'rgba(0, 240, 255, 0.04)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.5)'; e.currentTarget.style.boxShadow = '0 0 12px rgba(0, 240, 255, 0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <span className="text-xl">📡</span>
              <div>
                <div className="font-mono text-xs" style={{ color: 'var(--cyan)', fontSize: '10px' }}>DIRECT EMAIL UPLINK</div>
                <div className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>sharmeenpakistan8@gmail.com</div>
              </div>
            </a>
          </div>

          {/* Status */}
          <div
            className="p-4 rounded-sm font-mono text-xs flex items-center gap-3"
            style={{ border: '1px solid rgba(0, 255, 136, 0.2)', background: 'rgba(0, 255, 136, 0.04)', color: 'var(--neon-green)' }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse-cyan" style={{ background: 'var(--neon-green)' }} />
            NEURAL UPLINK: ACTIVE | RESPONSE TIME: FAST
          </div>
        </motion.div>
      </div>
    </section>
  );
}
