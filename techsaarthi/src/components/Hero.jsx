import React from 'react'

export const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-24 text-center px-6">
      {/* Badge */}
      <div className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
        Welcome to TechSaarthi
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
        Build your <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Tech 
        </span>{" "}
        Journey.
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-base md:text-lg">
        Discover internships, research programs, scholarships, hackathons, and more.
        <br />
        Find the perfect opportunity to launch your tech career.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        
          <a href="#opportunities">
            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Explore Opportunities →
            </button>
          </a>
        
        <a href="#about">
          <button className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">
            Learn More
          </button>
        </a>
        
      </div>
    </section>
  )
}
