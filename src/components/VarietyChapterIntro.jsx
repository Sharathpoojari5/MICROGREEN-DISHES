import React from 'react';
import { Sparkles, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export default function VarietyChapterIntro({ variety, onStartBrowsing }) {
  if (!variety) return null;

  return (
    <div className="w-full space-y-6 animate-fade-in text-[#1F2925]">
      
      {/* Chapter Banner */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-lg">
        <img
          src={variety.coverImage}
          alt={variety.name}
          className="w-full h-56 md:h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#072218] via-[#072218]/60 to-transparent"></div>

        <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37] text-[#072218] text-xs font-bold uppercase tracking-widest mb-2 shadow">
            <span>{variety.icon}</span>
            <span>Variety Chapter</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
            {variety.name}
          </h2>
          <p className="font-subserif text-lg md:text-xl text-[#D4AF37] italic">
            "{variety.tagline}"
          </p>
        </div>
      </div>

      {/* Description & Nutritional Profile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Main Bio */}
        <div className="md:col-span-2 bg-[#F2ECE1] p-5 rounded-xl border border-[#D4AF37]/30">
          <h3 className="font-serif text-lg font-bold text-[#072218] mb-2">
            About {variety.name}
          </h3>
          <p className="text-xs text-[#4A5B53] font-subserif leading-relaxed mb-4">
            {variety.description}
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#AA820A] bg-[#FAF7F2] px-3 py-1.5 rounded-lg border border-[#D4AF37]/30">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Key Super-Nutrient: {variety.keyNutrient}</span>
          </div>
        </div>

        {/* Helps With Benefits */}
        <div className="bg-[#0A3325] text-[#FAF7F2] p-5 rounded-xl border border-[#D4AF37]/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-xs uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Health Benefits</span>
            </div>
            <ul className="space-y-2 text-xs">
              {variety.helpsWith.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onStartBrowsing}
            className="mt-4 w-full py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#F4C430] text-[#072218] font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>Explore 20 Global Recipes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
