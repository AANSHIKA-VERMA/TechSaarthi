import React from 'react';

export default function OpportunityFilters({
  selectedGender,
  setSelectedGender,
  selectedYear,
  setSelectedYear,
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {/* Gender Filter */}
      <select
        value={selectedGender}
        onChange={(e) => setSelectedGender(e.target.value)}
        className="bg-black/60 border border-white/20 text-white px-4 py-2 rounded-lg"
      >
        <option value="All">All Genders</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Both">Both</option>
      </select>

      {/* Academic Year Filter */}
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="bg-black/60 border border-white/20 text-white px-4 py-2 rounded-lg"
      >
        <option value="All">All Years</option>
        <option value="1st">1st Year</option>
        <option value="2nd">2nd Year</option>
        <option value="3rd">3rd Year</option>
        <option value="4th">4th Year</option>
      </select>
    </div>
  );
}

