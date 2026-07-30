import React from 'react';
import { Search, Filter, RefreshCw } from 'lucide-react';
import { VARIETIES } from '../data/varieties';

export default function FilterBar({
  searchQuery,
  setSearchQuery,
  selectedVariety,
  setSelectedVariety,
  selectedRegion,
  setSelectedRegion,
  selectedMealType,
  setSelectedMealType,
  onReset
}) {
  const regions = ['All', 'Asia', 'Europe', 'Americas', 'Middle East', 'Mediterranean', 'Africa'];
  const mealTypes = ['All', 'Breakfast', 'Main Course', 'Salad', 'Soup', 'Appetizer', 'Snack', 'Dessert'];

  return (
    <div className="bg-[#0A3325] border border-[#D4AF37]/30 rounded-xl p-4 shadow-lg mb-6 text-[#FAF7F2]">
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
        
        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
          <input
            type="text"
            placeholder="Search global dish or ingredient..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#072218] border border-[#D4AF37]/30 rounded-lg pl-9 pr-3 py-2 text-xs text-[#FAF7F2] placeholder-emerald-300/50 focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
          {/* Variety Filter */}
          <select
            value={selectedVariety}
            onChange={(e) => setSelectedVariety(e.target.value)}
            className="bg-[#072218] border border-[#D4AF37]/30 rounded-lg px-2.5 py-1.5 text-xs text-[#D4AF37] font-medium focus:outline-none"
          >
            <option value="all">All Varieties (100 Dishes)</option>
            {VARIETIES.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name}
              </option>
            ))}
          </select>

          {/* Region Filter */}
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="bg-[#072218] border border-[#D4AF37]/30 rounded-lg px-2.5 py-1.5 text-xs text-[#FAF7F2] focus:outline-none"
          >
            {regions.map((r) => (
              <option key={r} value={r}>
                Region: {r}
              </option>
            ))}
          </select>

          {/* Meal Type Filter */}
          <select
            value={selectedMealType}
            onChange={(e) => setSelectedMealType(e.target.value)}
            className="bg-[#072218] border border-[#D4AF37]/30 rounded-lg px-2.5 py-1.5 text-xs text-[#FAF7F2] focus:outline-none"
          >
            {mealTypes.map((m) => (
              <option key={m} value={m}>
                Meal: {m}
              </option>
            ))}
          </select>

          {/* Reset Button */}
          <button
            onClick={onReset}
            className="p-2 rounded-lg bg-[#072218] hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] transition-colors"
            title="Reset Filters"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
