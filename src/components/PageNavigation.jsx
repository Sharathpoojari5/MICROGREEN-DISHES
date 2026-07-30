import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Volume2, VolumeX, List } from 'lucide-react';
import { VARIETIES } from '../data/varieties';

export default function PageNavigation({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
  onJumpToTOC,
  onJumpToCover,
  onSelectVariety,
  soundEnabled,
  setSoundEnabled,
  currentVarietyId
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0A3325] border-t-2 border-[#D4AF37]/50 p-4 px-6 rounded-b-xl text-[#FAF7F2] shadow-xl">
      
      {/* Left Controls: Cover & TOC */}
      <div className="flex items-center gap-2">
        <button
          onClick={onJumpToCover}
          className="px-3 py-1.5 rounded-lg bg-[#072218] hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span>Cover</span>
        </button>

        <button
          onClick={onJumpToTOC}
          className="px-3 py-1.5 rounded-lg bg-[#072218] hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-xs font-semibold text-[#FAF7F2] flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <List className="w-4 h-4 text-[#D4AF37]" />
          <span>Contents</span>
        </button>

        {/* Variety Chapter Jump Dropdown */}
        <select
          value={currentVarietyId || ''}
          onChange={(e) => onSelectVariety(e.target.value)}
          className="bg-[#072218] border border-[#D4AF37]/30 text-xs text-[#D4AF37] rounded-lg px-2.5 py-1.5 focus:outline-none cursor-pointer"
        >
          <option value="" disabled>Jump to Chapter...</option>
          {VARIETIES.map((v, i) => (
            <option key={v.id} value={v.id}>
              Ch. {i + 1}: {v.name}
            </option>
          ))}
        </select>
      </div>

      {/* Center: Page Flip Arrows & Number */}
      <div className="flex items-center gap-4">
        <button
          onClick={onPrevPage}
          disabled={currentPage <= 1}
          className="p-2 rounded-full bg-[#072218] hover:bg-[#D4AF37] hover:text-[#072218] border border-[#D4AF37]/30 text-[#D4AF37] disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow"
          title="Previous Page (Left Arrow)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="text-center font-subserif">
          <span className="text-xs text-emerald-200/70 block uppercase tracking-widest">Book Page</span>
          <span className="font-serif text-base font-bold text-[#D4AF37]">
            {currentPage} <span className="text-xs font-normal text-emerald-200/60">/ {totalPages}</span>
          </span>
        </div>

        <button
          onClick={onNextPage}
          disabled={currentPage >= totalPages}
          className="p-2 rounded-full bg-[#072218] hover:bg-[#D4AF37] hover:text-[#072218] border border-[#D4AF37]/30 text-[#D4AF37] disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow"
          title="Next Page (Right Arrow)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Right Controls: Audio Toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
            soundEnabled 
              ? 'bg-[#14533C] border-[#D4AF37] text-[#D4AF37]' 
              : 'bg-[#072218] border-[#D4AF37]/30 text-emerald-300/50'
          }`}
          title={soundEnabled ? 'Page Flip Sound: ON' : 'Page Flip Sound: OFF'}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 text-[#D4AF37]" /> : <VolumeX className="w-4 h-4" />}
          <span className="text-[11px] font-medium hidden md:inline">
            {soundEnabled ? 'Sound ON' : 'Sound OFF'}
          </span>
        </button>
      </div>

    </div>
  );
}
