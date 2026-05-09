'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SKILL_NODES = [
  // Frontend cluster
  { id: 'react',    label: 'React',     level: 92, cluster: 'FRONTEND',  x: 0.3,  y: 0.25, color: '#00f0ff' },
  { id: 'nextjs',   label: 'Next.js',   level: 88, cluster: 'FRONTEND',  x: 0.48, y: 0.18, color: '#00f0ff' },
  { id: 'vue',      label: 'Vue.js',    level: 80, cluster: 'FRONTEND',  x: 0.2,  y: 0.38, color: '#00f0ff' },
  { id: 'ts',       label: 'TypeScript',level: 85, cluster: 'FRONTEND',  x: 0.38, y: 0.35, color: '#00f0ff' },
  { id: 'tailwind', label: 'Tailwind',  level: 90, cluster: 'FRONTEND',  x: 0.25, y: 0.15, color: '#00f0ff' },

  // Backend cluster
  { id: 'node',     label: 'Node.js',   level: 84, cluster: 'BACKEND',   x: 0.7,  y: 0.28, color: '#b026ff' },
  { id: 'express',  label: 'Express',   level: 82, cluster: 'BACKEND',   x: 0.78, y: 0.4,  color: '#b026ff' },
  { id: 'mongo',    label: 'MongoDB',   level: 78, cluster: 'BACKEND',   x: 0.62, y: 0.42, color: '#b026ff' },
  { id: 'sql',      label: 'SQL',       level: 80, cluster: 'BACKEND',   x: 0.72, y: 0.18, color: '#b026ff' },

  // DevOps cluster
  { id: 'docker',   label: 'Docker',    level: 75, cluster: 'DEVOPS',    x: 0.55, y: 0.7,  color: '#00ff88' },
  { id: 'git',      label: 'Git/CI-CD', level: 88, cluster: 'DEVOPS',    x: 0.42, y: 0.62, color: '#00ff88' },
  { id: 'linux',    label: 'Linux',     level: 72, cluster: 'DEVOPS',    x: 0.68, y: 0.62, color: '#00ff88' },

  // Other cluster
  { id: 'python',   label: 'Python',    level: 70, cluster: 'AI',        x: 0.22, y: 0.7,  color: '#ff9500' },
  { id: 'security', label: 'CyberSec',  level: 76, cluster: 'AI',        x: 0.35, y: 0.78, color: '#ff9500' },
];

const CONNECTIONS = [
  ['react', 'nextjs'], ['react', 'ts'], ['react', 'tailwind'],
  ['nextjs', 'ts'], ['vue', 'ts'],
  ['node', 'express'], ['node', 'mongo'], ['node', 'sql'],
  ['express', 'mongo'],
  ['docker', 'linux'], ['docker', 'git'],
  ['git', 'react'], ['git', 'node'],
  ['python', 'security'], ['python', 'git'],
  ['ts', 'node'],
];

const clusterColors = { FRONTEND: '#00f0ff', BACKEND: '#b026ff', DEVOPS: '#00ff88', AI: '#ff9500' };

export default function NeuralConnections() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef(null);
  const packetsRef = useRef([]);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [dims, setDims] = useState({ w: 800, h: 500 });

  // Track real pixel positions
  const getNodePos = (node, w, h) => ({
    x: node.x * w,
    y: node.y * h,
  });

  useEffect(() => {
    const updateDims = () => {
      if (containerRef.current) {
        setDims({ w: containerRef.current.offsetWidth, h: containerRef.current.offsetHeight });
      }
    };
    updateDims();
    window.addEventListener('resize', updateDims);
    return () => window.removeEventListener('resize', updateDims);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = dims.w;
    canvas.height = dims.h;
    const ctx = canvas.getContext('2d');

    // Init data packets
    const spawnPacket = () => {
      const conn = CONNECTIONS[Math.floor(Math.random() * CONNECTIONS.length)];
      const from = SKILL_NODES.find(n => n.id === conn[0]);
      const to = SKILL_NODES.find(n => n.id === conn[1]);
      if (!from || !to) return;
      packetsRef.current.push({
        fx: from.x * dims.w, fy: from.y * dims.h,
        tx: to.x * dims.w, ty: to.y * dims.h,
        t: 0, speed: 0.005 + Math.random() * 0.008,
        color: from.color,
      });
    };
    const pInterval = setInterval(spawnPacket, 600);

    const draw = () => {
      ctx.clearRect(0, 0, dims.w, dims.h);
      const mouse = mouseRef.current;

      // Draw connections
      CONNECTIONS.forEach(([aid, bid]) => {
        const a = SKILL_NODES.find(n => n.id === aid);
        const b = SKILL_NODES.find(n => n.id === bid);
        if (!a || !b) return;
        const ax = a.x * dims.w, ay = a.y * dims.h;
        const bx = b.x * dims.w, by = b.y * dims.h;
        const isHovered = hoveredNode?.id === aid || hoveredNode?.id === bid;
        const grad = ctx.createLinearGradient(ax, ay, bx, by);
        grad.addColorStop(0, isHovered ? a.color + '80' : a.color + '20');
        grad.addColorStop(1, isHovered ? b.color + '80' : b.color + '20');
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.strokeStyle = grad;
        ctx.lineWidth = isHovered ? 1.5 : 0.7;
        ctx.stroke();
      });

      // Draw data packets
      packetsRef.current = packetsRef.current.filter(pk => pk.t <= 1);
      packetsRef.current.forEach(pk => {
        pk.t += pk.speed;
        const x = pk.fx + (pk.tx - pk.fx) * pk.t;
        const y = pk.fy + (pk.ty - pk.fy) * pk.t;
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = pk.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = pk.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw nodes
      SKILL_NODES.forEach(node => {
        const nx = node.x * dims.w;
        const ny = node.y * dims.h;
        const r = 6 + (node.level / 100) * 6;
        const isHovered = hoveredNode?.id === node.id;
        const distToMouse = Math.hypot(nx - mouse.x, ny - mouse.y);
        const proximity = Math.max(0, 1 - distToMouse / 120);

        ctx.beginPath();
        ctx.arc(nx, ny, r + proximity * 4, 0, Math.PI * 2);
        ctx.fillStyle = node.color + (isHovered ? 'ff' : '30');
        ctx.fill();

        ctx.beginPath();
        ctx.arc(nx, ny, r, 0, Math.PI * 2);
        ctx.fillStyle = node.color + (isHovered ? '60' : '30');
        ctx.fill();

        ctx.beginPath();
        ctx.arc(nx, ny, r / 2, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowBlur = isHovered ? 20 : 8;
        ctx.shadowColor = node.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label
        ctx.font = `bold ${isHovered ? 12 : 10}px 'Share Tech Mono', monospace`;
        ctx.fillStyle = isHovered ? node.color : node.color + 'aa';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, nx, ny + r + 14);
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      clearInterval(pInterval);
    };
  }, [dims, hoveredNode]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    mouseRef.current = { x: mx, y: my };

    // Check hover
    const hit = SKILL_NODES.find(n => {
      const nx = n.x * dims.w;
      const ny = n.y * dims.h;
      return Math.hypot(nx - mx, ny - my) < 20;
    });
    setHoveredNode(hit || null);
  };

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
          <div className="w-8 h-px" style={{ background: 'var(--cyan)' }} />
          <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--cyan)' }}>
            NEURAL CONNECTIONS / SYNAPTIC MAP
          </span>
        </div>
        <h2 className="font-display font-black mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          NEURAL <span style={{ color: 'var(--cyan)', textShadow: '0 0 20px var(--cyan)' }}>CONNECTIONS</span>
        </h2>
        <p className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
          {SKILL_NODES.length} active synaptic nodes | hover to activate energy flow | {CONNECTIONS.length} neural pathways
        </p>
      </motion.div>

      <div className="flex gap-6 flex-col lg:flex-row">
        {/* Canvas Network */}
        <motion.div
          ref={containerRef}
          className="flex-1 relative rounded-lg overflow-hidden"
          style={{
            height: '500px',
            border: '1px solid rgba(0, 240, 255, 0.1)',
            background: 'rgba(0, 0, 0, 0.4)',
            cursor: hoveredNode ? 'crosshair' : 'default',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { mouseRef.current = { x: -9999, y: -9999 }; setHoveredNode(null); }}
        >
          <canvas ref={canvasRef} className="absolute inset-0" />

          {/* Cluster labels */}
          {Object.entries(clusterColors).map(([cluster, color]) => {
            const clusterNodes = SKILL_NODES.filter(n => n.cluster === cluster);
            const avgX = clusterNodes.reduce((s, n) => s + n.x, 0) / clusterNodes.length;
            const avgY = clusterNodes.reduce((s, n) => s + n.y, 0) / clusterNodes.length;
            return (
              <div
                key={cluster}
                className="absolute pointer-events-none font-display text-xs font-bold tracking-widest"
                style={{
                  left: `${avgX * 100}%`,
                  top: `${avgY * 100}%`,
                  transform: 'translate(-50%, -60px)',
                  color: color + '60',
                  fontSize: '9px',
                  letterSpacing: '3px',
                }}
              >
                — {cluster} —
              </div>
            );
          })}
        </motion.div>

        {/* Side Panel */}
        <motion.div
          className="lg:w-64 space-y-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* Hovered Node Info */}
          {hoveredNode ? (
            <div className="glass-panel p-4 rounded-lg" style={{ border: `1px solid ${hoveredNode.color}40` }}>
              <div className="font-mono text-xs mb-1" style={{ color: 'var(--text-muted)' }}>ACTIVE NODE</div>
              <div className="font-display text-lg font-bold mb-2" style={{ color: hoveredNode.color }}>
                {hoveredNode.label}
              </div>
              <div className="font-mono text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>
                CLUSTER: {hoveredNode.cluster}
              </div>
              <div className="font-mono text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                PROFICIENCY: {hoveredNode.level}%
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${hoveredNode.level}%`, background: hoveredNode.color }} />
              </div>
            </div>
          ) : (
            <div className="glass-panel p-4 rounded-lg text-center">
              <div className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                HOVER A NODE<br />TO ACTIVATE ENERGY FLOW
              </div>
            </div>
          )}

          {/* Cluster legend */}
          <div className="glass-panel p-4 rounded-lg">
            <div className="font-mono text-xs mb-3" style={{ color: 'var(--text-muted)' }}>NEURAL CLUSTERS:</div>
            {Object.entries(clusterColors).map(([cluster, color]) => (
              <div key={cluster} className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
                <span className="font-mono text-xs" style={{ color }}>{cluster}</span>
              </div>
            ))}
          </div>

          {/* All skills list */}
          <div className="glass-panel p-4 rounded-lg max-h-60 overflow-y-auto no-scrollbar">
            <div className="font-mono text-xs mb-3" style={{ color: 'var(--text-muted)' }}>ALL SYNAPTIC NODES:</div>
            <div className="space-y-2">
              {SKILL_NODES.sort((a, b) => b.level - a.level).map(n => (
                <div key={n.id} className="flex items-center gap-2">
                  <span className="font-mono text-xs w-24 truncate" style={{ color: n.color, fontSize: '10px' }}>
                    {n.label}
                  </span>
                  <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <div className="h-full rounded-full" style={{ width: `${n.level}%`, background: n.color, opacity: 0.8 }} />
                  </div>
                  <span className="font-mono text-xs" style={{ color: 'var(--text-muted)', fontSize: '9px' }}>{n.level}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
