import { useState } from "react";
import OpportunityCard from "../../components/OpportunityCard";
import OpportunityFilters from "../../components/OpportunityFilters";
import { community } from "../../data/community";

export default function Community() {
  const [filters, setFilters] = useState({
    year: "all",
  });

  const [search, setSearch] = useState("");

  const filteredData = community.filter((item) => {
    const yearMatch =
      filters.year === "all" ||
      (item.year ?? "").toLowerCase().includes(filters.year.toLowerCase()) ||
      (item.year ?? "").toLowerCase() === "all";

    const searchMatch =
      (item.name ?? "").toLowerCase().includes(search.toLowerCase()) ||
      (item.organization ?? "").toLowerCase().includes(search.toLowerCase());

    return yearMatch && searchMatch;
  });

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">
          Community Programs
        </h1>
        <p className="text-gray-400">
          Join global student communities, become an ambassador, and grow your network.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search programs (e.g. GDSC, MLSA, GitHub Field Day...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-4 rounded-xl bg-white/5 
                     border border-white/10 text-white 
                     focus:outline-none focus:border-purple-500 transition-all
                     placeholder:text-gray-600"
        />
      </div>

      {/* Filters*/}
      <OpportunityFilters filters={filters} setFilters={setFilters} />

      {/* Grid */}
      {filteredData.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredData.map((item, index) => (
            <OpportunityCard key={index} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-20 text-center py-20 bg-white/5 rounded-2xl border border-white/5">
          <p className="text-gray-500 text-lg italic">No programs found.</p>
          <button 
            onClick={() => {setSearch(""); setFilters({year: "all"})}}
            className="mt-4 text-purple-400 hover:text-purple-300 underline underline-offset-4"
          >
            Show all programs
          </button>
        </div>
      )}
    </section>
  );
}