"use client";
import Image from "next/image";

export default function Education() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col items-center justify-center py-16">
      
      {/* Top Section - Funky Text & Image */}
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        
        {/* Left Side - Funky Text */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl font-bold mb-4">Education 🎓</h2>
          <p className="text-2xl text-gray-700">
            My Qualifications and Certifications <br />
            Here's what you need to know about my academic background 🙃
          </p>
        </div>

        {/* Right Side - Convocation Cap Image */}
        <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
          <Image
            src="/hat.png"
            alt="Convocation Cap"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>

      {/* University Card */}
      <div className="container mx-auto px-6 lg:px-20 mt-12">
        <div className="bg-gray-100 text-black p-8 rounded-xl shadow-lg border border-gray-300">
          <h3 className="text-4xl font-semibold mb-3">
            KIET University of Sciences and Technology, Karachi
          </h3>
          <h4 className="text-2xl text-gray-600 mb-4">Bachelor's in Cyber Security</h4>

          {/* Bullet Points */}
          <ul className="space-y-4 text-lg text-gray-800">
            <li>⚡ Gained extensive knowledge through rigorous CS courses like Data Structures, Algorithms, DBMS, OS, and Machine Learning.</li>
            <li>⚡ Explored the software development cycle with courses like Software Requirements Engineering, Software Design & Architecture.</li>
            <li>⚡ Learned MERN Stack Development and deep-dived into the www world :)</li>
            <li>⚡ The supportive environment at KIET helped in personal growth, fostering diversity and confidence.</li>
            <li>⚡ Managed and led tech communities like HackClub KIET, GDSC, IEEE-KIET, and KIET Media Club, making a mark in the ecosystem.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
