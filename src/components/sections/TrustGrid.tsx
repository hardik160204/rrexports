import React from "react";
import { Globe2, Factory, PackageCheck, ShieldCheck } from "lucide-react";

export default function TrustGrid() {
  return (
    <section className="w-full border-b border-black bg-white py-6 md:py-12 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-0 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 md:divide-x md:divide-black items-center scrollbar-hide pb-4 md:pb-0">
          
          <div className="flex-shrink-0 w-[55%] sm:w-[45%] md:w-full snap-center flex flex-col items-center gap-2 md:gap-3 text-center px-4 md:px-2 border-r border-gray-200 md:border-none">
            <Globe2 className="h-6 w-6 sm:h-8 sm:w-8 text-black" strokeWidth={1.5} />
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black">Global Export</h3>
            <p className="text-[10px] font-medium text-gray-500 hidden md:block">USA, UK & Europe</p>
          </div>

          <div className="flex-shrink-0 w-[55%] sm:w-[45%] md:w-full snap-center flex flex-col items-center gap-2 md:gap-3 text-center px-4 md:px-2 border-r border-gray-200 md:border-none">
            <Factory className="h-6 w-6 sm:h-8 sm:w-8 text-black" strokeWidth={1.5} />
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black">Direct Factory</h3>
            <p className="text-[10px] font-medium text-gray-500 hidden md:block">Aligarh Manufacturing</p>
          </div>

          <div className="flex-shrink-0 w-[55%] sm:w-[45%] md:w-full snap-center flex flex-col items-center gap-2 md:gap-3 text-center px-4 md:px-2 border-r border-gray-200 md:border-none">
            <PackageCheck className="h-6 w-6 sm:h-8 sm:w-8 text-black" strokeWidth={1.5} />
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black">Wholesale OEM</h3>
            <p className="text-[10px] font-medium text-gray-500 hidden md:block">Custom Bulk Orders</p>
          </div>

          <div className="flex-shrink-0 w-[55%] sm:w-[45%] md:w-full snap-center flex flex-col items-center gap-2 md:gap-3 text-center px-4 md:px-2">
            <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-black" strokeWidth={1.5} />
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black">Export Quality</h3>
            <p className="text-[10px] font-medium text-gray-500 hidden md:block">Strict QA Standards</p>
          </div>

        </div>
      </div>
    </section>
  );
}