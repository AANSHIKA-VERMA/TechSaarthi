import {
  Briefcase,
  BookOpen,
  Award,
  Rocket,
  Zap,
  Code2,
  Users
} from "lucide-react";

const categories = [
  {
    title: "Internships",
    slug: "internships",
    description: "Gain real-world experience at top tech companies",
    count: "124 opportunities",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Research Programs",
    slug: "research",
    description: "Contribute to cutting-edge research projects",
    count: "47 opportunities",
    icon: BookOpen,
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Scholarships",
    slug: "scholarships",
    description: "Funding opportunities for tech education",
    count: "89 opportunities",
    icon: Award,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Career Programs",
    slug: "career",
    description: "Structured paths to launch your tech career",
    count: "63 opportunities",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Hackathons",
    slug: "hackathons",
    description: "Build amazing projects and compete",
    count: "156 opportunities",
    icon: Zap,
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "Coding Challenges",
    slug: "coding",
    description: "Level up your skills with competitions",
    count: "203 opportunities",
    icon: Code2,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Community Programs",
    slug: "community",
    description: "Connect with mentors and peers",
    count: "76 opportunities",
    icon: Users,
    color: "from-teal-500 to-cyan-500",
  },
];

export default function Opportunities() {
  return (
    <section id="opportunities" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        Explore By Category
      </h2>
      <p className="text-gray-400 text-center mb-12">
        Browse opportunities tailored to your interests and goals
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="group bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-blue-500 transition"
          >
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.color}`}
            >
              <item.icon className="w-7 h-7 text-white" />
            </div>

            <h3 className="text-xl font-semibold text-white mt-6">
              {item.title}
            </h3>
            <p className="text-gray-400 mt-2">{item.description}</p>
            <p className="text-blue-400 mt-4">{item.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
