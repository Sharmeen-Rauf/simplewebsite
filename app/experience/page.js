"use client";
import React, { useState } from "react";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer (Teacher)",
      company: "Shamsi School of Professional Education",
      period: "August 2023 - Present",
      location: "Karachi, Pakistan",
      points: [
        "Delivered in-depth instruction on modern web technologies including React.",
        "Demonstrated expertise in industry-standard tools like Git and Webpack.",
        "Designed comprehensive, hands-on courses adapted for various skill levels.",
        "Developed modular and reusable components with Vue.js and TypeScript."
      ]
    },
    {
      role: "Full Stack Software Engineer",
      company: "Cowlar Design Studio",
      period: "February 2024 - August 2024",
      location: "Islamabad, Pakistan",
      points: [
        "Developing AI-driven retail products with Vue.js, React.js, and TypeScript.",
        "Writing complex database queries and optimizing APIs.",
        "Implementing RESTful APIs with Node.js and Express.js."
      ]
    },
    {
      role: "Python AI & Web Developer",
      company: "Shamsi School of Professional Education",
      period: "June 2023 - August 2023",
      location: "Karachi, Pakistan",
      points: [
        "Introduced kids to Python and AI fundamentals through engaging lessons.",
        "Led interactive coding activities and AI projects.",
        "Developed flexible programming lessons for different learning speeds."
      ]
    },
    {
      role: "Junior Web Developer",
      company: "Waszaf Immigration Consultant",
      period: "January 2022 - January 2023",
      location: "Karachi, Pakistan",
      points: [
        "Worked on frontend for in-house HR automation projects.",
        "Created UI screens and handled client-side logic with Bootstrap and JS.",
        "Wrote reusable React components using Ant Design."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16 animate-fade-in">
          <div className="relative w-64 h-64 bg-gradient-to-br from-green-900 to-black rounded-lg overflow-hidden shadow-2xl group">
             <Image 
                src="/experience.png" 
                alt="Experience" 
                fill 
                className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
             />
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-spotify-light-gray mb-2 block">Professional Career</span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">Experience</h1>
            <p className="text-xl text-spotify-light-gray max-w-2xl">
              Building scalable applications and fostering tech communities. 
              My journey from junior dev to full-stack engineer and educator.
            </p>
          </div>
        </div>

        {/* Experience List (Playlist Table Style) */}
        <div className="spotify-card rounded-2xl border border-white/5 overflow-hidden">
          <div className="grid grid-cols-[auto_1fr_auto] gap-4 p-4 border-b border-white/10 text-spotify-light-gray text-xs font-bold uppercase tracking-widest">
            <div className="w-8 text-center">#</div>
            <div>Role & Company</div>
            <div className="hidden md:block">Duration</div>
          </div>
          
          <div className="divide-y divide-white/5">
            {experiences.map((exp, i) => (
              <div key={i} className="group hover:bg-white/5 transition-colors p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-start">
                <div className="w-8 text-center text-spotify-light-gray font-medium pt-1">{i + 1}</div>
                <div className="space-y-2">
                  <h3 className="text-white font-bold text-lg group-hover:text-spotify-green transition-colors">{exp.role}</h3>
                  <p className="text-spotify-light-gray text-sm font-medium">{exp.company} • {exp.location}</p>
                  <ul className="space-y-2 pt-2">
                    {exp.points.map((p, pi) => (
                      <li key={pi} className="text-spotify-light-gray text-sm flex gap-2">
                        <span className="text-spotify-green">▹</span> {p}
                      </li>
                    ))}
                  </ul>
                  <div className="md:hidden pt-2 text-xs font-bold text-spotify-light-gray italic">
                    {exp.period}
                  </div>
                </div>
                <div className="hidden md:block text-spotify-light-gray text-sm font-medium pt-1">
                  {exp.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

