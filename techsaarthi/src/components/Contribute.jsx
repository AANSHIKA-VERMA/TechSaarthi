import {
  PenLine,
  Mic,
  Star,
  FileText,
  Award,
  ArrowRight,
} from "lucide-react";

export default function Contribute() {
  return (
    <section id="contribute" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Contribute to TechSaarthi
          </h2>
          <p className="text-gray-400 max-w-3xl">
            TechSaarthi grows through student experiences. If you’ve navigated
            opportunities, achieved milestones, or learned something valuable —
            your story can guide others.
          </p>
        </div>

        {/* Contribution Ways */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          {/* What to Share */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6
                          hover:border-blue-500 transition duration-300 hover:scale-105">
            <Star className="text-blue-500 mb-4" size={28} />
            <h3 className="text-xl font-semibold text-white mb-3">
              What You Can Share
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
              <li>• Scholarship or fellowship experiences</li>
              <li>• Mentorship or leadership programs</li>
              <li>• Research internships or academic projects</li>
              <li>• Hackathons, challenges, or competitions</li>
              <li>• Academic achievements (CGPA, awards, milestones)</li>
            </ul>
          </div>

          {/* How to Share */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6
                          hover:border-purple-500 transition duration-300 hover:scale-105">
            <FileText className="text-purple-500 mb-4" size={28} />
            <h3 className="text-xl font-semibold text-white mb-3">
              How You Can Contribute
            </h3>
            <ul className="text-gray-300 space-y-3 text-sm leading-relaxed">
              <li className="flex gap-2">
                <Mic size={16} /> Share your experience via a short interview or conversation
              </li>
              <li className="flex gap-2">
                <PenLine size={16} /> Write a blog or document your journey in your own format
              </li>
              <li className="flex gap-2">
                <FileText size={16} /> Reach out directly on Instagram to start contributing
              </li>
            </ul>
          </div>

          {/* What You Get */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6
                          hover:border-green-500 transition duration-300 hover:scale-105">
            <Award className="text-green-500 mb-4" size={28} />
            <h3 className="text-xl font-semibold text-white mb-3">
              What You Get
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
              <li>• Featured on TechSaarthi (optional)</li>
              <li>• Recognition for your journey</li>
              <li>• Impact by helping fellow students</li>
              <li>• Strengthens your personal brand</li>
            </ul>
          </div>

        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20
                        border border-white/10 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Ready to Share Your Story?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Whether you prefer a conversation or writing at your own pace,
            TechSaarthi makes it easy and comfortable to contribute.
          </p>

          <a
            href="https://www.instagram.com/techwithaanshika"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition active:scale-95">
            Start Contributing <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

