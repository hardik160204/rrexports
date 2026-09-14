'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 20 Total Finishes (including the 7 from your document)
const allFinishes = [
  // From your provided document
  { id: '01', name: 'Antique Brass', code: 'AB-01', material: 'Brass', desc: 'Warm vintage tone with golden brown hues — ideal for classic décor.', bg: 'bg-zinc-800', text: 'text-zinc-200' },
  { id: '02', name: 'Matte Black', code: 'MB-02', material: 'Iron / Aluminum', desc: 'Sleek, modern, and elegant — suits contemporary interiors.', bg: 'bg-zinc-950', text: 'text-white' },
  { id: '03', name: 'Satin Nickel', code: 'SN-03', material: 'Brass / Zinc', desc: 'Smooth silver-gray tone — durable and fingerprint-resistant.', bg: 'bg-zinc-300', text: 'text-black' },
  { id: '04', name: 'Copper Finish', code: 'CF-04', material: 'Copper', desc: 'A rich, reddish tone that brings warmth and luxury.', bg: 'bg-zinc-900', text: 'text-zinc-300' },
  { id: '05', name: 'Gold / Brass Polish', code: 'GP-05', material: 'Brass', desc: 'Bright and bold — for traditional and premium designs.', bg: 'bg-zinc-100', text: 'text-black' },
  { id: '06', name: 'Pewter / Antique Silver', code: 'PS-06', material: 'Zinc Alloy', desc: 'Soft metallic gray for timeless appeal.', bg: 'bg-zinc-400', text: 'text-black' },
  { id: '07', name: 'Rust / Vintage Iron', code: 'RV-07', material: 'Cast Iron', desc: 'Raw, industrial-style finish with aged texture.', bg: 'bg-black', text: 'text-zinc-400' },
  
  // 13 Additional Standard Finishes to reach 20
  { id: '08', name: 'Polished Chrome', code: 'PC-08', material: 'Brass', desc: 'Highly reflective, mirror-like silver finish.', bg: 'bg-white', text: 'text-black' },
  { id: '09', name: 'Gunmetal Grey', code: 'GG-09', material: 'Aluminum', desc: 'Dark, sleek metallic gray with a subtle sheen.', bg: 'bg-zinc-800', text: 'text-white' },
  { id: '10', name: 'Oil Rubbed Bronze', code: 'OB-10', material: 'Brass', desc: 'Dark chocolate finish with subtle copper undertones.', bg: 'bg-zinc-900', text: 'text-zinc-300' },
  { id: '11', name: 'Brushed Aluminum', code: 'BA-11', material: 'Aluminum', desc: 'Textured, satin appearance with directional brush marks.', bg: 'bg-zinc-200', text: 'text-black' },
  { id: '12', name: 'Unlacquered Brass', code: 'UB-12', material: 'Brass', desc: 'Living finish that develops a natural patina over time.', bg: 'bg-zinc-100', text: 'text-black' },
  { id: '13', name: 'Satin Chrome', code: 'SC-13', material: 'Steel', desc: 'Matte silver finish that effectively hides water spots.', bg: 'bg-zinc-300', text: 'text-black' },
  { id: '14', name: 'Blackened Steel', code: 'BS-14', material: 'Steel', desc: 'Industrial dark finish with subtle tonal variations.', bg: 'bg-zinc-950', text: 'text-zinc-400' },
  { id: '15', name: 'Champagne Bronze', code: 'CB-15', material: 'Brass', desc: 'Soft, muted gold with a warm, elegant undertone.', bg: 'bg-zinc-200', text: 'text-black' },
  { id: '16', name: 'Matte White', code: 'MW-16', material: 'Aluminum', desc: 'Crisp, clean, and modern non-reflective surface.', bg: 'bg-white', text: 'text-black' },
  { id: '17', name: 'Weathered Pewter', code: 'WP-17', material: 'Zinc', desc: 'Heavily textured, aged silver-gray appearance.', bg: 'bg-zinc-500', text: 'text-white' },
  { id: '18', name: 'Polished Nickel', code: 'PN-18', material: 'Brass', desc: 'Warm, clear silver tone with a glossy, premium finish.', bg: 'bg-zinc-100', text: 'text-black' },
  { id: '19', name: 'Antique Copper', code: 'AC-19', material: 'Copper', desc: 'Weathered reddish-brown for a rustic, heritage look.', bg: 'bg-zinc-900', text: 'text-white' },
  { id: '20', name: 'Satin Brass', code: 'SB-20', material: 'Brass', desc: 'Smooth, velvety gold finish without the high shine.', bg: 'bg-zinc-200', text: 'text-black' },
];

export default function FinishesPage() {
  const [hoveredId, setHoveredId] = useState<string>(allFinishes[0].id);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const activeFinish = allFinishes.find(f => f.id === hoveredId) || allFinishes[0];
  const popupFinish = allFinishes.find(f => f.id === selectedId);

  // We duplicate the array so the continuous marquee loops seamlessly
  const marqueeItems = [...allFinishes, ...allFinishes];

  return (
    <div className="w-full min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col pt-12 pb-20 overflow-hidden">
      
      {/* RESTORED HEADER SECTION */}
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
          Finishes
        </h1>
        <p className="text-zinc-400 max-w-2xl text-sm md:text-base font-light">
          Explore our extensive catalog of architectural metal finishes. Hover over any material to view its profile, or click to expand.
        </p>
      </div>
      
      <section className="max-w-[1400px] w-full mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* STATIC LEFT COLUMN: Info Panel */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 z-10 bg-black/50 backdrop-blur-sm py-4">
            <div className="border-t border-zinc-800 pt-6 min-h-[250px]">
              <span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">
                Selected Specification
              </span>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFinish.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4"
                >
                  <h2 className="text-4xl font-semibold tracking-tight mb-4">
                    {activeFinish.name}
                  </h2>
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 mb-6">
                    <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">
                      {activeFinish.code}
                    </span>
                    <span>Base: {activeFinish.material}</span>
                  </div>
                  
                  {/* Pulls the exact description text from the object */}
                  <p className="text-zinc-300 text-sm leading-relaxed border-l-2 border-zinc-700 pl-4">
                    {activeFinish.desc}
                  </p>
                  
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT COLUMN: Continuous Scrolling Marquee */}
          <div className="lg:col-span-8 relative overflow-hidden">
            
            {/* The fading edges to make the scroll look seamless */}
            <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            {/* The moving track */}
            <motion.div 
              className="flex gap-6 py-8 px-4 w-max"
              animate={{ x: isPaused ? undefined : ['0%', '-50%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 40 }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {marqueeItems.map((item, index) => (
                <motion.div
                  key={`${item.id}-${index}`}
                  layoutId={index < 20 ? `finish-card-${item.id}` : undefined} // Only assign layoutId to the first 20 to prevent Framer bugs
                  onMouseEnter={() => setHoveredId(item.id)}
                  onClick={() => setSelectedId(item.id)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative shrink-0 w-64 h-[320px] rounded-2xl p-6 flex flex-col justify-between cursor-pointer border border-zinc-800 shadow-2xl transition-all duration-300 ${item.bg} ${item.text} ${
                    hoveredId === item.id ? 'border-zinc-400 ring-2 ring-zinc-500/20' : ''
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono font-bold tracking-widest opacity-60">
                      {item.code}
                    </span>
                    <div className="w-6 h-6 rounded-full border border-current opacity-30" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest block opacity-50 mb-1">
                      Finish Profile
                    </span>
                    <p className="text-xl font-bold tracking-tight">
                      {item.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Screen Expansion Modal */}
      <AnimatePresence>
        {selectedId && popupFinish && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md cursor-pointer"
            />
            
            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4">
              <motion.div
                layoutId={`finish-card-${popupFinish.id}`}
                className={`relative w-full max-w-lg h-[400px] md:h-[500px] rounded-3xl p-8 md:p-12 flex flex-col justify-between shadow-2xl border border-zinc-700 pointer-events-auto overflow-hidden ${popupFinish.bg} ${popupFinish.text}`}
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors backdrop-blur-md text-white"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>

                <div className="flex justify-between items-start">
                  <span className="text-sm font-mono font-bold tracking-widest opacity-60">
                    {popupFinish.code}
                  </span>
                  <div className="w-10 h-10 rounded-full border-2 border-current opacity-30" />
                </div>

                <div className="mt-auto bg-black/10 backdrop-blur-sm p-6 rounded-2xl border border-current/10">
                  <span className="text-xs font-mono uppercase tracking-widest block opacity-60 mb-2">
                    {popupFinish.material} Base
                  </span>
                  <p className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    {popupFinish.name}
                  </p>
                  <p className="text-sm opacity-80 leading-relaxed font-medium">
                    {popupFinish.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}