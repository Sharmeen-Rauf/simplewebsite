"use client";
import Image from "next/image";

export default function Education() {
  return (
    <div className="min-h-screen bg-black text-white font-sans pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black mb-4">Education</h1>
            <p className="text-xl text-spotify-light-gray font-medium">
              Academic background and professional certifications.
            </p>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 opacity-80">
            <Image
              src="/hat.png"
              alt="Education"
              fill
              className="object-contain filter drop-shadow-[0_0_20px_rgba(29,185,84,0.3)]"
            />
          </div>
        </div>

        {/* University Section (Playlist Style) */}
        <div className="spotify-card rounded-2xl overflow-hidden border border-white/5 p-8 md:p-12 transition-all hover:border-white/10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-spotify-green to-blue-900 rounded-lg flex items-center justify-center text-8xl shadow-2xl">
              🎓
            </div>
            <div className="w-full md:w-2/3">
              <span className="text-spotify-green font-bold text-sm uppercase tracking-widest mb-2 block">Bachelor&apos;s Degree</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">DHA Suffah University</h2>
              <p className="text-2xl text-spotify-light-gray mb-8">Bachelor&apos;s in Cyber Security</p>
              
              <div className="space-y-6 text-spotify-light-gray">
                {[
                  "Gained extensive knowledge through rigorous CS courses like Data Structures, Algorithms, DBMS, OS, and Machine Learning.",
                  "Explored the software development cycle with courses like Software Requirements Engineering, Software Design & Architecture.",
                  "Learned MERN Stack Development and deep-dived into the modern web ecosystem.",
                  "Active participation in tech communities, fostering diversity and leadership skills.",
                  "Led tech communities like HackClub, GDSC, and IEEE, making a significant impact in the local ecosystem.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-spotify-green mt-1">⚡</span>
                    <p className="text-lg leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
