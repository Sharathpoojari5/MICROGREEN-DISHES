import React from 'react';
import { Clock, Sparkles, ChevronRight, Zap, Flame } from 'lucide-react';

export default function DishCard({ recipe, onSelect }) {
  return (
    <div 
      onClick={() => onSelect(recipe)}
      className="group bg-[#F9F6F0] border border-[#D4AF37]/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative h-44 w-full overflow-hidden bg-[#072218]">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Country Flag Badge */}
        <div className="absolute top-2.5 left-2.5 bg-[#072218]/90 text-[#FAF7F2] px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md border border-[#D4AF37]/40 flex items-center gap-1.5 shadow">
          <span>{recipe.flag}</span>
          <span>{recipe.country}</span>
        </div>

        {/* Prep Time Badge */}
        <div className="absolute top-2.5 right-2.5 bg-[#D4AF37] text-[#072218] px-2 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-1 shadow">
          <Clock className="w-3 h-3" />
          <span>{recipe.prepTime}</span>
        </div>

        {/* Meal Type Overlay */}
        <div className="absolute bottom-2 left-2.5 bg-[#072218]/80 text-[#D4AF37] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border border-[#D4AF37]/30">
          {recipe.mealType}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-serif text-base font-bold text-[#072218] group-hover:text-[#AA820A] transition-colors leading-snug mb-2">
            {recipe.title}
          </h4>

          {/* DISH EXPLANATION: USE CASE & MICROGREEN PLACEMENT */}
          <div className="bg-[#EFE9DD] border-l-2 border-[#D4AF37] p-2.5 rounded-r-lg mb-3 space-y-1.5">
            <div>
              <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#AA820A]">
                <Zap className="w-3 h-3 text-[#D4AF37]" />
                <span>Dish Use Case</span>
              </div>
              <p className="text-xs text-[#072218] font-medium leading-snug line-clamp-2">
                {recipe.useCase || recipe.description}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#AA820A]">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>Microgreen Placement</span>
              </div>
              <p className="text-xs text-[#4A5B53] italic font-subserif leading-snug line-clamp-2">
                "{recipe.microgreenUse || recipe.valueAdd.flavorAroma}"
              </p>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="flex items-center justify-between pt-2 border-t border-[#1F2925]/10 text-xs font-semibold text-[#072218] group-hover:text-[#AA820A]">
          <span className="text-[11px] font-medium text-[#4A5B53]">{recipe.dietary}</span>
          <span className="inline-flex items-center gap-1">
            <span>Recipe Guide</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );
}
