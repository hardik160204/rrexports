import React from "react";
import { Target, Eye, Wrench, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-start bg-white pt-24 pb-32">
      
      {/* Page Header */}
      <div className="w-full bg-black py-20 text-center">
        <h1 className="text-5xl font-black uppercase tracking-tighter text-white">About Us</h1>
        <p className="mt-4 text-sm font-bold uppercase tracking-widest text-gray-400">
          The Foundation of A.B. Enterprises
        </p>
      </div>

      <div className="mx-auto mt-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: Heritage, Mission & Vision */}
        <div className="mb-24 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Heritage & Story */}
          <div className="flex flex-col justify-center">
            <div className="mb-8 border-l-8 border-black pl-6">
              <h2 className="text-4xl font-black tracking-tighter text-black uppercase leading-[1.1]">
                Over 30 Years of <br /> Manufacturing Excellence
              </h2>
            </div>
            
            <div className="flex flex-col gap-6 pl-8 text-base font-medium leading-relaxed text-gray-600">
              <p>
                Established in 1995 in Aligarh, India, A.B. Enterprises is a leading manufacturer and exporter of brass, aluminum, and cast iron builder hardware, decorative hardware, cabinet knobs, Indian handicrafts, and premium homeware products.
              </p>
              <p>
                With over three decades of exporting excellence, we have become a trusted name for buyers worldwide. We operate fully equipped factories with advanced machinery, skilled technicians, and experienced artisans.
              </p>
              <p>
                Our end-to-end process—from design and casting to polishing, packaging, and shipping—allows us to manufacture over 200,000 units per month while maintaining absolute control over our export-grade quality. We proudly serve OEM and bulk buyers across 25+ countries globally.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="flex flex-col gap-8">
            <div className="border-2 border-black bg-gray-50 p-8 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-4 flex items-center gap-4">
                <Target className="h-8 w-8 text-black" strokeWidth={2} />
                <h3 className="text-2xl font-black uppercase tracking-widest text-black">Our Mission</h3>
              </div>
              <p className="text-sm font-medium leading-relaxed text-gray-600">
                To design, manufacture, and export premium-quality hardware products that combine durability, functionality, and traditional craftsmanship. We are committed to continuous innovation and 100% in-house quality control to strictly meet global standards.
              </p>
            </div>

            <div className="border-2 border-black bg-black p-8 sm:p-10 text-white shadow-[8px_8px_0px_0px_rgba(200,200,200,1)]">
              <div className="mb-4 flex items-center gap-4">
                <Eye className="h-8 w-8 text-white" strokeWidth={2} />
                <h3 className="text-2xl font-black uppercase tracking-widest text-white">Our Vision</h3>
              </div>
              <p className="text-sm font-medium leading-relaxed text-gray-300">
                To be recognized globally as the premier Indian manufacturer and exporter of architectural builder hardware, cast iron fittings, and decorative home decor, delivering exceptional value and reliability to international partners.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: Capabilities & Quality Overview */}
        <div className="mb-16 border-t border-b border-gray-200 py-12 text-center">
          <h2 className="mb-6 text-3xl font-black uppercase tracking-tighter text-black">
            Capabilities & Quality
          </h2>
          <p className="mx-auto max-w-4xl text-base font-medium leading-relaxed text-gray-600">
            At A.B. Enterprises, a leading cast iron hardware manufacturer in India, we are capable of producing a wide range of products including builder hardware, cabinet knobs, antique restoration items, homeware, and handicrafts. With 100% in-house production, modern machinery, and skilled artisans, we ensure quality at every stage of manufacturing.
          </p>
        </div>

        {/* SECTION 3: Deep Dive Split (Capabilities vs Quality) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Capabilities Block */}
          <div className="flex flex-col border-2 border-black bg-white p-8 sm:p-12">
            <div className="mb-8 flex items-center gap-4 border-b-4 border-black pb-4">
              <Wrench className="h-10 w-10 text-black" strokeWidth={1.5} />
              <h3 className="text-3xl font-black uppercase tracking-widest text-black">Capabilities</h3>
            </div>
            
            <ul className="flex flex-col gap-6 text-sm font-medium leading-relaxed text-gray-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-black" />
                <span>We manufacture a wide range of products in builder hardware, ironmongery, cabinet knobs, antique restoration hardware, homeware, and handicrafts.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-black" />
                <span>With 100% in-house production, modern machinery, skilled technicians, and experienced artisans, we manage the complete process — from design to final export.</span>
              </li>
            </ul>

            <h4 className="mt-8 mb-4 text-sm font-bold uppercase tracking-widest text-black">We specialize in:</h4>
            <div className="flex flex-col gap-5 border-l-2 border-gray-200 pl-4 text-sm font-medium text-gray-600">
              <p><strong className="text-black">Metal Builder Hardware</strong> – Brass, cast iron, and aluminum items. Our range includes shelf brackets, door knockers, hooks, plaques, trivets, vents, door lever handles, cabinet pullers, knobs, handles, hinges, forged hardware, and lighting shades.</p>
              <p><strong className="text-black">Cabinet Knobs</strong> – Available in ceramic, porcelain, glass, resin, agate, metals, mother of pearl, wood, acrylic, marble, horn, bone, etched designs, jute, and more.</p>
              <p><strong className="text-black">Homeware & Handicrafts</strong> – Photo frames, teaware, coffee mugs, vases, coasters, planters, wind chimes, tealights, flower pots, and many other decorative items.</p>
            </div>
          </div>

          {/* Quality Block */}
          <div className="flex flex-col border-2 border-black bg-gray-50 p-8 sm:p-12">
            <div className="mb-8 flex items-center gap-4 border-b-4 border-black pb-4">
              <ShieldCheck className="h-10 w-10 text-black" strokeWidth={1.5} />
              <h3 className="text-3xl font-black uppercase tracking-widest text-black">Quality</h3>
            </div>

            <p className="mb-6 text-lg font-black uppercase italic tracking-widest text-black">
              "Committed to Quality. Committed to you."
            </p>

            <ul className="flex flex-col gap-5 text-sm font-medium leading-relaxed text-gray-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-black" />
                <span>We maintain strict quality checks at every stage of manufacturing. This commitment has helped us build a strong reputation with international buyers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-black" />
                <span>Every product has its own design and production challenges. From casting to final assembly, we apply specific quality testing parameters. Our Quality Control (QC) team carefully inspects each product at multiple stages. This reduces rejections and ensures perfection until packaging and dispatch.</span>
              </li>
            </ul>

            <h4 className="mt-8 mb-4 text-sm font-bold uppercase tracking-widest text-black">Key quality checks include:</h4>
            <ul className="flex flex-col gap-3 border-l-2 border-gray-300 pl-4 text-sm font-bold text-gray-600">
              <li>• Verifying product dimensions against technical drawings.</li>
              <li>• Testing function and strength at every stage.</li>
              <li>• Ensuring correct barcodes and headers.</li>
              <li>• Maintaining flawless packaging for safe delivery.</li>
            </ul>

            <p className="mt-8 text-sm font-medium leading-relaxed text-gray-600">
              We aim not only for customer satisfaction but for <strong className="text-black">customer delight</strong>. Quality remains our highest priority, strictly upheld by our team in every process.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}