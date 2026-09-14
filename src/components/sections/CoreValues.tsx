"use client";

import React from "react";
import { motion } from "framer-motion";
import { PenTool, ShieldCheck, Truck, Tags, Handshake, Headset } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Designing & Developing",
      desc: "Our team designs innovative hardware and handicrafts, blending traditional artistry with modern technology to create unique products."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Superior Quality",
      desc: "Every product is crafted with precision and strict quality checks, ensuring long-lasting durability and unmatched performance."
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Timely Delivery",
      desc: "Count on us for prompt and reliable shipping. We respect your time and guarantee on-schedule delivery worldwide."
    },
    {
      icon: <Tags className="h-6 w-6" />,
      title: "Competitive Prices",
      desc: "Get premium hardware and handicrafts at the best prices, offering true value without compromising on quality."
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Trust & Credibility",
      desc: "Built on transparency and integrity, A.B. Enterprises has earned the trust of customers across 25+ countries."
    },
    {
      icon: <Headset className="h-6 w-6" />,
      title: "Free Consultation",
      desc: "Our experts are available 24/7 on WhatsApp and email for free guidance and personalized consultation."
    }
  ];

  return (
    <section className="w-full border-t border-gray-200 bg-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl font-black tracking-tighter text-black sm:text-5xl">
            Our Core Values
          </h2>
          <p className="mt-2 text-sm font-bold uppercase tracking-widest text-gray-500">
            The Foundation of A.B. Enterprises
          </p>

          {/* Decorative Handshake Divider matching the image */}
          <div className="mt-8 flex w-full max-w-lg items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <Handshake className="h-5 w-5 text-black" />
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>
        </motion.div>

        {/* The Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start border-2 border-black bg-white p-8 transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center bg-black text-white">
                {value.icon}
              </div>
              <h3 className="mb-3 text-lg font-black uppercase tracking-widest text-black">
                {value.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-gray-600">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}