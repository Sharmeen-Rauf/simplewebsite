/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#00f0ff',
        'cyber-purple': '#b026ff',
        'electric-blue': '#0066ff',
        'neon-green': '#00ff88',
        'warning-amber': '#ff9500',
        'danger-red': '#ff2244',
        'bg-void': '#000000',
        'bg-core': '#050508',
        'bg-surface': '#0a0a10',
        'bg-panel': '#0d0d16',
        'spotify-green': '#1DB954',
        'spotify-black': '#121212',
        'spotify-dark-gray': '#181818',
        'spotify-gray': '#282828',
        'spotify-light-gray': '#b3b3b3',
      },
      fontFamily: {
        display: ['Orbitron', 'monospace'],
        mono: ['Share Tech Mono', 'Courier New', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-cyan': 'pulse-cyan 2s ease-in-out infinite',
        'pulse-purple': 'pulse-purple 2s ease-in-out infinite',
        'neural-rotate': 'neural-rotate 20s linear infinite',
        'neural-counter': 'neural-counter-rotate 15s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'flicker': 'flicker 4s ease-in-out infinite',
        'radar': 'radar-sweep 4s linear infinite',
        'cassette': 'cassette-spin 2s linear infinite',
        'scan': 'scan-line 3s linear infinite',
        'glitch-text': 'glitch-text 5s ease-in-out infinite',
        'terminal-glow': 'terminal-glow 2s ease-in-out infinite',
        'data-stream': 'data-stream 8s linear infinite',
        'vhs': 'vhs-glitch 10s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-scale': 'fadeInScale 0.6s ease-out forwards',
        'border-flow': 'border-flow 3s ease infinite',
      },
      backdropBlur: {
        '4xl': '72px',
      },
      boxShadow: {
        'cyber-cyan': '0 0 20px rgba(0, 240, 255, 0.4), 0 0 60px rgba(0, 240, 255, 0.15)',
        'cyber-purple': '0 0 20px rgba(176, 38, 255, 0.4), 0 0 60px rgba(176, 38, 255, 0.15)',
        'cyber-green': '0 0 20px rgba(0, 255, 136, 0.4), 0 0 60px rgba(0, 255, 136, 0.15)',
        'neon-sm': '0 0 8px rgba(0, 240, 255, 0.5)',
        'inner-glow': 'inset 0 0 30px rgba(0, 240, 255, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config;
