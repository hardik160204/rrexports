import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-black bg-black pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand Info */}
          <div className="flex flex-col lg:col-span-1">
            <div className="mb-6 flex flex-col border-l-4 border-white pl-4">
              <h2 className="text-3xl font-black tracking-tighter text-white uppercase">
                A.B.
              </h2>
              <h3 className="text-xl font-black tracking-widest text-white uppercase">
                Enterprises
              </h3>
            </div>
            <p className="mb-6 text-xs font-medium leading-relaxed text-gray-400">
              Leading Manufacturer and Exporter from India. Specializing in premium cabinet knobs, architectural hardware, and authentic cast iron fittings since 1995.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/#contact" className="text-xs font-bold uppercase tracking-widest text-white underline decoration-gray-500 underline-offset-4 transition-colors hover:decoration-white">
                Request Quote
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col lg:col-span-1 lg:pl-8">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-500">
              Navigation
            </h4>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-semibold text-gray-300 transition-colors hover:text-white">Home</Link>
              
              {/* UPDATED: Navigates to the new About page */}
              <Link href="/about" className="text-sm font-semibold text-gray-300 transition-colors hover:text-white">About Us</Link>
              
              <Link href="/catalog" className="text-sm font-semibold text-gray-300 transition-colors hover:text-white">Full Catalog</Link>
              
              {/* UPDATED: Navigates securely back to the homepage contact section */}
              <Link href="/#contact" className="text-sm font-semibold text-gray-300 transition-colors hover:text-white">Contact</Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="flex flex-col lg:col-span-1">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-500">
              Top Categories
            </h4>
            <nav className="flex flex-col gap-4">
              <Link href="/catalog?category=cabinet-knobs" className="text-sm font-semibold text-gray-300 transition-colors hover:text-white">Cabinet Knobs</Link>
              <Link href="/catalog?category=door-hardware" className="text-sm font-semibold text-gray-300 transition-colors hover:text-white">Door Hardware</Link>
              <Link href="/catalog?category=bottle-openers" className="text-sm font-semibold text-gray-300 transition-colors hover:text-white">Bottle Openers</Link>
              <Link href="/catalog?category=hooks" className="text-sm font-semibold text-gray-300 transition-colors hover:text-white">Hooks & Brackets</Link>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col lg:col-span-1">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-500">
              Factory & Office
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm font-semibold text-gray-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />
                <span>
                  Aligarh, Uttar Pradesh<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-gray-300">
                <Phone className="h-4 w-4 shrink-0 text-gray-500" />
                <a href="tel:+918851894100" className="transition-colors hover:text-white">+91 88518 94100</a>
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-gray-300">
                <Mail className="h-4 w-4 shrink-0 text-gray-500" />
                <a href="mailto:info@abeexports.com" className="transition-colors hover:text-white">info@abeexports.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-xs font-medium text-gray-500">
            © {new Date().getFullYear()} A.B. Enterprises. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <Link href="#" className="text-xs font-medium text-gray-500 transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="#" className="text-xs font-medium text-gray-500 transition-colors hover:text-white">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}