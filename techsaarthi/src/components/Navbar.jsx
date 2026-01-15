import React from 'react'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT: Logo + Name */}
        <div className="flex items-center gap-2">
          {/* Replace this with the logo image later */}
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            {"</>"}
          </div>
          <span className="text-white text-lg font-semibold">
           <a href="#hero">TechSaarthi</a>
          </span>
        </div>

        {/* CENTER: Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#opportunities" className="hover:text-white transition">
            Opportunities
          </a>
          <a href="#contribute" className="hover:text-white transition">
            Contribute
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
        </div>

        {/* RIGHT: Bookmarks */}
        <div>
          <button className="px-4 py-2 rounded-lg border border-white/20 text-sm text-white hover:bg-white/10 transition">
            Bookmarks
          </button>
        </div>
      
      </div>
    </nav>
  )
}
