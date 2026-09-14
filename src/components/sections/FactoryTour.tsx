"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const processes = [
  {
    step: "01",
    title: "Casting & Molding",
    description: "Raw brass and iron are melted and poured into custom molds with absolute precision.",
  },
  {
    step: "02",
    title: "Polishing & Finishing",
    description: "Each piece is hand-polished and treated for rust resistance, creating our signature antique and modern finishes.",
  },
  {
    step: "03",
    title: "Ceramic Hand-Painting",
    description: "Our artisans meticulously hand-paint ceramic knobs before they are kiln-fired for durability.",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description: "Every single unit passes a strict multi-point inspection before it is approved for global export.",
  },
];

export default function FactoryTour() {
  return (
    <section id="process" className="w-full border-t border-gray-200 bg-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">
          
          {/* LEFT COLUMN: The Process Steps */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="mb-10 flex flex-col border-l-4 border-black pl-4 sm:pl-6">
              <h2 className="text-4xl font-black tracking-tighter text-black uppercase sm:text-5xl">
                Direct From <br/> The Factory
              </h2>
              <p className="mt-4 text-xs font-bold tracking-widest text-gray-500 uppercase">
                Aligarh, Uttar Pradesh — India
              </p>
            </div>

            <p className="mb-12 text-sm font-medium leading-relaxed text-gray-600 sm:text-base">
              We do not outsource. From melting raw metal to the final protective packaging, every step of our manufacturing process happens in-house. This gives us complete control over OEM customization and quality standards.
            </p>

            <div className="flex flex-col gap-8">
              {processes.map((item, index) => (
                <motion.div 
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black bg-white text-sm font-black text-black transition-colors group-hover:bg-black group-hover:text-white">
                      {item.step}
                    </span>
                    {/* Connecting Line (hidden on the last item) */}
                    {index !== processes.length - 1 && (
                      <div className="mt-4 h-full w-[2px] bg-gray-200" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-black uppercase tracking-widest text-black flex items-center gap-2">
                      {item.title}
                      <CheckCircle2 className="h-4 w-4 text-gray-300 transition-colors group-hover:text-black" />
                    </h3>
                    <p className="mt-2 text-sm font-medium text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Massive Factory Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full border-2 border-black bg-gray-100 lg:h-[800px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
          >
            {/* 
               Once you have a great photo of the factory floor or workers, 
               place it in the public folder and update the src below. 
            */}
            <div className="absolute inset-0 bg-gray-200">
               {
               <Image 
                 src="/factory-floor.jpg" 
                 alt="A.B. Enterprises Factory Floor" 
                 fill 
                 className="object-cover grayscale" 
               /> 
               }
               <div className="flex h-full w-full items-center justify-center text-center text-xs font-bold uppercase tracking-widest text-gray-400 p-8">
                 [ Insert High-Res Factory / Worker Image Here ] <br/><br/> Note: Image will be automatically styled to match the site.
               </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 border-2 border-black bg-white p-6 shadow-lg sm:-bottom-8 sm:-left-8">
              <span className="block text-4xl font-black text-black">100%</span>
              <span className="mt-1 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                In-House Production
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}