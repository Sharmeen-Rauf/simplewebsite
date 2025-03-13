"use client";
import Image from "next/image";

     import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import icons



export default function Experience() {

    const [isVisible, setIsVisible] = useState(false);

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
     


 
    <div className="container mx-auto p-6">
      {/* Toggle Button */}
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg cursor-pointer" 
           onClick={() => setIsVisible(!isVisible)}>
        <h2 className="text-xl font-bold">Work</h2>
        {isVisible ? <FaMinus size={20} /> : <FaPlus size={20} />}
      </div>

      {/* Work Experience Cards (Conditional Rendering) */}
      {isVisible && (
        <div className="mt-4 space-y-4">
          {/* Card 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">Associate Software Engineer</h3>
            <p className="text-gray-500">RipeSeed.io</p>
            <p className="text-gray-400">August 2024 - Present | Lahore, Pakistan</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Developing scalable web applications using React.js, Next.js, Node.js, and TypeScript.</li>
              <li>Implementing secure cloud-native solutions on AWS.</li>
              <li>Building RESTful APIs and microservices.</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">Full Stack Software Engineer</h3>
            <p className="text-gray-500">Cowlar Design Studio</p>
            <p className="text-gray-400">February 2024 - August 2024 | Islamabad, Pakistan</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Developing AI-driven retail products with Vue.js, React.js, and TypeScript.</li>
              <li>Writing complex database queries and optimizing APIs.</li>
              <li>Implementing RESTful APIs with Node.js and Express.js.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

