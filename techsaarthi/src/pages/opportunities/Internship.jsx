import { useState } from "react";
import OpportunityCard from "../../components/OpportunityCard";
import OpportunityFilters from "../../components/OpportunityFilters";
import { internships } from "../../data/internships";

export default function Internship() {
  const [filters, setFilters] = useState({
    year: "all",
  });

  const [search, setSearch] = useState("");

  const filteredData = internships.filter((item) => {
    const yearMatch =
      filters.year === "all" ||
      (item.year ?? "").toLowerCase().includes(filters.year.toLowerCase());

    const searchMatch =
      (item.name ?? "").toLowerCase().includes(search.toLowerCase()) ||
      (item.company ?? "").toLowerCase().includes(search.toLowerCase());

    return yearMatch && searchMatch;
  });

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Internships</h1>
        <p className="text-gray-400">
          Find the best technical and non-technical internships for your batch.
        </p>
      </div>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search by role or company (e.g. Amazon, Frontend...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-4 rounded-xl bg-white/5 
                     border border-white/10 text-white 
                     focus:outline-none focus:border-blue-500 transition-all
                     placeholder:text-gray-500"
        />
      </div>

      <OpportunityFilters filters={filters} setFilters={setFilters} />

      {filteredData.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredData.map((item, index) => (
            <OpportunityCard key={index} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-20 text-center border border-dashed border-white/10 py-20 rounded-2xl">
          <p className="text-gray-500 text-lg">No internships found matching your criteria.</p>
          <button 
            onClick={() => {setSearch(""); setFilters({year: "all"})}}
            className="mt-4 text-blue-400 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </section>
  );
}