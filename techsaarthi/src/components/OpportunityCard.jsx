import { ExternalLink, Bookmark } from "lucide-react";
import { useEffect, useState } from "react";

export default function OpportunityTile({ item }) {
  const storageKey = `bookmark-${item.name}`;
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored === "true") setSaved(true);
  }, [storageKey]);

  const toggleBookmark = () => {
    const newState = !saved;
    setSaved(newState);
    localStorage.setItem(storageKey, newState);
  };

  return (
    <div className="relative bg-black/60 border border-white/10 rounded-2xl p-6 
                    hover:border-blue-500 hover:scale-[1.02] 
                    transition-all duration-300">

      {/* Bookmark */}
      <button
        onClick={toggleBookmark}
        className="absolute top-4 right-4 text-white hover:text-yellow-400"
      >
        <Bookmark fill={saved ? "gold" : "none"} />
      </button>

      <h3 className="text-xl font-semibold text-white mb-2">
        {item.name}
      </h3>

      {/* Tags */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {item.applyLink && (
          <span className="text-xs bg-green-600/20 text-green-400 px-3 py-1 rounded-full">
            Apply Link
          </span>
        )}
        {item.videoLink && (
          <span className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">
            Reference Video
          </span>
        )}
      </div>

      {/* Explore */}
      <a
        href={item.notionLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 
                   px-4 py-2 rounded-lg text-white transition"
      >
        Explore <ExternalLink size={16} />
      </a>
    </div>
  );
}
