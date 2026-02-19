import React, { useState, useEffect, useCallback } from 'react';
import { PORTFOLIO } from '../mockDb';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export const Portfolio = () => {
  const categories = ['Все', 'Свадьба', 'Портрет', 'Семья', 'Бизнес'];
  const [activeCategory, setActiveCategory] = useState('Все');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'Все'
    ? PORTFOLIO
    : PORTFOLIO.filter(item => item.category === activeCategory);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImageIndex]);

  // Navigation handlers
  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  }, [selectedImageIndex, filteredItems.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [selectedImageIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="text-center mb-16 fade-in">
        <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6">Портфолио</h1>
        <p className="text-stone-500 max-w-2xl mx-auto text-lg">
          Коллекция моментов, застывших во времени. От грандиозных событий до тихих мгновений счастья.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 fade-in" style={{ animationDelay: '0.1s' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setSelectedImageIndex(null); }}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-stone-900 text-white shadow-lg'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedImageIndex(index)}
            className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 fade-in cursor-zoom-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="aspect-[4/5] overflow-hidden bg-stone-200">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transform scale-75 group-hover:scale-100 transition-transform duration-300">
                   <ZoomIn className="h-6 w-6" />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-900/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
               <span className="text-terracotta-400 text-xs font-bold uppercase tracking-widest mb-1 block">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center text-stone-500 py-20">
          В этой категории пока нет работ.
        </div>
      )}

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/95 backdrop-blur-sm fade-in-fast"
            onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-2"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous Button */}
          <button 
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-4 rounded-full hover:bg-white/10 hidden sm:block"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-7xl max-h-[85vh] p-4 flex flex-col items-center" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Key change triggers CSS animation */}
            <div key={selectedImageIndex} className="relative shadow-2xl scale-in">
              <img 
                src={filteredItems[selectedImageIndex].imageUrl} 
                alt={filteredItems[selectedImageIndex].title} 
                className="max-h-[80vh] w-auto rounded-lg shadow-2xl object-contain"
              />
              <div className="absolute -bottom-12 left-0 text-left">
                <h3 className="text-white font-serif text-2xl">{filteredItems[selectedImageIndex].title}</h3>
                <p className="text-terracotta-400 text-sm uppercase tracking-wider">{filteredItems[selectedImageIndex].category}</p>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button 
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-4 rounded-full hover:bg-white/10 hidden sm:block"
            onClick={handleNext}
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          
          {/* Mobile Navigation overlay (invisible but functional) */}
          <div className="sm:hidden absolute inset-x-0 bottom-0 h-20 flex justify-between px-8 pb-8 pointer-events-none">
             <button onClick={handlePrev} className="pointer-events-auto text-white/70 p-2"><ChevronLeft className="h-8 w-8"/></button>
             <button onClick={handleNext} className="pointer-events-auto text-white/70 p-2"><ChevronRight className="h-8 w-8"/></button>
          </div>
        </div>
      )}
    </div>
  );
};
