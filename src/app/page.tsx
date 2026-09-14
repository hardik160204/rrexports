import React from "react";
import Hero from "../../src/components/sections/Hero";
/*import TrustGrid from "../../src/components/sections/TrustGrid";*/
import AboutUsBrief from "../../src/components/sections/AboutUsBrief"; // The new brief section
import BestSellersText from "../../src/components/sections/BestSellersText";
import CategoryGrid from "../../src/components/sections/CategoryGrid";
import StatsSection from "../../src/components/sections/StatsSection";
import FactoryTour from "../../src/components/sections/FactoryTour";
import CoreValues from "../../src/components/sections/CoreValues";
import WhyChooseUs from "../../src/components/sections/WhyChooseUs";
import ContactForm from "../../src/components/sections/ContactForm";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-white">
      {/* 1. HERO SECTION */}
      <Hero />
    
      {/* 3. BRIEF ABOUT US (Links to full page) */}
      <AboutUsBrief />
      {/* 4. SEO / BEST SELLERS TEXT */}
      <BestSellersText />
      {/* 5. PRODUCT CATEGORY GRID */}
      <CategoryGrid />
      {/* 6. COMPANY STATS */}
      <StatsSection />
      {/* 7. FACTORY TOUR */}
      <FactoryTour />
      {/* 8. CORE VALUES */}
      <CoreValues />
      {/* 9. WHY CHOOSE US */}
      <WhyChooseUs />
      {/* 10. CONTACT FORM WITH MAP */}
      <ContactForm />
    </div>
  );
}