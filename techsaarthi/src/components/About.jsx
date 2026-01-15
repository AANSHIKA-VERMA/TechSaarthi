import {
  Sparkles,
  Target,
  Users,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About TechSaarthi
          </h2>
          <p className="text-gray-400 max-w-3xl">
            TechSaarthi is a curated opportunity discovery platform built to
            simplify how students find internships, research programs,
            scholarships, and career-building initiatives.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* What TechSaarthi Offers */}
          <div
            className="group bg-white/5 border border-white/10 rounded-2xl p-8
                          hover:border-blue-500 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              What This Platform Does
            </h3>

            <ul className="space-y-5 text-gray-300">
              <li className="flex gap-4">
                <Sparkles className="text-blue-500 mt-1" />
                Centralizes internships, research roles, scholarships,
                hackathons, and career programs into one accessible platform
              </li>

              <li className="flex gap-4">
                <Target className="text-green-500 mt-1" />
                Helps students identify opportunities based on eligibility,
                academic year, and background
              </li>

              <li className="flex gap-4">
                <Users className="text-purple-500 mt-1" />
                Encourages peer-to-peer contribution to build a trusted,
                student-first opportunity ecosystem
              </li>
            </ul>
          </div>

          {/* About You */}
          <div
            className="group bg-white/5 border border-white/10 rounded-2xl p-8
                          hover:border-purple-500 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              About the Creator
            </h3>

            <p className="text-gray-300 leading-relaxed mb-8">
              I’m <span className="text-white font-medium">Aanshika</span>, a
              technology enthusiast passionate about building practical,
              student-centric solutions.
              <br />
              <br />I created TechSaarthi after noticing how many students miss
              high-impact opportunities due to scattered information, limited
              guidance, or lack of awareness — especially women in tech. My goal
              is to bridge this gap through a transparent and community-driven
              platform.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/techwithaanshika"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg
                           bg-pink-600 text-white hover:bg-pink-700 transition active:scale-95"
              >
                Instagram <ArrowUpRight size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/aanshika-verma-a89301282/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg
                           bg-blue-600 text-white hover:bg-blue-700 transition active:scale-95"
              >
                LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Opportunities Curated", value: "120+" },
            { label: "Opportunity Categories", value: "6+" },
            { label: "Targeted for Students", value: "100%" },
            { label: "Community Driven", value: "Yes" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl p-6
                         text-center hover:border-blue-500 transition"
            >
              <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
