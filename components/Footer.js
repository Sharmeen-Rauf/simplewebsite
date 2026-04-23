"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-white font-black text-2xl tracking-tighter">
          SHARMEEN<span className="text-spotify-green">.</span>
        </div>
        <div className="text-spotify-light-gray text-sm font-medium">
          © {new Date().getFullYear()} Sharmeen Rauf. All rights reserved.
        </div>
        <div className="flex gap-6 text-spotify-light-gray text-xl">
          <a href="#" className="hover:text-white transition-colors">🔗</a>
          <a href="#" className="hover:text-white transition-colors">🐙</a>
          <a href="#" className="hover:text-white transition-colors">💼</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
