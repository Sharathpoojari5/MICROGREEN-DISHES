import React, { useState, useEffect, useMemo } from 'react';
import BookCover from './components/BookCover';
import BookSpread from './components/BookSpread';
import PageNavigation from './components/PageNavigation';
import FilterBar from './components/FilterBar';
import DishDetailModal from './components/DishDetailModal';
import { VARIETIES } from './data/varieties';
import { RECIPES } from './data/recipes';

export default function App() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Page 1 = TOC
  const [selectedVariety, setSelectedVariety] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedMealType, setSelectedMealType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalRecipe, setActiveModalRecipe] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Web Audio API Page Flip Sound Effect
  const playPageFlipSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.15);
      
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch (e) {
      // Audio context fallbacks handled gracefully
    }
  };

  // Filtered recipes
  const filteredRecipes = useMemo(() => {
    return RECIPES.filter((r) => {
      if (selectedVariety !== 'all' && r.varietyId !== selectedVariety) return false;
      if (selectedRegion !== 'All' && r.region !== selectedRegion) return false;
      if (selectedMealType !== 'All' && r.mealType !== selectedMealType) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = r.title.toLowerCase().includes(q);
        const matchCountry = r.country.toLowerCase().includes(q);
        const matchIng = r.ingredients.some((ing) => ing.toLowerCase().includes(q));
        const matchVal = r.valueAdd.flavorAroma.toLowerCase().includes(q);
        if (!matchTitle && !matchCountry && !matchIng && !matchVal) return false;
      }
      return true;
    });
  }, [selectedVariety, selectedRegion, selectedMealType, searchQuery]);

  // Paginated recipes: 8 recipes per spread (4 left, 4 right)
  const totalRecipeSpreads = Math.max(1, Math.ceil(filteredRecipes.length / 8));
  const totalPages = totalRecipeSpreads + 1; // +1 for TOC page

  const isTOCPage = currentPage === 1;
  const currentSpreadIndex = currentPage - 2;

  const currentSpreadRecipes = useMemo(() => {
    if (isTOCPage) return [];
    const startIdx = currentSpreadIndex * 8;
    return filteredRecipes.slice(startIdx, startIdx + 8);
  }, [isTOCPage, currentSpreadIndex, filteredRecipes]);

  // Current variety metadata
  const currentVariety = useMemo(() => {
    if (selectedVariety !== 'all') {
      return VARIETIES.find((v) => v.id === selectedVariety);
    }
    if (currentSpreadRecipes.length > 0) {
      return VARIETIES.find((v) => v.id === currentSpreadRecipes[0].varietyId);
    }
    return VARIETIES[0];
  }, [selectedVariety, currentSpreadRecipes]);

  // Navigation handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      playPageFlipSound();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      playPageFlipSound();
    }
  };

  const handleJumpToCategory = (varietyId) => {
    setSelectedVariety(varietyId);
    setSelectedRegion('All');
    setSelectedMealType('All');
    setSearchQuery('');
    setCurrentPage(2);
    playPageFlipSound();
  };

  const handleResetFilters = () => {
    setSelectedVariety('all');
    setSelectedRegion('All');
    setSelectedMealType('All');
    setSearchQuery('');
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeModalRecipe) {
        if (e.key === 'Escape') setActiveModalRecipe(null);
        return;
      }
      if (!isBookOpen) return;

      if (e.key === 'ArrowRight') {
        handleNextPage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBookOpen, currentPage, totalPages, activeModalRecipe]);

  return (
    <div className="min-h-screen bg-[#072218] text-[#FAF7F2] font-sans selection:bg-[#D4AF37] selection:text-[#072218]">
      
      {/* Top Header Bar */}
      <header className="bg-[#0A3325] border-b border-[#D4AF37]/30 py-3 px-6 flex items-center justify-between shadow-md">
        <div 
          onClick={() => setIsBookOpen(false)}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <span className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#072218] font-bold text-sm flex items-center justify-center font-serif group-hover:rotate-12 transition-transform">
            G
          </span>
          <div>
            <h1 className="font-serif text-lg font-bold text-[#FAF7F2] tracking-wide group-hover:text-[#D4AF37] transition-colors">
              GREVARA MICROGREENS
            </h1>
            <p className="text-[10px] text-emerald-200/60 uppercase tracking-widest font-semibold">
              Global Culinary Compendium
            </p>
          </div>
        </div>

        {isBookOpen && (
          <button
            onClick={() => setIsBookOpen(false)}
            className="text-xs text-[#D4AF37] hover:underline font-semibold"
          >
            &larr; Back to Cover
          </button>
        )}
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto p-4 md:p-6">
        {!isBookOpen ? (
          <BookCover 
            onOpenBook={() => {
              setIsBookOpen(true);
              setCurrentPage(1);
              playPageFlipSound();
            }} 
          />
        ) : (
          <div className="space-y-4">
            
            {/* Filter Bar */}
            <FilterBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedVariety={selectedVariety}
              setSelectedVariety={setSelectedVariety}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              selectedMealType={selectedMealType}
              setSelectedMealType={setSelectedMealType}
              onReset={handleResetFilters}
            />

            {/* Book Spread */}
            <BookSpread
              currentPage={currentPage}
              displayedRecipes={currentSpreadRecipes}
              currentVariety={currentVariety}
              isTOCPage={isTOCPage}
              onJumpToCategory={handleJumpToCategory}
              onSelectRecipe={(recipe) => setActiveModalRecipe(recipe)}
              onPrevPage={handlePrevPage}
              onNextPage={handleNextPage}
            />

            {/* Page Navigation Controls */}
            <PageNavigation
              currentPage={currentPage}
              totalPages={totalPages}
              onPrevPage={handlePrevPage}
              onNextPage={handleNextPage}
              onJumpToTOC={() => {
                setCurrentPage(1);
                playPageFlipSound();
              }}
              onJumpToCover={() => setIsBookOpen(false)}
              onSelectVariety={(vId) => handleJumpToCategory(vId)}
              soundEnabled={soundEnabled}
              setSoundEnabled={setSoundEnabled}
              currentVarietyId={selectedVariety !== 'all' ? selectedVariety : ''}
            />

          </div>
        )}
      </main>

      {/* Recipe Detail Modal */}
      {activeModalRecipe && (
        <DishDetailModal
          recipe={activeModalRecipe}
          onClose={() => setActiveModalRecipe(null)}
        />
      )}

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-emerald-200/50 border-t border-[#D4AF37]/20 mt-12">
        <p>© 2026 Grevara Microgreens. All Rights Reserved. "Tiny Greens, Mighty Nutrition"</p>
        <p className="mt-1">Contact: microgreensgrevara@gmail.com | +91 9632397595 | Instagram: @GREVARA__</p>
      </footer>
    </div>
  );
}
