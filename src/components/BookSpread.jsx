import React from 'react';
import { VARIETIES } from '../data/varieties';
import DishCard from './DishCard';
import TableOfContents from './TableOfContents';
import VarietyChapterIntro from './VarietyChapterIntro';

export default function BookSpread({
  currentPage,
  displayedRecipes,
  currentVariety,
  isTOCPage,
  onJumpToCategory,
  onSelectRecipe,
  onPrevPage,
  onNextPage
}) {
  // Compute page split for double page desktop spread
  const leftPageRecipes = displayedRecipes.slice(0, 4);
  const rightPageRecipes = displayedRecipes.slice(4, 8);

  return (
    <div className="relative w-full">
      {/* Chapter Side Ribbon Tabs */}
      <div className="chapter-tabs-container">
        {VARIETIES.map((v) => {
          const isActive = currentVariety && currentVariety.id === v.id;
          return (
            <button
              key={v.id}
              onClick={() => onJumpToCategory(v.id)}
              className={`chapter-tab ${isActive ? 'active' : ''}`}
              style={{
                borderLeftColor: v.color
              }}
            >
              <span>{v.icon}</span>
              <span className="hidden lg:inline">{v.name.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Book Frame */}
      <div className="book-frame">
        <div className="book-spread">
          
          {/* Spine Shadow */}
          <div className="book-spine"></div>

          {/* LEFT PAGE */}
          <div className="book-page-left">
            <div className="page-curl-corner-left" onClick={onPrevPage} title="Previous Page"></div>
            
            {isTOCPage ? (
              <TableOfContents 
                onJumpToCategory={onJumpToCategory}
                onSelectRecipe={onSelectRecipe}
              />
            ) : leftPageRecipes.length === 0 ? (
              currentVariety ? (
                <VarietyChapterIntro 
                  variety={currentVariety}
                  onStartBrowsing={onNextPage}
                />
              ) : (
                <div className="h-full flex items-center justify-center text-[#4A5B53] font-subserif italic">
                  No recipes found matching your filters.
                </div>
              )
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#AA820A]">
                    {currentVariety ? currentVariety.name : 'Global Recipe Catalog'}
                  </span>
                  <span className="text-xs text-[#4A5B53] font-serif">Left Spread</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {leftPageRecipes.map((recipe) => (
                    <DishCard key={recipe.id} recipe={recipe} onSelect={onSelectRecipe} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT PAGE */}
          <div className="book-page-right">
            <div className="page-curl-corner-right" onClick={onNextPage} title="Next Page"></div>

            {isTOCPage ? (
              <div className="h-full flex flex-col justify-between p-4 bg-[#F2ECE1]/40 rounded-xl border border-[#D4AF37]/20">
                <div className="space-y-4 text-[#1F2925]">
                  <h3 className="font-serif text-2xl font-bold text-[#072218] border-b border-[#D4AF37]/30 pb-2">
                    Welcome to Grevara Compendium
                  </h3>
                  <p className="font-subserif text-sm leading-relaxed text-[#4A5B53]">
                    Microgreens contain up to <strong>40x higher concentrations</strong> of vital bio-available nutrients, sulforaphane, polyphenols, and enzymes than their mature vegetable counterparts.
                  </p>
                  <div className="p-4 rounded-xl bg-[#FAF7F2] border-l-4 border-[#D4AF37] space-y-2">
                    <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#072218]">
                      How to Read This Book
                    </h4>
                    <p className="text-xs text-[#4A5B53] font-subserif">
                      Turn pages using arrow keys, click side chapter tabs, or use the page navigation bar below. Click any global dish card to view its explicit 4-part value addition breakdown!
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0A3325] text-[#FAF7F2] text-xs space-y-1 text-center">
                  <span className="font-serif text-[#D4AF37] font-bold block text-sm">Grevara Premium Guarantee</span>
                  <span className="text-emerald-200/80">100% Organic • Farm Fresh • Nutrient Dense</span>
                </div>
              </div>
            ) : rightPageRecipes.length === 0 ? (
              <div className="h-full flex items-center justify-center text-[#4A5B53] font-subserif italic text-center p-8">
                Turn page to explore more dishes in this variety chapter &rarr;
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#AA820A]">
                    {currentVariety ? currentVariety.name : 'Global Recipe Catalog'}
                  </span>
                  <span className="text-xs text-[#4A5B53] font-serif">Right Spread</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {rightPageRecipes.map((recipe) => (
                    <DishCard key={recipe.id} recipe={recipe} onSelect={onSelectRecipe} />
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
