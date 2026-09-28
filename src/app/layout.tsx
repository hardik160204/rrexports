import type { Metadata } from "next";
import "../../src/app/globals.css";
import Navbar from "../../src/components/layout/Navbar";
import Footer from "../../src/components/layout/Footer";
import FloatingWidgets from "../../src/components/layout/FloatingWidgets";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "A.B. Enterprises | Premium Hardware Manufacturer",
  description: "Leading Manufacturer and Exporter from India. Specializing in premium cabinet knobs, architectural hardware, and authentic cast iron fittings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen bg-white text-black antialiased selection:bg-black selection:text-white">
        {/* Global Navigation */}
        <Navbar />
        
        {/* Page Content */}
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
        
        {/* Global Footer */}
        <Footer />

        {/* Global Floating Actions (WhatsApp & Chat) */}
        <FloatingWidgets />
      </body>
    </html>
  );
}