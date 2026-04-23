"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/education", label: "Education" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contactus", label: "Contact Me" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center space-x-2">
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white">
            SHARMEEN<span className="text-spotify-green">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-spotify-light-gray hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contactus"
            className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform duration-200"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-transform duration-500 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-bold text-white hover:text-spotify-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
