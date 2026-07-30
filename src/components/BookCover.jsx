import React from 'react';
import { BookOpen, Sparkles, Award, Globe, Leaf } from 'lucide-react';

export default function BookCover({ onOpenBook }) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 md:p-8">
      <div className="relative max-w-4xl w-full bg-[#08281D] border-[14px] border-[#0A3325] rounded-2xl shadow-2xl p-8 md:p-14 text-center overflow-hidden transition-all transform hover:scale-[1.01] duration-500">
        
        {/* Luxury Gold Border Overlay */}
        <div className="absolute inset-3 border-2 border-[#D4AF37]/40 rounded-lg pointer-events-none"></div>
        <div className="absolute inset-5 border border-[#D4AF37]/20 rounded-md pointer-events-none"></div>

        {/* Cover Background Graphic */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Emblem Header */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-[#0E4231] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg mb-6 group cursor-pointer">
            <Leaf className="w-10 h-10 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#124D39] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Grevara Microgreens Edition
          </div>

          {/* Book Title */}
          <h1 className="font-serif text-4xl md:text-6xl text-[#FAF7F2] font-bold tracking-tight mb-4 leading-tight">
            The Global Microgreen <br />
            <span className="italic text-[#D4AF37] font-normal">Culinary Compendium</span>
          </h1>

          <p className="font-subserif text-lg md:text-2xl text-emerald-100/90 max-w-2xl mx-auto italic mb-8">
            "100 World-Famous Recipes Elevated by Fresh Microgreens & Explicit Value Additions"
          </p>

          {/* Feature Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl w-full mb-10 text-left">
            <div className="p-4 rounded-xl bg-[#0B3527]/80 border border-[#D4AF37]/20 flex items-start gap-3">
              <Globe className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-[#FAF7F2] font-bold text-sm">100 Global Dishes</h4>
                <p className="text-xs text-emerald-200/70">From Asia, Europe, Americas, Middle East & Africa</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#0B3527]/80 border border-[#D4AF37]/20 flex items-start gap-3">
              <Award className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-[#FAF7F2] font-bold text-sm">5 Varieties</h4>
                <p className="text-xs text-emerald-200/70">Broccoli, Sango, Sunflower, Pea & Amaranth</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#0B3527]/80 border border-[#D4AF37]/20 flex items-start gap-3">
              <Leaf className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-[#FAF7F2] font-bold text-sm">Value Additions</h4>
                <p className="text-xs text-emerald-200/70">Flavor, texture, nutrition & timing guides</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onOpenBook}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4C430] text-[#072218] font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <BookOpen className="w-6 h-6 group-hover:rotate-6 transition-transform" />
            <span>Open The Interactive Book</span>
          </button>
        </div>
      </div>
    </div>
  );
}
