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
            I'm a passionate software engineer who loves crafting creative
            solutions with code. My main area of expertise revolves around
            building scalable applications using the MERN stack. Additionally, I
            have a strong enthusiasm for fostering tech communities and actively
            engage in various tech events. Guiding and supporting aspiring
            developers as they begin their career paths brings me immense joy
            because we all know the struggle of finding the missing semicolon.
            😉
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
        <div
          className="flex justify-between items-center bg-gray-100 p-4 rounded-lg cursor-pointer"
          onClick={() => setIsVisible(!isVisible)}
        >
          <h2 className="text-xl font-bold">Work</h2>
          {isVisible ? <FaMinus size={20} /> : <FaPlus size={20} />}
        </div>

        {/* Work Experience Cards (Conditional Rendering) */}
        {isVisible && (
          <div className="mt-4 space-y-4">
            {/* Card 1 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold">
                Frontend Developer (Teacher)
              </h3>
              <p className="text-gray-500">
                {" "}
                Shamsi School of Professional Education
              </p>
              <p className="text-gray-400">
                August 2023 - Present | Karachi, Pakistan
              </p>
              <ul className="list-disc ml-5 text-gray-700">
                <li>
                  Delivered in-depth instruction on modern web technologies,
                  including HTML, CSS, JavaScript, and frameworks like React,
                  enabling students to build responsive and dynamic user
                  interfaces.
                </li>
                <li>
                  Demonstrated expertise in tools such as Git, Webpack, and
                  version control systems, ensuring students are well - versed
                  in industry-standard development environments
                </li>
                <li>
                  Designed and taught comprehensive, hands-on courses, adapting
                  complex frontend concepts to students' varying skill levels,
                  promoting practical mastery of coding best practices.
                </li>
                <li>
                  –Developing modular and reusable frontend components with
                  Vue.js, React.js, and TypeScript to drive UI efficiency and
                  ensure robust product performance.
                </li>
                <li>
                –Implementing RESTful APIs with Node.js and Express.js, using
                Sequelize for MySQL and Mongoose for MongoDB to ensure efficient
                database interactions.
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold">
                Full Stack Software Engineer
              </h3>
              <p className="text-gray-500">Cowlar Design Studio</p>
              <p className="text-gray-400">
                February 2024 - August 2024 | Islamabad, Pakistan
              </p>
              <ul className="list-disc ml-5 text-gray-700">
                <li>
                  Developing AI-driven retail products with Vue.js, React.js,
                  and TypeScript.
                </li>
                <li>Writing complex database queries and optimizing APIs.</li>
                <li>Implementing RESTful APIs with Node.js and Express.js.</li>
              </ul>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold">
                Python AI & Web Developer (Summer Camp)
              </h3>
              <p className="text-gray-500">
                Shamsi School of Professional Education
              </p>
              <p className="text-gray-400">
                June 2023 - August 2023 | Karachi, Pakistan
              </p>
              <ul className="list-disc ml-5 text-gray-700">
                <li>
                  Delivered engaging lessons introducing kids to Python and AI
                  fundamentals, sparking early tech interest.
                </li>
                <li>
                  Led interactive coding activities and AI projects, helping
                  kids apply concepts in practical ways.
                </li>
                <li>
                  Developed flexible programming lessons, adjusting for
                  different learning speeds and ensuring a fun, practical
                  approach to coding.
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold">Junior Web Developer</h3>
              <p className="text-gray-500">Waszaf Immigration Consultant</p>
              <p className="text-gray-400">
                January 2022 - January 2023 | Karachi, Pakistan
              </p>
              <ul className="list-disc ml-5 text-gray-700">
                <li>
                  Worked mainly on the frontend side of the company's inhouse
                  project for helping HRs in generating different letter like
                  offer letters, warning letters etc in bulk.
                </li>
                <li>
                  Using HTML, CSS, Bootstrap and JavaScript, created UI screens
                  and handled the client-side logic.
                </li>
                <li>
                  Wrote reusable React components using React.js, Context API
                  and Ant Design and fixed bugs in the existing code.
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold">
                Full Stack Software Engineer
              </h3>
              <p className="text-gray-500">Cowlar Design Studio</p>
              <p className="text-gray-400">
                February 2024 - August 2024 | Islamabad, Pakistan
              </p>
              <ul className="list-disc ml-5 text-gray-700">
                <li>
                  Developing AI-driven retail products with Vue.js, React.js,
                  and TypeScript.
                </li>
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

