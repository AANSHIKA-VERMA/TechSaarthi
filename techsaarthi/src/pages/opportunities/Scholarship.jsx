import { useState } from "react";
import  OpportunityCard  from "../../components/OpportunityCard";
import  OpportunityFilters  from "../../components/OpportunityFilters";
import { scholarships } from "../../data/scholarships";

export default function Scholarships() {
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredScholarships = scholarships.filter((item) => {
    const genderMatch =
      selectedGender === "All" ||
      item.gender.includes(selectedGender) ||
      item.gender.includes("Both");

    const yearMatch =
      selectedYear === "All" || item.years.includes(selectedYear);

    return genderMatch && yearMatch;
  });

  return (
    <section className="min-h-screen px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-2">
        Scholarships
      </h1>
      <p className="text-gray-400 mb-8">
        Explore scholarships tailored for your academic journey.
      </p>

      <OpportunityFilters
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />

      <div className="space-y-4">
        {filteredScholarships.length > 0 ? (
          filteredScholarships.map((item) => (
            <OpportunityCard key={item.id} item={item} />
          ))
        ) : (
          <p className="text-gray-400">No scholarships found.</p>
        )}
      </div>
    </section>
  );
}

