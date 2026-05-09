'use client';

export default function CrtOverlay() {
  return (
    <>
      {/* Primary scanline grid */}
      <div className="crt-overlay" aria-hidden="true" />
      {/* Vignette darkening toward edges */}
      <div className="crt-vignette" aria-hidden="true" />
      {/* Moving scan line beam */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(transparent, rgba(0, 240, 255, 0.06), transparent)',
          animation: 'scan-line 6s linear infinite',
          zIndex: 9997,
          pointerEvents: 'none',
        }}
      />
    </>
  );
}
