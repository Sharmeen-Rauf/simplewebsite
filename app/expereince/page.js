"use client";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col items-center justify-center py-16">
      
      {/* Top Section - Funky Text & Image */}
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        
        {/* Left Side - Funky Text */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl font-bold mb-4">Experience 💼</h2>
          <p className="text-2xl text-gray-700">
            Work, Internship, and Volunteership <br />
            I'm a passionate software engineer who loves crafting creative solutions with code. My main area of expertise revolves around building scalable applications using the MERN stack. Additionally, I have a strong enthusiasm for fostering tech communities and actively engage in various tech events.  
            Guiding and supporting aspiring developers as they begin their career paths brings me immense joy because we all know the struggle of finding the missing semicolon. 😉
          </p>
        </div>

        {/* Right Side - Experience Image */}
        <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
          <Image
            src="/experience.png"
            alt="Work Experience"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>

      {/* Experience Cards */}
      <div className="container mx-auto px-6 lg:px-20 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Work Experience */}
        <div className="bg-gray-100 text-black p-6 rounded-xl shadow-lg border border-gray-300">
          <h3 className="text-2xl font-semibold mb-2">Software Engineer Intern</h3>
          <h4 className="text-xl text-gray-600 mb-4">XYZ Tech Company</h4>
          <p className="text-gray-800">
            ⚡ Built and optimized full-stack applications using the MERN stack.  
            ⚡ Developed scalable APIs and improved backend performance.  
            ⚡ Collaborated with a team to implement best software development practices.
          </p>
        </div>

        {/* Internship */}
        <div className="bg-gray-100 text-black p-6 rounded-xl shadow-lg border border-gray-300">
          <h3 className="text-2xl font-semibold mb-2">Web Development Intern</h3>
          <h4 className="text-xl text-gray-600 mb-4">ABC Solutions</h4>
          <p className="text-gray-800">
            ⚡ Designed and implemented UI components using React.js.  
            ⚡ Improved website performance by optimizing frontend assets.  
            ⚡ Worked on integrating REST APIs for dynamic web applications.
          </p>
        </div>

        {/* Volunteership */}
        <div className="bg-gray-100 text-black p-6 rounded-xl shadow-lg border border-gray-300">
          <h3 className="text-2xl font-semibold mb-2">Community Leader</h3>
          <h4 className="text-xl text-gray-600 mb-4">Google Developer Student Clubs</h4>
          <p className="text-gray-800">
            ⚡ Organized tech workshops, hackathons, and mentorship programs.  
            ⚡ Helped students build their first open-source projects.  
            ⚡ Networked with industry professionals and guest speakers.
          </p>
        </div>

      </div>
    </div>
  );
}
