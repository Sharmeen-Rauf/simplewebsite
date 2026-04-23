"use client";
import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white font-sans pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 animate-fade-in">
          <span className="text-spotify-green font-bold text-sm uppercase tracking-widest mb-2 block">Our Story</span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">About Me</h1>
        </header>
        
        <main className="space-y-12">
          <section className="spotify-card p-8 md:p-12 rounded-3xl border border-white/5">
            <h2 className="text-3xl font-bold mb-6">The Journey</h2>
            <p className="text-xl text-spotify-light-gray leading-relaxed mb-6">
              I am a passionate Full-stack Developer (MERN/MEVN) and DevOps enthusiast dedicated to building high-performance, scalable web applications.
            </p>
            <p className="text-xl text-spotify-light-gray leading-relaxed">
              With a background in Cyber Security from DHA Suffah University, I bring a security-first mindset to every project I undertake, ensuring that performance and safety go hand-in-hand.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-spotify-gray to-black p-8 rounded-2xl border border-white/5">
              <h3 className="text-spotify-green font-bold mb-4">MISSION</h3>
              <p className="text-spotify-light-gray">To create digital experiences that are not only functional but also visually stunning and intuitive.</p>
            </div>
            <div className="bg-gradient-to-br from-spotify-gray to-black p-8 rounded-2xl border border-white/5">
              <h3 className="text-blue-400 font-bold mb-4">VISION</h3>
              <p className="text-spotify-light-gray">Bridging the gap between complex backend systems and seamless frontend interfaces.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

