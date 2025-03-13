"use client"
import Link from "next/link";
import { useState } from "react"; // For handling mobile menu toggle

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
      <header className="left-0 right-0 p-4 md:p-6 flex justify-between items-center z-10">
        {/* Logo */}
        <h1 className="text-2xl md:text-4xl font-bold text-red-400 font-[cursive]">
          &lt;Sharmeen<span className="text-gray-400">/</span>&gt;
        </h1>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8 absolute md:static bg-black w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0`}
        >
          <Link
            href="/"
            className="block text-xl text-white hover:text-gray-400 transition-all duration-300 py-2 md:py-0"
          >
            Home
          </Link>
          <Link
            href="education"
            className="block text-xl text-white hover:text-gray-400 transition-all duration-300 py-2 md:py-0"
          >
            Education
          </Link>
          <Link
            href="experience"
            className="block text-xl text-white hover:text-gray-400 transition-all duration-300 py-2 md:py-0"
          >
            Experience
          </Link>
          <Link
            href="projects"
            className="block text-xl text-white hover:text-gray-400 transition-all duration-300 py-2 md:py-0"
          >
            Projects
          </Link>
          <Link
            href="contactus"
            className="block text-xl text-white hover:text-gray-400 transition-all duration-300 py-2 md:py-0"
          >
            Contact Me
          </Link>
        </nav>
      </header>
    </div>
  );
}
