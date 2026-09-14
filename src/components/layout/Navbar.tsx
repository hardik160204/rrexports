"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle, ChevronDown, ArrowRight } from "lucide-react";
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

  // Handle scroll effect for premium glassmorphism transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header 
        className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-gray-100" 
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center z-50" onClick={closeMenu}>
            <div className="relative h-16 w-48 sm:h-20 sm:w-64">
              <Image 
                src="/rr-logo.png" 
                alt="R.R. Exports Logo" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex h-full">
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

          {/* Action Buttons */}
          <div className="flex items-center gap-4 z-50">
            <a href="https://wa.me/918851894100" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 border border-black bg-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-black transition-all hover:bg-black hover:text-white active:scale-95">
              <MessageCircle className="h-4 w-4" /> Inquire
            </a>
            
            {/* Mobile Hamburger Button */}
            <button 
              onClick={toggleMenu} 
              className="flex h-12 w-12 items-center justify-center bg-black text-white transition-transform active:scale-95 md:hidden"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Flawless Full-Screen Mobile Takeover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex h-screen w-screen flex-col overflow-y-auto bg-white px-6 pb-20 pt-32 md:hidden"
          >
            <div className="flex flex-col space-y-8">
              <Link href="/" onClick={closeMenu} className="text-2xl font-black uppercase tracking-widest text-black">Home</Link>
              <Link href="/about" onClick={closeMenu} className="text-2xl font-black uppercase tracking-widest text-black">About Us</Link>
              
              <div className="border-t border-gray-200 pt-6">
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 block">Products</span>
                <div className="flex flex-col space-y-5 pl-2">
                  {productCategories.map((cat) => (
                    <Link 
                      key={cat} 
                      href={`/catalog?category=${cat.toLowerCase().replace(/\s+/g, '-')}`} 
                      onClick={closeMenu} 
                      className="text-lg font-semibold text-gray-800 hover:text-black flex items-center justify-between"
                    >
                      {cat}
                      <ArrowRight className="h-4 w-4 text-gray-300" />
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 flex flex-col space-y-8">
                <Link href="/finishes" onClick={closeMenu} className="text-2xl font-black uppercase tracking-widest text-black">Finishes</Link>
                <Link href="/#contact" onClick={closeMenu} className="text-2xl font-black uppercase tracking-widest text-black">Contact</Link>
              </div>

              {/* Mobile WhatsApp CTA inside menu */}
              <a href="https://wa.me/918851894100" target="_blank" rel="noreferrer" onClick={closeMenu} className="mt-8 flex w-full items-center justify-center gap-3 bg-black py-4 text-xs font-bold uppercase tracking-widest text-white">
                <MessageCircle className="h-4 w-4" /> Message on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}