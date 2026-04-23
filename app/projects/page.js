"use client";
import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Spotify Clone",
    description: "A music streaming platform built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind", "API"],
    image: "🎵"
  },
  {
    title: "E-Commerce Website",
    description: "An online shopping platform with integrated payment gateway.",
    tech: ["React", "Stripe", "Node.js"],
    image: "🛒"
  },
  {
    title: "Portfolio Website",
    description: "A personal developer portfolio showcasing projects and skills.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image: "📁"
  },
  {
    title: "Dev-Portfolio",
    description: "An open-source customizable portfolio website for developers.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image: "💻"
  },
  {
    title: "Ecommerce Database",
    description: "Comprehensive e-commerce shopping database project with ERD design and complex queries.",
    tech: ["MySql", "SQLServer", "Database"],
    image: "🗄️"
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end gap-8 mb-12 animate-fade-in">
          <div className="w-48 h-48 md:w-60 md:h-60 bg-gradient-to-br from-purple-700 to-blue-900 shadow-2xl flex items-center justify-center text-8xl rounded-lg">
            🚀
          </div>
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-widest text-spotify-light-gray mb-2 block">Public Playlist</span>
            <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter">My Projects</h1>
            <div className="flex items-center gap-2 text-sm font-bold text-spotify-light-gray">
              <span className="text-white">Sharmeen Rauf</span>
              <span>•</span>
              <span>{projects.length} projects</span>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center gap-8 mb-8">
          <div className="w-14 h-14 bg-spotify-green rounded-full flex items-center justify-center text-black text-xl hover:scale-105 transition-transform cursor-pointer shadow-lg">
            ▶
          </div>
          <div className="text-spotify-light-gray text-2xl hover:text-white transition-colors cursor-pointer">
            ♡
          </div>
          <div className="text-spotify-light-gray text-2xl hover:text-white transition-colors cursor-pointer">
            ...
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="spotify-card p-4 rounded-lg group cursor-pointer transition-all duration-300 hover:shadow-2xl border border-transparent hover:border-white/5"
            >
              <div className="aspect-square bg-spotify-gray rounded-md mb-4 flex items-center justify-center text-6xl shadow-lg relative overflow-hidden">
                {project.image}
                <div className="absolute bottom-2 right-2 w-10 h-10 bg-spotify-green rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                  <span className="text-black text-xs">▶</span>
                </div>
              </div>
              <h3 className="font-bold text-base mb-1 truncate">{project.title}</h3>
              <p className="text-sm text-spotify-light-gray line-clamp-2 mb-4 h-10">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 2).map((t, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-spotify-light-gray">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
