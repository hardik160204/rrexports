'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WheelCarousel } from '@/src/components/ui/wheel-carousel';

const allFinishes = [
  { id: '01', name: 'Antique Brass', code: 'AB-01', material: 'Brass', desc: 'Warm vintage tone with golden brown hues — ideal for classic décor.', bg: 'bg-zinc-800', text: 'text-zinc-200' },
  { id: '02', name: 'Matte Black', code: 'MB-02', material: 'Iron / Aluminum', desc: 'Sleek, modern, and elegant — suits contemporary interiors.', bg: 'bg-zinc-950', text: 'text-white' },
  { id: '03', name: 'Satin Nickel', code: 'SN-03', material: 'Brass / Zinc', desc: 'Smooth silver-gray tone — durable and fingerprint-resistant.', bg: 'bg-zinc-300', text: 'text-black' },
  { id: '04', name: 'Copper Finish', code: 'CF-04', material: 'Copper', desc: 'A rich, reddish tone that brings warmth and luxury.', bg: 'bg-zinc-900', text: 'text-zinc-300' },
  { id: '05', name: 'Gold / Brass Polish', code: 'GP-05', material: 'Brass', desc: 'Bright and bold — for traditional and premium designs.', bg: 'bg-zinc-100', text: 'text-black' },
  { id: '06', name: 'Pewter / Antique Silver', code: 'PS-06', material: 'Zinc Alloy', desc: 'Soft metallic gray for timeless appeal.', bg: 'bg-zinc-400', text: 'text-black' },
  { id: '07', name: 'Rust / Vintage Iron', code: 'RV-07', material: 'Cast Iron', desc: 'Raw, industrial-style finish with aged texture.', bg: 'bg-black', text: 'text-zinc-400' },
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
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFinish = allFinishes[activeIndex % allFinishes.length] || allFinishes[0];

  const carouselItems = allFinishes.map((finish) => ({
    label: finish.name,
    image: `/finishes/placeholder-${finish.id}.jpg`, 
    imageAlt: `${finish.name} swatch`,
  }));

  return (
    <div className="w-full min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col lg:flex-row pt-20 lg:pt-0 overflow-hidden">
      
      {/* Dynamic Command Center */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center px-6 lg:px-16 z-10 order-2 lg:order-1 h-[50vh] lg:h-screen pb-12 lg:pb-0 bg-black">
        
        <div className="mb-12 hidden lg:block">
          <h1 className="text-5xl xl:text-6xl font-bold tracking-tighter uppercase mb-4">
            Finishes
          </h1>
          <p className="text-zinc-400 max-w-sm text-sm font-light">
            Scroll to explore our extensive catalog of architectural metal finishes.
          </p>
        </div>

        <div className="flex flex-col space-y-6">
          <span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">
            Selected Specification
          </span>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFinish.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-2"
            >
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
                {activeFinish.name}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 mb-6">
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">
                  {activeFinish.code}
                </span>
                <span>Base: {activeFinish.material}</span>
              </div>
              
              <p className="text-zinc-300 text-sm leading-relaxed border-l-2 border-zinc-700 pl-4 max-w-md">
                {activeFinish.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Wheel Carousel Container */}
      <div className="w-full lg:w-[60%] h-[50vh] lg:h-screen relative order-1 lg:order-2 flex items-center justify-center overflow-hidden bg-black">
        <div className="w-full h-full scale-[0.85] lg:scale-100">
          <WheelCarousel 
            items={carouselItems} 
            onChange={(index: number) => setActiveIndex(index)} 
            mode="dark" // Forces the component to use its built-in dark theme
          />
        </div>
      </div>
    </div>
  );
}