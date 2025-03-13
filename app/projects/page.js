"use client";
import Image from "next/image";
import { useState } from 'react';


export default function Projects() {
      const [showProjects, setShowProjects] = useState(false);
      const projects = [
        {
          title: "Currency Converter",
          description:
            "A simple currency converter built with React and Tailwind.",
          tech: ["React", "Tailwind"],
          date: "March 2024",
        },
        {
          title: "Background Changer",
          description: "A fun project to change background colors dynamically.",
          tech: ["HTML", "CSS", "JavaScript"],
          date: "January 2024",
        },
        {
          title: "Spotify Clone",
          description:
            "A frontend clone of Spotify using HTML, CSS, and JavaScript.",
          tech: ["HTML", "CSS", "JavaScript"],
          date: "February 2024",
        },
        {
          title: "Responsive Website",
          description:
            "A fully responsive website built using Next.js and Tailwind.",
          tech: ["Next.js", "Tailwind"],
          date: "April 2024",
        },
      ];



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




    <section className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Projects</h2>
          <button
            onClick={() => setShowProjects(!showProjects)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {showProjects ? '-' : '+'}
          </button>
        </div>
        {showProjects && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <p className="text-sm text-gray-500 mt-1">Created in {project.date}</p>
                <div className="flex gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-200 px-3 py-1 text-sm rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );


    </div>
  );
}
