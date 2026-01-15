import { ArrowUpRight } from "lucide-react";

export default function OpportunityCard({ item }) {
  return (
    <div className="flex justify-between items-center bg-black/60 border border-white/10 rounded-xl p-5 hover:border-blue-500 transition">
      {/* Left */}
      <div>
        <h3 className="text-lg font-semibold text-white">
          {item.name}
        </h3>

        {/* Tags */}
        <div className="flex gap-2 mt-2">
          {item.applyLink && (
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
              Apply Link
            </span>
          )}
          {item.referenceVideo && (
            <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">
              Reference Video
            </span>
          )}
        </div>
      </div>

      {/* Right */}
      <a
        href={item.detailsLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1 text-blue-400 hover:underline"
      >
        View
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
