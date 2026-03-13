import { useState } from "react";
import OpportunityCard from "../../components/OpportunityCard";
import OpportunityFilters from "../../components/OpportunityFilters";
import { scholarships } from "../../data/scholarships";

export default function Scholarship() {
  const [filters, setFilters] = useState({
    year: "all",
  });

  const [search, setSearch] = useState("");

  const filteredData = scholarships.filter((item) => {
    const yearMatch =
      filters.year === "all" ||
      (item.year ?? "").includes(filters.year);

    const searchMatch =
      (item.name ?? "").toLowerCase().includes(search.toLowerCase());

    return yearMatch && searchMatch;
  });

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-2">Scholarships</h1>
      <p className="text-gray-400 mb-8">
        Filter opportunities based on your current year
      </p>

      <input
        type="text"
        placeholder="Search scholarships..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-3 rounded-xl bg-black/60 
                   border border-white/20 text-white 
                   focus:outline-none focus:border-blue-500"
      />

      <OpportunityFilters filters={filters} setFilters={setFilters} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredData.map((item, index) => (
          <OpportunityCard key={index} item={item} />
        ))}
      </div>

      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No scholarships found.</p>
      )}
    </section>
  );
}