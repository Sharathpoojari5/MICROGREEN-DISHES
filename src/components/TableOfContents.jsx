import React from 'react';
import { VARIETIES } from '../data/varieties';
import { RECIPES } from '../data/recipes';
import { BookOpen, ChevronRight, Sparkles } from 'lucide-react';

export default function TableOfContents({ onJumpToCategory, onSelectRecipe }) {
  return (
    <div className="w-full space-y-8 animate-fade-in text-[#1F2925]">
      <div className="border-b border-[#D4AF37]/30 pb-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#AA820A] block mb-1">
          Front Matter
        </span>
        <h2 className="font-serif text-3xl font-bold text-[#072218]">Table of Contents</h2>
        <p className="font-subserif italic text-sm text-[#4A5B53] mt-1">
          Select any chapter or dish to instantly open its culinary guide page
        </p>
      </div>

      <div className="space-y-6">
        {VARIETIES.map((variety, idx) => {
          const varietyRecipes = RECIPES.filter(r => r.varietyId === variety.id);
          return (
            <div 
              key={variety.id}
              className="bg-[#F2ECE1]/60 border border-[#D4AF37]/30 rounded-xl p-5 hover:bg-[#F2ECE1] transition-all"
            >
              {/* Chapter Header */}
              <div 
                className="flex items-center justify-between cursor-pointer group mb-3 pb-2 border-b border-[#1F2925]/10"
                onClick={() => onJumpToCategory(variety.id)}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#072218] text-[#D4AF37] text-sm font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#072218] group-hover:text-[#AA820A] transition-colors">
                      {variety.name}
                    </h3>
                    <span className="text-xs text-[#AA820A] font-semibold">
                      {variety.tagline} • 20 Global Dishes
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#072218] group-hover:translate-x-1 transition-transform">
                  <span>Go to Chapter</span>
                  <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>

              {/* Sample Recipes Preview Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4">
                {varietyRecipes.slice(0, 6).map((recipe) => (
                  <div
                    key={recipe.id}
                    onClick={() => onSelectRecipe(recipe)}
                    className="flex items-center justify-between text-xs py-1.5 px-2 rounded-lg hover:bg-[#D4AF37]/15 cursor-pointer text-[#1F2925] transition-colors"
                  >
                    <span className="truncate flex items-center gap-1.5 font-medium">
                      <span>{recipe.flag}</span>
                      <span className="truncate">{recipe.title}</span>
                    </span>
                    <span className="text-[10px] bg-[#072218]/10 px-1.5 py-0.5 rounded text-[#072218] shrink-0">
                      {recipe.prepTime}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-3 text-right">
                <button
                  onClick={() => onJumpToCategory(variety.id)}
                  className="text-xs font-bold text-[#AA820A] hover:underline inline-flex items-center gap-1"
                >
                  View all 20 {variety.name} dishes &rarr;
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
