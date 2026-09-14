"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function BestSellersText() {
  const categories = [
    "Bottle Openers (Cast Iron & Metal)",
    "Shelf Brackets",
    "Cabinet & Ceramic Knobs",
    "Brass Handles, Hooks & Home Décor"
  ];

  return (
    <section className="w-full border-b border-gray-200 bg-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 lg:items-center">
          
          {/* LEFT SIDE: Heavy Typography & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            <div className="mb-6 border-l-8 border-black pl-6">
              <h2 className="text-4xl font-black tracking-tighter text-black sm:text-5xl lg:text-6xl leading-[1.1]">
                BEST-SELLING <br />
                DECORATIVE <br />
                HARDWARE
              </h2>
            </div>
            <p className="mb-10 text-sm font-bold uppercase tracking-widest text-gray-500 pl-8">
              For International Markets
            </p>
            
            <div className="flex flex-col items-start gap-4 pl-8">
              <Link 
                href="/catalog" 
                className="group flex items-center justify-center gap-3 bg-black px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-gray-800 active:scale-95 shadow-[6px_6px_0px_0px_rgba(220,220,220,1)]"
              >
                Our Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Bulk orders & custom manufacturing available
              </span>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Structured List & Text Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col bg-gray-50 p-8 sm:p-12 border-2 border-gray-200"
          >
            <p className="mb-8 text-sm font-medium leading-relaxed text-gray-600 sm:text-base">
              Explore our top categories for homes, retail, and commercial projects. We combine traditional craftsmanship with modern manufacturing to deliver export-grade hardware.
            </p>

            <ul className="mb-10 flex flex-col gap-5">
              {categories.map((item, index) => (
                <li key={index} className="flex items-start gap-4 border-b border-gray-200 pb-5 last:border-0 last:pb-0">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-black text-white">
                    <ChevronRight className="h-3 w-3" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-black">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-black pt-6">
              <p className="text-sm font-medium text-gray-600">
                We accept <strong className="text-black">bulk orders, custom designs, wholesale supply and OEM requirements.</strong>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}