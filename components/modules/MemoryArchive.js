'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  {
    id: 'PROJ-001',
    title: 'PitchRadar AI',
    classification: 'TOP SECRET',
    tagline: 'AI-Powered B2B Lead Generation & Sales Intelligence Workspace',
    description: 'PitchRadar automatically crawls local markets, diagnoses technical business vulnerabilities, enriches contact details via Apify, and drafts hyper-personalized outreach campaigns using Claude AI.',
    overview: 'PitchRadar is a cutting-edge, data-driven B2B lead generation and sales intelligence platform designed to help agencies, SaaS startups, and digital marketers automate their client acquisition funnel.',
    tech: ['Next.js 14', 'Supabase', 'Claude API', 'Apify', 'Tailwind CSS'],
    status: 'ACTIVE',
    icon: '🎯',
    color: 'var(--cyan)',
    clearance: 5,
    lines: 12500,
    commits: 412,
    liveUrl: 'https://leadgenerator-plum.vercel.app/',
    features: [
      'Automated Scraper Engine (Google Maps & Places Crawler)',
      'On-the-Fly Tech Audit detecting speed, SSL, and CMS platforms (WordPress, Shopify, etc.)',
      'Unified Lead Diagnostic modal with 5 strategic tabs (Technical, Reviews, Social, AI Outreach, CRM Plan)',
      'Live Real-Time CRM sync utilizing Supabase WebSocket Subscriptions'
    ],
    impact: [
      '90% reduction in manual B2B lead generation time',
      'Increased cold email response rates via actual vulnerability discovery',
      'Real-time team collaboration with concurrent status mapping'
    ],
    innovations: [
      'Interactive glassmorphic modal design with micro-animations',
      'WebSocket-driven live sync across team screens',
      'AI vulnerability scoring algorithm based on custom benchmarks'
    ]
  },
  {
    id: 'PROJ-002',
    title: 'CoreTECH Solar ERP',
    classification: 'TOP SECRET',
    tagline: 'Enterprise Solar Distribution & Installation ERP',
    description: 'Enterprise Cloud ERP portal for solar energy distribution networks, field installers, and supply chains, integrating multi-tier role workflows, IMEI/SN stock tracking, billing, and logistics.',
    overview: 'CoreTECH is a modern, full-stack, real-time Cloud ERP portal built specifically for solar energy distribution networks, field installers, and supply chain operations. It integrates multi-tier role-based workflows, inventory tracking, real-time order lifecycle approvals, logistics, and billing.',
    tech: ['Next.js 14', 'Supabase RLS', 'WebSockets', 'Tailwind CSS'],
    status: 'COMPLETE',
    icon: '📊',
    color: 'var(--neon-green)',
    clearance: 5,
    lines: 32000,
    commits: 840,
    liveUrl: 'https://coretech-project.vercel.app/',
    features: [
      'Interactive Operations Dashboard (7 KPI Cards, Regional Heatmap, employee standings)',
      'Multi-Tier Role-Based Access Control (RBAC) (Owner, NSM, RSM, Installer)',
      'CSV Bulk Inventory Import & Multi-Warehouse mapping mapped to serials (IMEI/SN)',
      'Sequential order workflow (Booking -> NSM Approval -> Dispatch -> Payment -> Delivery)'
    ],
    impact: [
      '100% supply chain traceability via serial tracking, eliminating hardware loss',
      'Improved cashflow by sequencing payment milestones with logistics milestones',
      'Data shielding protecting pricing strategies and stock quantities'
    ],
    innovations: [
      'Resilient self-healing schema fallback algorithm for zero-downtime operations',
      'Complex Supabase RLS context queries for role-specific dashboard views',
      'Barcode/IMEI scanner integration for warehouse dispatches'
    ]
  },
  {
    id: 'PROJ-003',
    title: 'BoothBook CRM',
    classification: 'CLASSIFIED',
    tagline: 'Photo Booth & Event Rental SaaS Platform',
    description: 'Enterprise-grade multi-tenant SaaS CRM built for event rental operators, automating bookings, scheduling, pipelines with AI lead scoring, and affiliate commission management.',
    overview: 'BoothBook CRM is a modern, enterprise-grade, multi-tenant Software-as-a-Service designed specifically for photo booth operators and event rental companies. It streamlines bookings, venue logs, and affiliate marketing.',
    tech: ['Next.js 14', 'Supabase RLS', 'TypeScript', 'Tailwind CSS'],
    status: 'COMPLETE',
    icon: '📅',
    color: 'var(--purple)',
    clearance: 4,
    lines: 19800,
    commits: 536,
    liveUrl: 'https://final-crm-boothbook.vercel.app/',
    features: [
      'Multi-tenant authentication and strict organization-based resource isolation',
      'Interactive CRM Kanban pipeline with drag-and-drop mechanics',
      'Fuzzy duplicate customer contacts search and one-click merge registry',
      'Affiliate Rep commission ledger tracking referral conversions and settlements'
    ],
    impact: [
      '40% administrative time savings through calendar and pricing automation',
      'Increased conversions via AI-scored priority lead identification',
      'Clean contact database with customer LTV tracking'
    ],
    innovations: [
      'Custom client-side virtualization for 2,000+ contact rendering at 60 FPS',
      'Robust try/catch error boundaries with mock fallbacks for migration safety',
      'Interactive column-mapping engine for CSV uploads'
    ]
  },
  {
    id: 'PROJ-004',
    title: 'Antigravity Social Tracker',
    classification: 'RESTRICTED',
    tagline: 'Social Media Quota & Content Audit Platform',
    description: 'Internal quota dashboard tracking content limits, uniqueness validation, and team progress across Instagram, YouTube, TikTok, and Facebook.',
    overview: 'Antigravity Posting Hub is a high-fidelity social posting quota audit platform designed to track daily social media posting across Instagram, YouTube, TikTok, and Facebook. It keeps posting agents aligned with visual goals.',
    tech: ['Next.js 14', 'Supabase', 'React Hooks', 'Tailwind CSS'],
    status: 'COMPLETE',
    icon: '📲',
    color: 'var(--warning-amber)',
    clearance: 3,
    lines: 6400,
    commits: 182,
    liveUrl: 'https://tracking-softare.vercel.app/',
    features: [
      'Quota limits checks (60 per account, 180 per employee, 900 total daily limits)',
      'Multi-Platform equal distribution verification and live graphs',
      'Manager dashboard for team audits and submission queries',
      'Employee tokens for secure transaction logging'
    ],
    impact: [
      '100% quota compliance across distributed publishing teams',
      'Glitch prevention via automated link uniqueness checks',
      'Complete workflow transparency and employee output visualization'
    ],
    innovations: [
      'Real-time visual progress monitoring via Supabase Channels',
      'Automated submission validation algorithms preventing duplicate content',
      'Role-based database security views'
    ]
  },
  {
    id: 'PROJ-005',
    title: 'Afforah Luxury Fashion',
    classification: 'UNCLASSIFIED',
    tagline: 'South Asian Textile E-Commerce Brand',
    description: 'South Asian fashion platform featuring authentic bilingual Urdu storytelling, glassmorphism aesthetics, day/night toggles, and premium PKR billing.',
    overview: 'Afforah is a premium South Asian fashion and textile e-commerce brand built with authentic Urdu storytelling and glass morphism design. The platform celebrates traditional garments through poetic narratives.',
    tech: ['Next.js 14', 'Tailwind CSS', 'Glassmorphism', 'Urdu Typography'],
    status: 'COMPLETE',
    icon: '👑',
    color: 'var(--danger-red)',
    clearance: 2,
    lines: 9400,
    commits: 215,
    liveUrl: 'https://afforahgra.vercel.app/',
    features: [
      'Bilingual interface (English + Urdu) celebrating cultural heritage',
      'Poetic narrative-driven product catalog with custom Urdu typography',
      'Yaadon ka Sandook (Memories Chest) interactive gallery experience',
      'Day/Night theme toggle with fluid animations'
    ],
    impact: [
      'Unique cultural branding establishing high luxury market placement',
      'Premium customer UX boosting average order values (PKR 45k - 325k)',
      'Fully responsive, immersive mobile-first experience'
    ],
    innovations: [
      'Premium custom glassmorphic styling and transition system',
      'Highly optimized Next.js Image lazy-loading layouts',
      'Bilingual layout engine supporting RTL and LTR content directions'
    ]
  },
  {
    id: 'PROJ-006',
    title: 'Naye Talaash Tourism',
    classification: 'UNCLASSIFIED',
    tagline: 'Pakistan Tourism & Travel Platform',
    description: 'Full-stack travel booking and custom itinerary planner promoting ethical adventure tours across Pakistan with real-time slot inventory.',
    overview: 'Naye Talaash connects domestic and international travelers with curated tour packages across Pakistan. It handles bookings, itineraries, local guides, and regional highlights.',
    tech: ['Next.js 14', 'Supabase', 'Tailwind CSS', 'SEO Optimization'],
    status: 'ACTIVE',
    icon: '🏔️',
    color: 'var(--electric-blue)',
    clearance: 3,
    lines: 11200,
    commits: 310,
    liveUrl: 'https://www.nayitalaash.com/',
    features: [
      'Tour Discovery & Category filters (Hunza, Skardu, Azad Kashmir, Swat)',
      'Public group tour registry with dynamic pricing from Rs 11,000',
      'Custom Itinerary Builder and free tour quote calculator',
      'Integrated WhatsApp & direct booking support channels'
    ],
    impact: [
      'Promoted sustainable and community-engaged local tourism',
      'Boosted local valley economies by linking guides, transport, and hotels',
      'Made remote adventure tourism organized and safe'
    ],
    innovations: [
      'Mobile-first responsive booking form structures',
      'Integrated structured metadata schema for local tour SEO',
      'Custom map integration and seasonal destination advisors'
    ]
  },
  {
    id: 'PROJ-007',
    title: 'EscaBiz B2B Platform',
    classification: 'CLASSIFIED',
    tagline: 'Staff Augmentation & Lead Gen SaaS',
    description: 'B2B appointment setting and virtual sales staff management platform serving global clients with CRM automation and real-time performance analytics.',
    overview: 'EscaBiz is a data-driven B2B lead generation and virtual staff augmentation company specializing in qualified appointment setting, sales team scaling, and end-to-end sales management.',
    tech: ['Next.js 14', 'CRM API', 'Email Automation', 'Analytics Tools'],
    status: 'COMPLETE',
    icon: '💼',
    color: 'var(--purple)',
    clearance: 4,
    lines: 14500,
    commits: 390,
    liveUrl: 'https://www.escabiz.com/',
    features: [
      'Appointment scheduler with vetted decision-maker profiles',
      'LinkedIn Outreach Automation pipeline integration',
      'Dedicated VSA (Virtual Sales Agent) portal tracking client KPIs',
      'B2B Targeted Email Campaign engine with automated sequencing'
    ],
    impact: [
      '90% cost reduction for agencies outsourcing sales vs. in-house staff',
      'Predictable lead pipeline generation eliminating dry outreach months',
      'Global operation scaling across US, UK, and Pakistan markets'
    ],
    innovations: [
      'CRM sync hooks for automated lead delivery confirmation',
      'Dynamic performance charts tracking VSA-to-meeting conversions',
      'Secure organizational billing and reporting structures'
    ]
  }
];

const statusColor = {
  COMPLETE: 'var(--neon-green)',
  ACTIVE: 'var(--cyan)',
  ARCHIVED: 'var(--text-muted)',
};

const classColor = {
  'TOP SECRET': 'var(--danger-red)',
  'CLASSIFIED': 'var(--warning-amber)',
  'RESTRICTED': 'var(--purple)',
  'UNCLASSIFIED': 'var(--text-secondary)',
};

function ProjectCard({ project, onClick, isActive }) {
  return (
    <motion.div
      layout
      onClick={() => onClick(project)}
      className="cyber-card p-5 cursor-pointer relative overflow-hidden group flex flex-col justify-between h-[280px]"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        border: isActive ? `1px solid ${project.color}` : '1px solid rgba(0, 240, 255, 0.1)',
        boxShadow: isActive ? `0 0 20px ${project.color}20` : 'none',
      }}
    >
      <div>
        {/* Corner code indicator */}
        <div className="absolute top-2 right-2 font-mono text-xs" style={{ color: 'var(--text-muted)', fontSize: '9px' }}>
          {project.id}
        </div>

        {/* Classification badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs px-2 py-0.5 rounded-sm" style={{
            color: classColor[project.classification],
            border: `1px solid ${classColor[project.classification]}30`,
            background: `${classColor[project.classification]}08`,
            fontSize: '9px',
          }}>
            ⚠ {project.classification}
          </span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor[project.status] }} />
            <span className="font-mono text-xs" style={{ color: statusColor[project.status], fontSize: '9px' }}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Icon */}
        <div className="text-3xl mb-2 font-display" style={{ color: project.color, textShadow: `0 0 12px ${project.color}` }}>
          {project.icon}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-sm mb-1.5 leading-tight" style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs leading-relaxed mb-3 line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.slice(0, 3).map(t => (
            <span key={t} className="font-mono text-xs px-1.5 py-0.5 rounded-sm" style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--text-muted)',
              fontSize: '8px',
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Metadata strip */}
        <div className="flex justify-between text-xs font-mono" style={{ color: 'var(--text-muted)', fontSize: '8px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '6px' }}>
          <span>{project.lines.toLocaleString()} LOC</span>
          <span>SEC-{project.clearance}</span>
        </div>
      </div>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}06, transparent 60%)` }} />
    </motion.div>
  );
}

export default function MemoryArchive() {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const handleOpenCard = (p) => {
    setSelected(p);
    setActiveTab('overview');
  };

  return (
    <section className="min-h-screen px-6 py-12 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: 'var(--purple)' }} />
          <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--purple)' }}>
            CLASSIFIED MEMORY ARCHIVE / SECTOR 7-ALPHA
          </span>
        </div>
        <h2 className="font-display font-black mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text-primary)' }}>
          MEMORY<span style={{ color: 'var(--purple)', textShadow: '0 0 20px var(--purple)' }}> ARCHIVE</span>
        </h2>
        <p className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
          {PROJECTS.length} encrypted production nodes verified. Select a record to decrypt structural metrics and live logs.
        </p>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <ProjectCard
              project={p}
              onClick={handleOpenCard}
              isActive={selected?.id === p.id}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Expanded Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="glass-panel rounded-lg p-6 md:p-8 max-w-2xl w-full relative"
              style={{ border: `1px solid ${selected.color}40`, boxShadow: `0 0 30px ${selected.color}15` }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 font-mono text-xs px-2 py-1 rounded transition-colors hover:text-white"
                style={{ color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                [ESC]
              </button>

              {/* Classification Header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-4xl" style={{ color: selected.color, textShadow: `0 0 20px ${selected.color}` }}>
                  {selected.icon}
                </span>
                <div>
                  <span className="font-mono text-xs block mb-1" style={{ color: classColor[selected.classification] }}>
                    ⚠ {selected.classification} — {selected.id}
                  </span>
                  <h3 className="font-display text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {selected.title}
                  </h3>
                </div>
              </div>

              {/* Modal Tabs */}
              <div className="flex border-b border-white/5 mb-6 gap-2">
                {[
                  { id: 'overview', label: 'OVERVIEW' },
                  { id: 'features', label: 'KEY FEATURES' },
                  { id: 'impact', label: 'IMPACT & INNOVATION' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="font-mono text-xs px-4 py-2 border-b-2 transition-all"
                    style={{
                      borderColor: activeTab === tab.id ? selected.color : 'transparent',
                      color: activeTab === tab.id ? 'var(--text-primary)' : 'var(--text-muted)',
                      textShadow: activeTab === tab.id ? `0 0 10px ${selected.color}40` : 'none',
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="min-h-[220px] mb-6">
                {activeTab === 'overview' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <p className="font-mono text-xs text-[var(--cyan)]" style={{ color: selected.color }}>
                      {selected.tagline}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {selected.overview}
                    </p>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {[
                        { label: 'LINES OF CODE', val: selected.lines.toLocaleString() },
                        { label: 'COMMITS LOGGED', val: selected.commits },
                        { label: 'SEC CLEARANCE', val: `LVL-${selected.clearance}` },
                      ].map(({ label, val }) => (
                        <div key={label} className="cyber-card p-3 text-center" style={{ background: 'rgba(255,255,255,0.01)' }}>
                          <div className="font-display text-lg font-bold mb-0.5" style={{ color: selected.color }}>{val}</div>
                          <div className="font-mono text-xs" style={{ color: 'var(--text-muted)', fontSize: '8px' }}>{label}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'features' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                    <span className="font-mono text-xs block text-white/40">AUTOMATED CORE CAPABILITIES:</span>
                    <div className="space-y-2">
                      {selected.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <span className="font-mono text-sm leading-none mt-0.5" style={{ color: selected.color }}>✓</span>
                          <span className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'impact' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <span className="font-mono text-xs block text-white/40">BUSINESS OUTCOMES:</span>
                      <div className="space-y-2">
                        {selected.impact.map((imp, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="font-mono text-xs mt-0.5" style={{ color: selected.color }}>⬢</span>
                            <span className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{imp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <span className="font-mono text-xs block text-white/40">TECHNICAL INNOVATIONS:</span>
                      <div className="space-y-2">
                        {selected.innovations.map((inn, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="font-mono text-xs mt-0.5" style={{ color: 'var(--purple)' }}>⚡</span>
                            <span className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{inn}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Tech Stack List */}
              <div className="mb-6 pt-4 border-t border-white/5">
                <span className="font-mono text-[9px] mb-2 block" style={{ color: 'var(--text-muted)' }}>INTEGRATION STACK:</span>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map(t => (
                    <span key={t} className="font-mono text-[10px] px-2.5 py-0.5 rounded-sm" style={{
                      border: `1px solid ${selected.color}40`,
                      color: selected.color,
                      background: `${selected.color}05`,
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse-cyan" style={{ background: selected.color, boxShadow: `0 0 6px ${selected.color}` }} />
                  <span className="font-mono text-xs" style={{ color: selected.color, fontSize: '10px' }}>
                    NODE STABLE
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber flex items-center gap-2 cursor-pointer font-bold"
                    style={{
                      borderColor: selected.color,
                      color: selected.color,
                      padding: '8px 16px',
                      fontSize: '11px'
                    }}
                  >
                    <span>LAUNCH DEMO 🔗</span>
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="btn-ghost"
                    style={{ padding: '8px 16px', fontSize: '11px' }}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
