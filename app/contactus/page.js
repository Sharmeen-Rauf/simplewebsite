"use client";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans pt-32 pb-16 px-6 md:px-12 flex items-center justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center spotify-card p-8 md:p-16 rounded-3xl border border-white/5 shadow-2xl">
        {/* Left Side: Illustration */}
        <div className="flex justify-center animate-fade-in">
          <div className="relative w-full aspect-square max-w-sm">
             <div className="absolute inset-0 bg-spotify-green/20 blur-3xl rounded-full"></div>
             <Image 
                src="/chat.png" 
                alt="Contact" 
                fill 
                className="object-contain relative z-10 filter drop-shadow-2xl"
             />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-spotify-green font-bold text-sm uppercase tracking-widest">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter">Let's Connect</h1>
            <p className="text-lg text-spotify-light-gray leading-relaxed">
              I’m practically the social media version of Batman, always lurking
              in the shadows of every platform, ready to swoop in and save the
              day! Whether you need some industry wizardry or a tech talk
              virtuoso, just reach out.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Sharmeen-Rauf/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-spotify-light-gray hover:text-white transition-all hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/sharmeen.rs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-spotify-light-gray hover:text-instagram transition-all hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/sharmeen-rauf-504097269"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-spotify-light-gray hover:text-blue-500 transition-all hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="pt-4">
            <a
              href="mailto:sharmeenpakistan8@gmail.com"
              className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-spotify-green hover:scale-105 transition-all shadow-xl"
            >
              Reach Me via Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

export default Contact;
