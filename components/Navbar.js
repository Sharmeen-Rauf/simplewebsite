import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
      <header className="left-0 right-0 p-6 flex justify-between items-center z-10">
        
        {/* Logo */}
        <h1 className="text-4xl font-bold text-red-400 font-[cursive]">
          &lt;Sharmeen<span className="text-gray-400">/</span>&gt;
        </h1>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8">
          <Link href="/" className="text-xl text-white hover:text-gray-400 transition-all duration-300">Home</Link>
          <Link href="education" className="text-xl text-white hover:text-gray-400 transition-all duration-300">Education</Link>
          <Link href="expereince" className="text-xl text-white hover:text-gray-400 transition-all duration-300">Experience</Link>
          <Link href="projects" className="text-xl text-white hover:text-gray-400 transition-all duration-300">Projects</Link>
          <Link href="contactus" className="text-xl text-white hover:text-gray-400 transition-all duration-300">Contact Me</Link>
        </nav>
      </header>
    </div>
  );
}
