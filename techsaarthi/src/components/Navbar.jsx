import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["hero","opportunities", "about", "contribute"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkStyle = (id) =>
    `transition ${
      activeSection === id
        ? "text-white border-b-2 border-blue-500"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            {"</>"}
          </div>
          <span className="text-white text-lg font-semibold">
           <a href="#hero">TechSaarthi</a>
          </span>
        </div>

        {/* Center */}
        <div className="hidden md:flex gap-8">
          <a href="#hero" className={linkStyle("hero")}>
            Home
          </a>
          <a href="#opportunities" className={linkStyle("opportunities")}>
            Opportunities
          </a>
          <a href="#about" className={linkStyle("about")}>
            About
          </a>
          <a href="#contribute" className={linkStyle("contribute")}>
            Contribute
          </a>
        </div>

        {/* Right */}
        <a href="#bookmarks">
          <button className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 active:bg-white/10 transition ">
            Bookmarks
          </button>
        </a>

      </div>
    </nav>
  );
}
