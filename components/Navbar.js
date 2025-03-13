"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-white font-sans">
      <header className="p-4 md:p-6 flex justify-between items-center z-10 relative">
        {/* Logo */}
        <h1 className="text-2xl md:text-4xl font-bold text-red-400 font-[cursive]">
          &lt;Sharmeen<span className="text-gray-400">/</span>&gt;
        </h1>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:relative top-16 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row md:items-center md:space-x-8 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/education", label: "Education" },
            { href: "/experience", label: "Experience" },
            { href: "/projects", label: "Projects" },
            { href: "/contactus", label: "Contact Me" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-xl text-white hover:text-gray-400 transition-all duration-300 py-2 md:py-0 text-center md:text-left"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}
