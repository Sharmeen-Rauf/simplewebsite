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
    title: 'Peek-A-Booth USA',
    classification: 'TOP SECRET',
    tagline: 'Location-Based Event Rental Platform serving 500+ US Cities',
    description: 'Flagship multi-tenant location-based event rental platform optimized for over 500 US cities with dynamic SEO generation, dynamic routing, and complex booking engines.',
    overview: 'Peek-A-Booth USA is a flagship location-based event rental platform optimized for over 500 cities across the United States. Features include complex dynamic routing, location grids, custom booking carousels, and accordion-style FAQs.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'COMPLETE',
    icon: '🇺🇸',
    color: 'var(--cyan)',
    clearance: 5,
    lines: 15400,
    commits: 320,
    liveUrl: 'https://www.peekaboothusa.com',
    features: [
      '500+ dynamically generated local city landing pages for automated organic SEO expansion',
      'Multi-breakpoint testimonials carousel showing multiple reviews simultaneously',
      'Interactive 360° photo booth and Vogue Magazine box grids with hover scale effects',
      'Advanced multi-field booking engine matching event parameters with real-time package values',
      'Custom styled accordion-based FAQ section with height expand transitions'
    ],
    impact: [
      'Captured major search volumes in local metro markets across 500+ US cities',
      'Automated regional price quoting and tax tiers, eliminating manual calculations',
      'Premium dark UI overlay design enhancing visual credibility and reservation ratios'
    ],
    innovations: [
      'Scalable static site generation (SSG) for 500+ local markets with edge caching',
      'High-performance carousel rendering with custom swipe gestures for mobile viewport',
      'Highly optimized WebP images and dynamic video layouts'
    ]
  },
  {
    id: 'PROJ-005',
    title: 'Peek-A-Booth PK',
    classification: 'CLASSIFIED',
    tagline: 'Premium Photo Booth & Event Rental Experience in Pakistan',
    description: 'Pakistan’s premier photo booth rental service website featuring horizontal logo loops, automated statistic count-ups, and reactive lead calculators.',
    overview: 'Peek-A-Booth PK is Pakistan\'s premier photo booth rental service, featuring animated video backgrounds, automated stats trackers (Events Hosted, Pictures Taken, Cities Covered), infinite loop logo carousels, responsive photo galleries, and real-time validated quote calculators.',
    tech: ['Next.js 14', 'React', 'Tailwind CSS', 'CSS Modules', 'Vercel'],
    status: 'COMPLETE',
    icon: '📸',
    color: 'var(--danger-red)',
    clearance: 4,
    lines: 8400,
    commits: 210,
    liveUrl: 'https://www.peekaboothpk.com',
    features: [
      'Animated video backgrounds and floating sticky communication buttons',
      'Grid layout collections showing detailed packages and options',
      'Infinite-scrolling brand partner logo carousel with pause on hover',
      'Masonry Instagram-style image gallery with interactive lightbox preview',
      'Interactive quote request form with client-side field validation'
    ],
    impact: [
      'Streamlined B2B lead inquiries by presenting visual booths in grids',
      '95% speed index rating on Vercel CDN via lazy-loading and WebP configurations',
      'Automated CRM diagnostic input logs on quote submissions'
    ],
    innovations: [
      'CSS animations for infinite loop brand sliders without JS overhead',
      'Progressive counter script increments numbers from 0 on viewport trigger',
      'Dynamic header opacity shifts on scroll'
    ]
  },
  {
    id: 'PROJ-006',
    title: 'Launch X Digital Agency',
    classification: 'CLASSIFIED',
    tagline: 'High-Impact B2B Digital Agency & Web Design Platform',
    description: 'High-performance B2B digital agency platform designed to showcase marketing services, custom client portals, timelines, and case study grids.',
    overview: 'Launch X is a high-performance B2B digital agency platform designed to showcase marketing services, custom client portals, timelines, and case study grids with subtle micro-animations.',
    tech: ['Next.js 14', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    status: 'COMPLETE',
    icon: '🚀',
    color: 'var(--purple)',
    clearance: 4,
    lines: 9200,
    commits: 245,
    liveUrl: 'https://poweredbylaunchx.com/',
    features: [
      '11+ pages including service sub-pages (Web, SEO, performance marketing, branding)',
      'Hero section with animated abstract shapes (SVG/Spline) and floating CTA elements',
      'Interactive 4-Step Process Timeline with visual connecting paths between steps',
      'Responsive portfolio filtering engine, testimonials carousel, and FAQ accordion',
      'Highly validating Contact forms and dynamic Blog section (3 columns)'
    ],
    impact: [
      'Streamlined client discovery and onboarding process with 12 detailed components',
      'Raised B2B service inquiry rate by presenting structured process workflows',
      'Excellent Google Lighthouse performance indices (95+)'
    ],
    innovations: [
      'Interactive timeline animation components using Framer Motion',
      'Custom responsive masonry layout for case studies and branding sheets',
      'WCAG AA compliant color contrast and structural accessibility features'
    ]
  },
  {
    id: 'PROJ-007',
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
    id: 'PROJ-008',
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
      'Bilingual interface (English + Urdu) celebrating cultural heritage with custom fonts',
      'Chapter-based product showcase catalog (Safha Ba Safha, Naya Baab)',
      'Yaadon ka Sandook (Memories Chest) interactive storytelling gallery experience',
      'Zoomable product detail page with care guides, repairs, and customization cards',
      'Day/Night theme toggle with localStorage theme persistence and smooth transitions'
    ],
    impact: [
      'Unique cultural branding establishing high luxury market placement (PKR 45k - 325k)',
      'Premium dark UI overlay design boosting Average Order Value (AOV)',
      'Fully responsive, immersive mobile-first bilingual experience'
    ],
    innovations: [
      'Premium custom glassmorphic styling and transition system',
      'Highly optimized Next.js Image lazy-loading layouts with blur placeholders',
      'Bilingual layout engine supporting RTL (Urdu) and LTR (English) content directions'
    ]
  },
  {
    id: 'PROJ-009',
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
      'Tour packages showcase (6-8 cards) and destination grid (8-10 cards)',
      'Seasonal filter ("When to go?" - Spring/Summer/Autumn/Winter)',
      'Detailed booking widget tracking travel dates, travelers, and budget ranges',
      'Search and filter bar with auto-populating dropdown suggestions',
      'Google Maps API integration showing destinations, and direct WhatsApp links'
    ],
    impact: [
      'Promoted sustainable and community-engaged local tourism',
      'Boosted local valley economies by linking guides, transport, and hotels',
      'WhatsApp integration dramatically raised quick booking conversions'
    ],
    innovations: [
      'Mobile-first responsive booking form structures',
      'Integrated structured metadata schema for local tour SEO',
      'Dynamic package filtering using React state metrics'
    ]
  },
  {
    id: 'PROJ-010',
    title: 'EscaBiz B2B Platform',
    classification: 'CLASSIFIED',
    tagline: 'Virtual Staff Augmentation & Lead Gen Services',
    description: 'Modern B2B client acquisition platform featuring an interactive 13-component layout, a 7-benefits development grid, Trustpilot validations, and a robust multi-field quote capture system.',
    overview: 'EscaBiz is a premium, data-driven B2B lead generation and virtual staff augmentation platform designed to scale sales outreach, manage CRM flows, and capture prospective clients via optimized frontend conversion loops.',
    tech: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    status: 'COMPLETE',
    icon: '💼',
    color: 'var(--purple)',
    clearance: 4,
    lines: 14500,
    commits: 390,
    liveUrl: 'https://www.escabiz.com/',
    features: [
      'Sticky navigation header with fully responsive mobile menu overrides',
      'Hero banner with colleagues-working overlay and semi-transparent dark/blue gradient',
      '3-column grid mapping core value propositions (data targeting, custom outreach, relationship building)',
      'Lead development grid containing confident.jpg image and alternating CTAs',
      'B2B development benefits section arranged in a 7-benefits modular responsive grid',
      '6 service exploration cards highlighting appointment setting, VSAs, and LinkedIn automation',
      'Interactive Trustpilot testimonial cards (Ashlee John, Michael Chen, Sarah Williams)',
      '9-field Quote request form featuring service drop-down, discovery selectors, and SMS consent toggles',
      'Geographical contact cards for London, Texas, and Karachi with embedded Google Maps API'
    ],
    impact: [
      '90% sales cost reduction for outsourcing agencies using automated quote-estimate funnels',
      'High conversion metrics driven by mobile-first grids and min 48px touch targets'
    ],
    innovations: [
      'React state hooks for secure multi-field contact form validation and error handling',
      'Infinite-scrolling partner logo carousel utilizing performance-optimized pure CSS animations',
      'Strict WCAG AA color contrast compliance and semantic HTML5 tag hierarchy'
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
            PROJECT LOG / ARCHIVES
          </span>
        </div>
        <h2 className="font-display font-black mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text-primary)' }}>
          PROJECT<span style={{ color: 'var(--purple)', textShadow: '0 0 20px var(--purple)' }}> ARCHIVES</span>
        </h2>
        <p className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
          {PROJECTS.length} active production nodes verified. Select a record to decrypt structural metrics and live logs.
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

      {/* HUD Global Patterns & Tech Analytics Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 p-6 rounded-lg glass-panel relative overflow-hidden"
        style={{ border: '1px solid rgba(0, 240, 255, 0.12)', background: 'rgba(5, 5, 8, 0.85)' }}
      >
        {/* Subtle scanning bar */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-pulse-cyan" />
        
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-6 bg-cyan-400" />
          <h3 className="font-display text-base font-bold tracking-wider" style={{ color: 'var(--text-primary)' }}>
            PORTFOLIO OS — SHARED FRONTEND DIAGNOSTICS & ENGINE SPECS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Col 1 */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-white/40 block">10 COMMON COMPONENTS:</span>
            <div className="space-y-1.5">
              {[
                'Sticky Header & Responsive Menu',
                'Video & Parallax Hero Overlay',
                'Large Counter Metric Cards',
                'Multi-Breakpoint Sliders',
                'Responsive Card Grids (4→2→1)',
                'Auto-Rotating Testimonials',
                'Validated Lead Capture Forms',
                'Smooth FAQ Accordion Boxes',
                'Multi-Column Dynamic Footer',
                'Glassmorphic Overlay Modals'
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-[9px] text-[var(--cyan)]">⬢</span>
                  <span className="font-mono text-xs text-[var(--text-secondary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-white/40 block">HUD ANIMATION MATRIX:</span>
            <div className="space-y-1.5">
              {[
                'AOS (Animate on Scroll) hooks',
                'Easing counter increment algorithms',
                'Hover triggers (scale, shadow, text)',
                'Parallax viewport dividers',
                'Stagger sequences with custom delays',
                'Dynamic SVG path morph animations',
                'Framer Motion layout animations',
                'Canvas network node rendering'
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-[9px] text-purple-400">⚡</span>
                  <span className="font-mono text-xs text-[var(--text-secondary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-white/40 block">PERFORMANCE SUITE:</span>
            <div className="space-y-1.5">
              {[
                'Responsive image srcsets',
                'Progressive WebP encoding',
                'Lazy-load attributes (loading="lazy")',
                'BlurDataURL image placeholders',
                'Route-based code splitting chunks',
                'Tailwind purger (removing unused CSS)',
                'Edge caching & stale-while-revalidate',
                'Variable font subsets preloading'
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-[9px] text-green-400">✓</span>
                  <span className="font-mono text-xs text-[var(--text-secondary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-white/40 block">PRODUCTION STANDARDS:</span>
            <div className="space-y-1.5">
              {[
                'Min 48px tap targets for mobile layout',
                'WCAG AA standard contrast ratios',
                'ARIA labels & structural semantic markup',
                'Strict key-value column mapping engines',
                'Fuzzy duplicate record merges (60 FPS)',
                'Resilient RLS Postgres security models',
                'Self-healing DB schema fallbacks',
                'Real-time WebSocket subscriptions'
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-[9px] text-orange-400">◈</span>
                  <span className="font-mono text-xs text-[var(--text-secondary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
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
                    <span className="font-mono text-xs block text-white/40">CORE CAPABILITIES & LAYOUTS:</span>
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
