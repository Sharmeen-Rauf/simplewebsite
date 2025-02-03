"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 flex items-center justify-between text-black">
        {/* Left Side (Text and Heading) */}
        <div className="lg:w-1/2 pl-6 text-left ml-16">
          <h1 className="text-5xl font-extrabold mb-4 ">Wassup! This is Sharmeen !!</h1>
          <p className="text-2xl mb-8 font-bold">A Full-stack developer (MERN/MEVN) 💻 - DevOps and Cloud Enthusiast ☁️ - Problem Solver 🤔</p>
        </div>
        
        {/* Right Side (Image) */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-52 h-52 bg-gray-200 rounded-full shadow-2xl overflow-hidden flex justify-center items-center mb-8">
            <Image
              src="/WhatsApp Image 2025-02-03 at 3.31.54 PM.jpeg"
              alt="Sharmeen's Image"
              width={202}
              height={192}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="about" className="container mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">What I Do?</h2>
        <p className="text-xl text-gray-700 mb-8">I love to code for contract-based projects and help companies expand their businesses.🤜🤛</p>

        {/* Tech Expertise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 transform hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Full-stack Web Development</h3>
            <p className="text-gray-700 text-left">⚡ Developing responsive single-page web applications using React.js, Next.js, Vue3.js, Redux.js, TailwindCSS, and more.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 transform hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Back-end Development</h3>
            <p className="text-gray-700 text-left">⚡ Creating secure and fast backends with Node.js, Express.js, and databases like MongoDB, MySQL, PostgreSQL.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 transform hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">TypeScript Enthusiast</h3>
            <p className="text-gray-700 text-left">⚡ Using TypeScript to build scalable, maintainable, and high-quality applications for both front-end and back-end.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 transform hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">API Development</h3>
            <p className="text-gray-700 text-left">⚡ Developing and consuming RESTful APIs using modern programming practices and ensuring smooth integrations.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 transform hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Testing and CI/CD</h3>
            <p className="text-gray-700 text-left">⚡ Writing unit and e2e tests with Jest and implementing CI/CD pipelines with GitHub Actions and GitLab CI/CD.</p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 transform hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Collaboration Tools</h3>
            <p className="text-gray-700 text-left">⚡ Using Docker, Jira, Figma, and other tools to ensure smooth collaboration with cross-functional teams.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}
