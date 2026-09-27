"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ChevronDown, ArrowRight, Home, Building2, Layers, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const productCategories = [
  "Bottle Openers", "Cabinet Handle", "Cabinet Knobs", "Door Hardware",
  "Drawer Pulls", "Handles", "HINGES", "Home Wares", "Hooks",
  "Kitchen Trivets", "Numerals", "PLANT HANGERS", "Shelf Brackets",
  "Toilet Paper Holder", "Vents & Registers", "Wall Plaques"
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Helper to determine if a mobile tab is active
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* ========================================= */}
      {/* DESKTOP TOP HEADER (Untouched) */}
      {/* ========================================= */}
      <header 
        className={`hidden md:block fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-gray-100" 
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center z-50">
            <div className="relative h-20 w-64">
              <Image 
                src="/rr-logo.png" 
                alt="R.R. Exports Logo" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <nav className="flex items-center gap-8 h-full">
            <Link href="/" className="text-[11px] font-bold uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors">Home</Link>
            <Link href="/about" className="text-[11px] font-bold uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors">About Us</Link>
            
            <div 
              className="group relative flex h-full items-center"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-colors group-hover:text-gray-500 cursor-default">
                Products <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              <AnimatePresence>
                {showMegaMenu && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 10 }} 
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 top-20 w-[800px] -translate-x-1/2 border-t-2 border-black bg-white p-10 shadow-2xl"
                  >
                    <div className="grid grid-cols-3 gap-y-5 gap-x-10">
                      {productCategories.map((cat) => (
                        <Link key={cat} href={`/catalog?category=${cat.toLowerCase().replace(/\s+/g, '-')}`} className="group/item flex items-center justify-between border-b border-gray-100 pb-2 hover:border-black transition-all">
                          <span className="text-[13px] font-semibold text-gray-500 group-hover/item:text-black transition-colors">{cat}</span>
                          <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-black" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/finishes" className="text-[11px] font-bold uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors">Finishes</Link>
            <Link href="/#contact" className="text-[11px] font-bold uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors">Contact</Link>
          </nav>
          <a href="https://wa.me/918851894100" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-black bg-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-black transition-all hover:bg-black hover:text-white active:scale-95 z-50">
            <MessageCircle className="h-4 w-4" /> Inquire
          </a>
        </div>
      </header>

      {/* ========================================= */}
      {/* MOBILE & TABLET MINIMAL TOP BAR (Logo Centered) */}
      {/* ========================================= */}
      <div className={`md:hidden fixed top-0 inset-x-0 z-40 h-20 transition-colors duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-100" : "bg-transparent"}`}>
        <div className="h-full w-full flex items-center justify-center">
          <Link href="/" className="relative h-16 w-48" onClick={closeMenu}>
            <Image 
              src="/rr-logo.png" 
              alt="R.R. Exports Logo" 
              fill 
              className="object-contain object-center"
              priority
            />
          </Link>
        </div>
      </div>

      {/* ========================================= */}
      {/* MOBILE APP-LIKE BOTTOM TAB BAR (Active States Added) */}
      {/* ========================================= */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-[400px]">
        <div className="bg-[#111111] rounded-full px-6 py-3 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.6)] border border-[#333]">
          
          <Link 
            href="/" 
            onClick={closeMenu} 
            className={`flex flex-col items-center gap-1 transition-colors ${isActive('/') ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
          >
            <Home className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-[9px] uppercase tracking-wider font-bold">Home</span>
          </Link>

          <Link 
            href="/about" 
            onClick={closeMenu} 
            className={`flex flex-col items-center gap-1 transition-colors ${isActive('/about') ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
          >
            <Building2 className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-[9px] uppercase tracking-wider font-bold">About</span>
          </Link>

          <Link 
            href="/catalog" 
            onClick={closeMenu} 
            className={`flex flex-col items-center gap-1 transition-colors ${isActive('/catalog') ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
          >
            <Layers className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-[9px] uppercase tracking-wider font-bold">Products</span>
          </Link>

          <Link 
            href="/#contact" 
            onClick={closeMenu} 
            className={`flex flex-col items-center gap-1 transition-colors ${isActive('/#contact') ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
          >
            <Phone className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-[9px] uppercase tracking-wider font-bold">Contact</span>
          </Link>

          <button 
            onClick={toggleMenu} 
            className={`flex flex-col items-center gap-1 transition-colors ${isOpen ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-[9px] uppercase tracking-wider font-bold">Menu</span>
          </button>
          
        </div>
      </div>

      {/* ========================================= */}
      {/* MOBILE RIGHT-SIDE SLIDE-OUT DRAWER */}
      {/* ========================================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[60] w-[85%] max-w-sm bg-white shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
                <span className="text-xl font-black uppercase tracking-widest text-black">Menu</span>
                <button onClick={closeMenu} className="p-2 -mr-2 text-black hover:text-gray-500 transition-colors">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col space-y-6">
                <Link href="/" onClick={closeMenu} className={`text-xl font-bold uppercase tracking-widest border-b border-gray-100 pb-4 ${isActive('/') ? 'text-black' : 'text-gray-400'}`}>Home</Link>
                <Link href="/about" onClick={closeMenu} className={`text-xl font-bold uppercase tracking-widest border-b border-gray-100 pb-4 ${isActive('/about') ? 'text-black' : 'text-gray-400'}`}>About Us</Link>
                <Link href="/finishes" onClick={closeMenu} className={`text-xl font-bold uppercase tracking-widest border-b border-gray-100 pb-4 ${isActive('/finishes') ? 'text-black' : 'text-gray-400'}`}>Finishes</Link>
                <Link href="/catalog" onClick={closeMenu} className={`text-xl font-bold uppercase tracking-widest border-b border-gray-100 pb-4 ${isActive('/catalog') ? 'text-black' : 'text-gray-400'}`}>Capabilities</Link>
                <Link href="/#contact" onClick={closeMenu} className={`text-xl font-bold uppercase tracking-widest border-b border-gray-100 pb-4 ${isActive('/#contact') ? 'text-black' : 'text-gray-400'}`}>Contact</Link>
                <div className="pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 block">Categories</span>
                  <div className="flex flex-col space-y-5">
                    {productCategories.map((cat) => (
                      <Link 
                        key={cat} 
                        href={`/catalog?category=${cat.toLowerCase().replace(/\s+/g, '-')}`} 
                        onClick={closeMenu} 
                        className="text-sm font-semibold text-gray-600 hover:text-black transition-colors"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white border-t border-gray-100 mt-auto pb-24">
                <a 
                  href="https://wa.me/918851894100" 
                  target="_blank" 
                  rel="noreferrer" 
                  onClick={closeMenu} 
                  className="flex w-full items-center justify-center gap-3 bg-black py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg active:scale-95 transition-transform"
                >
                  Start An Inquiry
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}