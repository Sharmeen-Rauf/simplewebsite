import React from 'react'

export default function page() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-green-500 to-teal-600 text-white">
        <header className="p-6">
          <h1 className="text-4xl font-bold text-center">About Us</h1>
        </header>
        <main className="container mx-auto p-4">
          <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg">We are a team of passionate developers creating amazing websites.</p>
          </section>
        </main>
      </div>
    );
  }

