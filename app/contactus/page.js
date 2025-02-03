import React from 'react'

export default function Contact() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <header className="p-6">
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        </header>
        <main className="container mx-auto p-4">
          <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label className="block text-lg mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded text-gray-800"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded text-gray-800"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg mb-2">Message</label>
                <textarea
                  className="w-full p-2 rounded text-gray-800"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200 transition duration-300"
              >
                Submit
              </button>
            </form>
          </section>
        </main>
      </div>
    );
  }
