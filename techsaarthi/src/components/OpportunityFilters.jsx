import React from "react";
export default function OpportunityFilters({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-400 font-medium">Select Year</label>
        <select
          value={filters.year}
          onChange={(e) => setFilters({ ...filters, year: e.target.value })}
          className="bg-black/60 border border-white/20 rounded-lg px-4 py-2 
                     focus:border-blue-500 outline-none text-white cursor-pointer"
        >
          <option value="all">All Years</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
        </select>
      </div>
    </div>
  );
}