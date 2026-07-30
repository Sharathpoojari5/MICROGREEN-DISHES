import React from 'react';
import { X, Clock, Flame, Zap, Sparkles, CheckCircle2, ShieldCheck, Heart, ChefHat } from 'lucide-react';
import { VARIETIES } from '../data/varieties';

export default function DishDetailModal({ recipe, onClose }) {
  if (!recipe) return null;

  const variety = VARIETIES.find((v) => v.id === recipe.varietyId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-[#072218]/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#FBF8F1] border-2 border-[#D4AF37] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#072218]/80 hover:bg-[#072218] text-[#D4AF37] border border-[#D4AF37]/50 shadow transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          
          {/* Header & Image Showcase */}
          <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-md">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#072218] via-transparent to-transparent opacity-90"></div>
            
            <div className="absolute bottom-4 left-4 right-4 text-[#FAF7F2]">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-[#D4AF37] text-[#072218] font-bold text-xs px-2.5 py-0.5 rounded-full">
                  {recipe.flag} {recipe.country}
                </span>
                <span className="bg-[#0A3325] text-[#D4AF37] border border-[#D4AF37]/40 text-xs px-2.5 py-0.5 rounded-full font-medium">
                  {recipe.mealType}
                </span>
                <span className="bg-[#0A3325] text-emerald-200 border border-emerald-500/30 text-xs px-2.5 py-0.5 rounded-full font-medium">
                  {recipe.dietary}
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
                {recipe.title}
              </h2>
            </div>
          </div>

          {/* Microgreen Variety Tagline Banner */}
          {variety && (
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0A3325] border border-[#D4AF37]/40 text-[#FAF7F2]">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{variety.icon}</span>
                <div>
                  <span className="text-xs uppercase font-bold text-[#D4AF37]">Powered by Variety</span>
                  <h4 className="font-serif text-sm font-bold">{variety.name}</h4>
                </div>
              </div>
              <div className="text-right text-xs">
                <span className="text-[#D4AF37] font-semibold block">{variety.tagline}</span>
                <span className="text-emerald-200/80 text-[11px]">{variety.keyNutrient}</span>
              </div>
            </div>
          )}

          {/* DEDICATED DISH EXPLANATION: USE CASE & MICROGREEN USAGE */}
          <div className="bg-[#F2ECE1] border-2 border-[#D4AF37]/60 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-[#D4AF37]/30 pb-2">
              <Zap className="w-5 h-5 text-[#AA820A]" />
              <h3 className="font-serif text-lg font-bold text-[#072218]">
                Dish Explanation & Microgreen Usage
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Dish Use Case */}
              <div className="bg-[#FBF8F1] p-4 rounded-xl border border-[#D4AF37]/30 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#AA820A] uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>Culinary Use Case</span>
                </div>
                <p className="text-xs text-[#072218] font-semibold leading-relaxed">
                  {recipe.useCase || recipe.description}
                </p>
              </div>

              {/* Microgreen Usage in Dish */}
              <div className="bg-[#FBF8F1] p-4 rounded-xl border border-[#D4AF37]/30 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#AA820A] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Where & How Microgreen is Used</span>
                </div>
                <p className="text-xs text-[#4A5B53] font-subserif italic leading-relaxed">
                  "{recipe.microgreenUse || recipe.valueAdd.timing}"
                </p>
              </div>
            </div>

            {/* Detailed Value Addition Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-[#D4AF37]/20">
              <div className="text-xs text-[#4A5B53]">
                <strong className="text-[#072218]">Flavor Elevation:</strong> {recipe.valueAdd.flavorAroma}
              </div>
              <div className="text-xs text-[#4A5B53]">
                <strong className="text-[#072218]">Textural Contrast:</strong> {recipe.valueAdd.texture}
              </div>
              <div className="text-xs text-[#4A5B53]">
                <strong className="text-[#072218]">Nutritional Synergy:</strong> {recipe.valueAdd.nutrition}
              </div>
              <div className="text-xs text-[#4A5B53]">
                <strong className="text-[#072218]">Placement & Timing:</strong> {recipe.valueAdd.timing}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-xs text-[#4A5B53] font-subserif italic bg-[#FAF7F2] p-3 rounded-lg border border-[#D4AF37]/20">
            "{recipe.description}"
          </div>

          {/* Recipe Ingredients & Instructions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Ingredients */}
            <div className="space-y-3">
              <h4 className="font-serif text-base font-bold text-[#072218] border-b border-[#D4AF37]/30 pb-1">
                Ingredients Needed
              </h4>
              <ul className="space-y-2 text-xs text-[#1F2925]">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparation Steps */}
            <div className="space-y-3">
              <h4 className="font-serif text-base font-bold text-[#072218] border-b border-[#D4AF37]/30 pb-1">
                Preparation Steps
              </h4>
              <ol className="space-y-2 text-xs text-[#1F2925]">
                {recipe.instructions.map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#072218] text-[#D4AF37] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-snug">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
