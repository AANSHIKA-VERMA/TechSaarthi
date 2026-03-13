import { useState } from "react";
import OpportunityCard from "../../components/OpportunityCard";
import OpportunityFilters from "../../components/OpportunityFilters";
import { career } from "../../data/career";

export default function Career() {
  const [filters, setFilters] = useState({
    year: "all",
  });

  const [search, setSearch] = useState("");

  const filteredData = (career || []).filter((item) => {
    const itemYear = String(item.year || "").toLowerCase();
    const selectedYear = filters.year.toLowerCase();

    const yearMatch =
      selectedYear === "all" ||
      itemYear.includes(selectedYear) ||
      itemYear === "all";

    const searchMatch =
      (item.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (item.organization || "").toLowerCase().includes(search.toLowerCase());

    return yearMatch && searchMatch;
  });

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">
          Career Programs
        </h1>
        <p className="text-gray-400">
          Upskilling tracks, mentorships, and diversity programs to kickstart your professional journey.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search programs (e.g. STEP, WE, Mentorship...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-4 rounded-xl bg-white/5 
                     border border-white/10 text-white 
                     focus:outline-none focus:border-emerald-500 transition-all
                     placeholder:text-gray-600"
        />
      </div>

      {/* Filters */}
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
          <p className="text-gray-500 text-lg">No career programs found.</p>
          <button 
            onClick={() => {setSearch(""); setFilters({year: "all"})}}
            className="mt-4 text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
          >
            Show all programs
          </button>
        </div>
      )}
    </section>
  );
}
