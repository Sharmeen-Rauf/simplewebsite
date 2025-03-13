import React from "react";

const Projects = () => {
  return (
    <section className="bg-white py-16 px-8 max-w-7xl mx-auto">
      {/* Grid for SVG and Heading/Description */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side: SVG Illustration */}
        <div>
          {/* Replace with your actual SVG or image */}
          <img
            src="/project.png" // Update with your SVG path
            alt="Projects Illustration"
            className="w-36 h-36"
          />
        </div>

        {/* Right Side: Heading and Description */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
          <p className="mt-4 text-gray-600">
            Explore some of my recent work, where I built scalable and efficient
            web applications using modern technologies like React, Next.js, and
            Node.js.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-xl shadow-lg transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <div className="mt-4 flex space-x-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Spotify Clone",
    description:
      "A music streaming platform built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind", "API"],
  },
  {
    title: "E-Commerce Website",
    description: "An online shopping platform with integrated payment gateway.",
    tech: ["React", "Stripe", "Node.js"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal developer portfolio showcasing projects and skills.",
    tech: ["React", "Framer Motion", "Tailwind"],
  },
  {
    title: "Dev-Portfolio",
    description:
      "An open-source customizable portfolio website for developers to showcase their skills and achievements.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    date: "June 2023",
  },

  {
    title: "Ecommerce Database",
    description:
"The 2nd semester project at kiet aimed to Developed a comprehensive e-commerce shopping database project, including ERD design, queries, subqueries, stored procedures, and DML/DDL commands.",
   tech: ["MySql", "SQLServer", "Database"],
    date: "June 2023",
  },
];

export default Projects;
