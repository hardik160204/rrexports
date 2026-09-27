"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Globe2, Factory, PackageCheck, ShieldCheck } from "lucide-react";

const heroImages = [
  { desktop: "/hero-1-desktop.jpg", mobile: "/hero-1-mobile.jpg" },
  { desktop: "/hero-2-desktop.png", mobile: "/hero-2-mobile.png" },
  { desktop: "/hero-3-desktop.jpg", mobile: "/trustgridcheck.jpeg" },
];

const SplitBranding = ({ mode }: { mode: "dark" | "light" }) => (
  <div className="flex flex-col items-center justify-center w-full select-none pointer-events-none">
    <div className={`mb-2 sm:mb-6 px-4 sm:px-6 py-1 sm:py-2 text-[8px] sm:text-xs font-bold tracking-[0.4em] uppercase border backdrop-blur-sm ${
      mode === "dark" ? "border-white/30 text-white bg-black/40" : "border-black/30 text-black bg-white/40"
    }`}>
      Export House
    </div>
    
    <h1 className={`text-[11.5vw] sm:text-8xl md:text-[9rem] font-black tracking-tight uppercase leading-none ${
      mode === "dark" 
        ? "text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]" 
        : "text-black drop-shadow-[0_4px_10px_rgba(255,255,255,1)]"
    }`}>
      R.R. Exports
    </h1>

    <div className={`mt-2 sm:mt-4 w-full flex text-[7px] sm:text-[11px] font-bold tracking-[0.3em] sm:tracking-[0.5em] uppercase ${
      mode === "dark" ? "text-neutral-400" : "text-neutral-500"
    }`}>
      <span className="w-1/2 text-right pr-2 sm:pr-3">Committed to Quality.</span>
      <span className="w-1/2 text-left pl-2 sm:pl-3">Committed to You.</span>
    </div>
  </div>
);

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80px", "end start"], 
  });

  // Scroll transforms exclusively for desktop
  const leftDoorX = useTransform(scrollYProgress, [0, 0.3, 1], ["-100%", "0%", "0%"]);
  const rightDoorX = useTransform(scrollYProgress, [0, 0.3, 1], ["100%", "0%", "0%"]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <>
      {/* ========================================= */}
      {/* MOBILE VIEW: Auto-Open, No Empty Scroll Track, Strict 4:3 */}
      {/* ========================================= */}
      <div className="w-full flex flex-col md:hidden mt-20 bg-white">
        
        {/* Strictly 4:3 Image Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-black border-b border-black">
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image 
                  src={heroImages[currentIndex].mobile} 
                  alt={`R.R. Exports Mobile Showcase ${currentIndex + 1}`} 
                  fill
                  priority={currentIndex === 0}
                  className="object-cover object-center select-none"
                />
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Auto-Opening Left Door (Mobile) */}
          <motion.div 
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
            className="absolute left-0 top-0 bottom-0 w-1/2 z-20 overflow-hidden shadow-[20px_0_40px_rgba(0,0,0,0.7)] border-r border-black bg-[#111111]"
          >
            <div className="absolute top-[40%] left-0 w-[100vw] flex justify-center -translate-y-1/2">
              <SplitBranding mode="dark" />
            </div>
            <div className="absolute right-2 top-[75%] -translate-y-1/2 z-30">
              <div className="w-8 h-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#444,_#111_70%,_#000)] shadow-[6px_6px_12px_rgba(0,0,0,0.8),inset_-2px_-2px_4px_rgba(255,255,255,0.15)] border border-[#333] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[radial-gradient(circle_at_70%_70%,_#333,_#000)] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.9)] border border-[#222]" />
              </div>
            </div>
          </motion.div>

          {/* Auto-Opening Right Door (Mobile) */}
          <motion.div 
            initial={{ x: "0%" }}
            animate={{ x: "100%" }}
            transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
            className="absolute right-0 top-0 bottom-0 w-1/2 z-20 overflow-hidden shadow-[-20px_0_40px_rgba(0,0,0,0.1)] border-l border-white bg-[#f4f4f5]"
          >
            <div className="absolute top-[40%] right-0 w-[100vw] flex justify-center -translate-y-1/2">
              <SplitBranding mode="light" />
            </div>
            <div className="absolute left-2 top-[75%] -translate-y-1/2 z-30">
              <div className="w-8 h-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#555,_#111_70%,_#000)] shadow-[6px_6px_12px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.15)] border border-[#333] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[radial-gradient(circle_at_70%_70%,_#333,_#000)] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.9)] border border-[#222]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Horizontal Trust Grid (Stacked immediately underneath, no gaps) */}
        <div className="w-full bg-white py-4 border-b-4 border-black overflow-hidden">
          <div className="mx-auto w-full max-w-7xl px-0 sm:px-6">
            <div className="flex overflow-x-auto snap-x snap-mandatory items-center scrollbar-hide">
              <div className="flex-shrink-0 w-[45%] snap-center flex flex-col items-center gap-2 text-center px-4 border-r border-gray-200">
                <Globe2 className="h-6 w-6 text-black" strokeWidth={1.5} />
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-black">Global Export</h3>
              </div>
              <div className="flex-shrink-0 w-[45%] snap-center flex flex-col items-center gap-2 text-center px-4 border-r border-gray-200">
                <Factory className="h-6 w-6 text-black" strokeWidth={1.5} />
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-black">Direct Factory</h3>
              </div>
              <div className="flex-shrink-0 w-[45%] snap-center flex flex-col items-center gap-2 text-center px-4 border-r border-gray-200">
                <PackageCheck className="h-6 w-6 text-black" strokeWidth={1.5} />
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-black">Wholesale OEM</h3>
              </div>
              <div className="flex-shrink-0 w-[45%] snap-center flex flex-col items-center gap-2 text-center px-4">
                <ShieldCheck className="h-6 w-6 text-black" strokeWidth={1.5} />
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-black">Export Quality</h3>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ========================================= */}
      {/* DESKTOP VIEW: Scroll-To-Open, 150vh Track, Strict 4:3 */}
      {/* ========================================= */}
      <div ref={containerRef} className="relative w-full h-[150vh] hidden md:block mt-20 bg-white">
        <div className="sticky top-20 w-full h-[calc(100vh-80px)] flex flex-col overflow-hidden bg-white border-b border-black">
          
          <div className="relative w-full aspect-[4/3] flex-shrink-0 overflow-hidden bg-black z-10 border-b border-black mx-auto">
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image 
                    src={heroImages[currentIndex].desktop} 
                    alt={`R.R. Exports Desktop Showcase ${currentIndex + 1}`} 
                    fill
                    priority={currentIndex === 0}
                    className="object-cover object-center select-none"
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div 
              style={{ x: leftDoorX }}
              className="absolute left-0 top-0 bottom-0 w-1/2 z-20 overflow-hidden shadow-[20px_0_40px_rgba(0,0,0,0.7)] border-r border-black bg-[#111111]"
            >
              <div className="absolute top-[40%] left-0 w-[100vw] flex justify-center -translate-y-1/2">
                <SplitBranding mode="dark" />
              </div>
              <div className="absolute right-10 top-[75%] -translate-y-1/2 z-30">
                <div className="w-16 h-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#444,_#111_70%,_#000)] shadow-[6px_6px_12px_rgba(0,0,0,0.8),inset_-2px_-2px_4px_rgba(255,255,255,0.15)] border border-[#333] flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[radial-gradient(circle_at_70%_70%,_#333,_#000)] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.9)] border border-[#222]" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              style={{ x: rightDoorX }}
              className="absolute right-0 top-0 bottom-0 w-1/2 z-20 overflow-hidden shadow-[-20px_0_40px_rgba(0,0,0,0.1)] border-l border-white bg-[#f4f4f5]"
            >
              <div className="absolute top-[40%] right-0 w-[100vw] flex justify-center -translate-y-1/2">
                <SplitBranding mode="light" />
              </div>
              <div className="absolute left-10 top-[75%] -translate-y-1/2 z-30">
                <div className="w-16 h-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#555,_#111_70%,_#000)] shadow-[6px_6px_12px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.15)] border border-[#333] flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[radial-gradient(circle_at_70%_70%,_#333,_#000)] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.9)] border border-[#222]" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              style={{ opacity: indicatorOpacity }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-50 pointer-events-none opacity-60"
            >
              <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Scroll
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-400 animate-bounce drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
            </motion.div>
          </div>

          {/* Desktop Static 4-Col Trust Grid */}
          <div className="flex-1 flex flex-col justify-center w-full bg-white overflow-hidden py-6">
            <div className="mx-auto w-full max-w-7xl px-8">
              <div className="grid grid-cols-4 divide-x divide-black items-center">
                <div className="flex flex-col items-center gap-3 text-center px-4">
                  <Globe2 className="h-8 w-8 text-black" strokeWidth={1.5} />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-black">Global Export</h3>
                  <p className="text-[10px] font-medium text-gray-500">USA, UK & Europe</p>
                </div>
                <div className="flex flex-col items-center gap-3 text-center px-4">
                  <Factory className="h-8 w-8 text-black" strokeWidth={1.5} />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-black">Direct Factory</h3>
                  <p className="text-[10px] font-medium text-gray-500">Aligarh Manufacturing</p>
                </div>
                <div className="flex flex-col items-center gap-3 text-center px-4">
                  <PackageCheck className="h-8 w-8 text-black" strokeWidth={1.5} />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-black">Wholesale OEM</h3>
                  <p className="text-[10px] font-medium text-gray-500">Custom Bulk Orders</p>
                </div>
                <div className="flex flex-col items-center gap-3 text-center px-4">
                  <ShieldCheck className="h-8 w-8 text-black" strokeWidth={1.5} />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-black">Export Quality</h3>
                  <p className="text-[10px] font-medium text-gray-500">Strict QA Standards</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}