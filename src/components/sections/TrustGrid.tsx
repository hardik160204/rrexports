import React from "react";
import { Globe2, Factory, PackageCheck, ShieldCheck } from "lucide-react";

export default function TrustGrid() {
  return (
    <section className="w-full border-b border-black bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:divide-x md:divide-black">
          
          <div className="flex flex-col items-center gap-3 text-center px-2 sm:px-4">
            <Globe2 className="h-6 w-6 sm:h-8 sm:w-8 text-black" strokeWidth={1.5} />
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black">Global Export</h3>
            <p className="text-[10px] font-medium text-gray-500 hidden sm:block">USA, UK & Europe</p>
          </div>

          <div className="flex flex-col items-center gap-3 text-center px-2 sm:px-4">
            <Factory className="h-6 w-6 sm:h-8 sm:w-8 text-black" strokeWidth={1.5} />
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black">Direct Factory</h3>
            <p className="text-[10px] font-medium text-gray-500 hidden sm:block">Aligarh Manufacturing</p>
          </div>

          <div className="flex flex-col items-center gap-3 text-center px-2 sm:px-4">
            <PackageCheck className="h-6 w-6 sm:h-8 sm:w-8 text-black" strokeWidth={1.5} />
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black">Wholesale OEM</h3>
            <p className="text-[10px] font-medium text-gray-500 hidden sm:block">Custom Bulk Orders</p>
          </div>

          <div className="flex flex-col items-center gap-3 text-center px-2 sm:px-4">
            <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-black" strokeWidth={1.5} />
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black">Export Quality</h3>
            <p className="text-[10px] font-medium text-gray-500 hidden sm:block">Strict QA Standards</p>
          </div>

        </div>
      </div>
    </section>
  );
}