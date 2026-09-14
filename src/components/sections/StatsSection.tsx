"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Calendar, Package, Factory, Award } from "lucide-react";

// A reusable counter component that animates from 0 to the target number
interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          setDisplayValue(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  // Format with commas (e.g., 600,000)
  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function StatsSection() {
  const stats = [
    {
      icon: <Calendar className="h-8 w-8 mb-4 text-black" strokeWidth={1.5} />,
      value: 1995,
      label: "Established Since",
      suffix: "",
      // Start from 1900 so the year doesn't spin wildly from 0
      from: 1900, 
    },
    {
      icon: <Package className="h-8 w-8 mb-4 text-black" strokeWidth={1.5} />,
      value: 5000,
      label: "Product Range",
      suffix: "+",
      from: 0,
    },
    {
      icon: <Factory className="h-8 w-8 mb-4 text-black" strokeWidth={1.5} />,
      value: 600000,
      label: "Production Rate",
      suffix: "",
      from: 0,
    },
    {
      icon: <Award className="h-8 w-8 mb-4 text-black" strokeWidth={1.5} />,
      value: 30,
      label: "Years Experience",
      suffix: "",
      from: 0,
    },
  ];

  return (
    <section className="w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Responsive Grid: 1 col (mobile) -> 2 cols (tablet) -> 4 cols (desktop) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-lg transition-transform hover:-translate-y-1"
            >
              {stat.icon}
              <div className="text-4xl font-black tracking-tighter text-black sm:text-5xl">
                <AnimatedCounter 
                  from={stat.from} 
                  to={stat.value} 
                  suffix={stat.suffix} 
                  duration={2.5} 
                />
              </div>
              <h3 className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}