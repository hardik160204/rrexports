"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    "OEM & Custom Manufacturing Available",
    "Bulk Orders & Wholesale Supply",
    "Factory-direct pricing",
    "High-precision quality & export-grade finishing",
    "Secure packaging for international shipping",
    "Fast dispatch and timely delivery",
    "24/7 support via WhatsApp and email"
  ];

  return (
    <section className="w-full border-t border-gray-200 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">
          
          {/* LEFT SIDE: Heading & Trust Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            <div className="mb-6 border-l-8 border-black pl-6">
              <h2 className="text-4xl font-black tracking-tighter text-black sm:text-5xl lg:text-6xl leading-[1.1]">
                WHY GLOBAL <br />
                BUYERS <br />
                CHOOSE US
              </h2>
            </div>
            
            <p className="mb-8 text-base font-medium text-gray-600 pl-8 max-w-md">
              We combine traditional craftsmanship with modern technology to deliver exceptional hardware. Our products are trusted across <strong className="text-black text-lg">25+ countries</strong>, including the USA, UK, Europe, Australia, and the Middle East.
            </p>

            <div className="flex flex-col items-start gap-4 pl-8">
              <Link 
                href="#contact" 
                className="group flex items-center justify-center gap-3 bg-black px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-gray-800 active:scale-95 shadow-[6px_6px_0px_0px_rgba(200,200,200,1)]"
              >
                Send Inquiry
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Features Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col bg-gray-50 p-8 sm:p-12 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <ul className="flex flex-col gap-6">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4 border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-black text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-black pt-1">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}