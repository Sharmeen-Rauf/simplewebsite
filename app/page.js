"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-spotify-green selection:text-black">
      {/* Hero Section (Artist Page Style) */}
      <section className="relative h-[70vh] flex items-end px-6 md:px-12 pb-12 overflow-hidden">
        {/* Background Gradient & Image */}
        <div className="absolute inset-0 bg-gradient-to-b from-spotify-green/20 to-black z-0"></div>
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-50 md:opacity-80">
           <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/50 to-black z-10"></div>
           <Image
              src="/WhatsApp Image 2025-02-03 at 3.31.54 PM.jpeg"
              alt="Sharmeen"
              fill
              className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
           />
        </div>

        <div className="relative z-20 max-w-4xl animate-fade-in">
          <div className="flex items-center space-x-2 mb-4">
            <span className="p-1 bg-blue-500 rounded-full text-[10px] text-white">✓</span>
            <span className="text-xs font-bold uppercase tracking-widest text-spotify-light-gray">Verified Developer</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            Sharmeen Rauf
          </h1>
          <p className="text-xl md:text-2xl text-spotify-light-gray mb-8 max-w-2xl font-medium leading-relaxed">
            Full-stack Developer <span className="text-white">●</span> DevOps Enthusiast <span className="text-white">●</span> Problem Solver
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-spotify-green text-black font-bold rounded-full hover:scale-105 transition-transform">
              See Projects
            </button>
            <button className="px-8 py-3 border border-spotify-light-gray text-white font-bold rounded-full hover:border-white transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="px-6 md:px-12 py-16 bg-gradient-to-b from-black/50 to-black">
        {/* What I Do Section (Albums/Playlists Style) */}
        <section id="about" className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold hover:underline cursor-pointer">Popular Skills</h2>
            <span className="text-sm font-bold text-spotify-light-gray hover:underline cursor-pointer">Show all</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { title: "Full-stack Web", desc: "React, Next.js, Vue", icon: "🌐" },
              { title: "Back-end Dev", desc: "Node.js, Express, DBs", icon: "⚙️" },
              { title: "TypeScript", desc: "Scalable Apps", icon: "🟦" },
              { title: "API Design", desc: "REST & Integrations", icon: "🔌" },
              { title: "Testing/CI-CD", desc: "Jest, GitHub Actions", icon: "🧪" },
              { title: "Collaboration", desc: "Docker, Jira, Figma", icon: "👥" },
            ].map((skill, i) => (
              <div 
                key={i} 
                className="spotify-card p-4 rounded-lg group cursor-pointer transition-all duration-300 hover:shadow-2xl"
              >
                <div className="aspect-square bg-spotify-gray rounded-md mb-4 flex items-center justify-center text-4xl shadow-lg relative overflow-hidden">
                  {skill.icon}
                  <div className="absolute bottom-2 right-2 w-10 h-10 bg-spotify-green rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <span className="text-black text-xs">▶</span>
                  </div>
                </div>
                <h3 className="font-bold text-sm mb-1 truncate">{skill.title}</h3>
                <p className="text-xs text-spotify-light-gray line-clamp-2">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Section */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-spotify-gray to-black p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <h3 className="text-spotify-green font-bold text-sm mb-2">LATEST PROJECT</h3>
            <h2 className="text-3xl font-bold mb-4">Spotify UI Modernization</h2>
            <p className="text-spotify-light-gray mb-6">
              Currently working on a full-scale redesign of developer portfolios to match the sleek aesthetic of modern streaming platforms.
            </p>
            <Link href="/projects" className="text-white font-bold hover:underline">Explore all projects →</Link>
          </div>
          
          <div className="bg-gradient-to-br from-spotify-gray to-black p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <h3 className="text-blue-400 font-bold text-sm mb-2">EDUCATION</h3>
            <h2 className="text-3xl font-bold mb-4">DHA Suffah University</h2>
            <p className="text-spotify-light-gray mb-6">
              Pursuing excellence in Cyber Security and Software Engineering at one of the leading institutions.
            </p>
            <Link href="/education" className="text-white font-bold hover:underline">Academic Details →</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
