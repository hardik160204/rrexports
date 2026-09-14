"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Cabinet Knobs",
    subtitle: "Ceramic, Glass & Resin",
    href: "/catalog?category=cabinet-knobs",
    image: "/category-knobs.jpg", 
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    title: "Door Hardware",
    subtitle: "Knockers & Handles",
    href: "/catalog?category=door-hardware",
    image: "/category-door.jpg", 
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
  {
    title: "Bottle Openers",
    subtitle: "Cast Iron & Brass",
    href: "/catalog?category=bottle-openers",
    image: "/category-openers.jpg", 
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    title: "Hooks & Brackets",
    subtitle: "Wall & Shelf Fittings",
    href: "/catalog?category=hooks",
    image: "/category-hooks.jpg", 
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full border-b border-gray-200 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <div className="flex flex-col border-l-4 border-black pl-4">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-black sm:text-4xl">
              Featured Categories
            </h2>
            <p className="mt-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
              Precision Manufactured in India
            </p>
          </div>
          <Link 
            href="/catalog" 
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:text-gray-500"
          >
            View Full Catalog
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-6 lg:h-[600px]">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-white ${cat.colSpan} ${cat.rowSpan} min-h-[250px] border border-gray-200 block`}
            >
              <Link href={cat.href} className="absolute inset-0 z-20" aria-label={`View ${cat.title}`}>
                <span className="sr-only">View {cat.title}</span>
              </Link>
              
              {/* Image Container - Fixed for uncropped images */}
              <div className="absolute inset-0 z-0 bg-white">
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill 
                  /* 
                     object-contain prevents cropping. 
                     p-6 gives it breathing room from the borders.
                     pb-24 ensures the image sits above the text box so it doesn't get hidden. 
                  */
                  className="object-contain p-6 pb-24 transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              {/* Text Overlay Box */}
              <div className="absolute bottom-0 left-0 z-10 w-full bg-white/95 p-4 backdrop-blur-sm transition-transform duration-300 sm:p-6 border-t border-gray-100">
                <h3 className="text-lg font-black uppercase tracking-widest text-black sm:text-xl">
                  {cat.title}
                </h3>
                <p className="mt-1 text-xs font-bold tracking-wider text-gray-600 uppercase">
                  {cat.subtitle}
                </p>
              </div>
              
              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 z-20 h-1 w-0 bg-black transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}