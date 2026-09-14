"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function AboutUsBrief() {
  const products = [
    "Cabinet knobs & handles",
    "Cast iron & metal bottle openers",
    "Hooks & shelf brackets",
    "Ceramic knobs",
    "Homeware & décor items"
  ];

  return (
    <section className="w-full bg-white py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          
          {/* TEXT CONTENT: Forced to top on mobile (order-1), sits on left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="order-1 flex flex-col items-start text-left"
          >
            <h2 className="mb-6 text-[10vw] leading-[0.9] tracking-tighter text-black sm:text-6xl font-black uppercase">
              About A.B.<br />Enterprises
            </h2>
            
            <p className="mb-8 text-sm sm:text-base font-medium leading-relaxed text-neutral-600 pr-4">
              Founded in <strong className="text-black">1995 in Aligarh, India</strong>, we are a leading manufacturer and exporter of cast iron, ceramic, brass, aluminum, and metal hardware products.
            </p>

            <div className="mb-8 w-full border-t border-neutral-200 pt-8">
              <p className="mb-5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                Core Manufacturing Range
              </p>
              <ul className="flex flex-col gap-3">
                {products.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="flex h-1.5 w-1.5 shrink-0 items-center justify-center bg-black rounded-full" />
                    <span className="text-sm font-semibold text-black tracking-wide">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mb-10 text-sm font-medium leading-relaxed text-neutral-500 border-l-2 border-black pl-5">
              With fully equipped factories and skilled artisans, we manage every stage of production—from design and tooling to quality control and global export shipping.
            </p>

            <Link 
              href="/about" 
              className="group flex items-center justify-center gap-3 border border-black bg-black px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-transparent hover:text-black active:scale-95"
            >
              Read Full Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* IMAGE CONTENT: Forced below text on mobile (order-2), sits on right on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 relative h-[50vh] sm:h-[600px] w-full bg-neutral-100 overflow-hidden"
          >
            <Image 
              src="/factory-floor.jpg" 
              alt="Artisan crafting hardware at A.B. Enterprises" 
              fill 
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700" 
            />
            
            {/* Subtle inner shadow overlay to give the image depth without cheap CSS borders */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}