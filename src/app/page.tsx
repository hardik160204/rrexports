import React from "react";
import Hero from "../../src/components/sections/Hero";
import TrustGrid from "../../src/components/sections/TrustGrid";
import AboutUsBrief from "../../src/components/sections/AboutUsBrief"; 
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
      <Hero />
      <TrustGrid />
      <AboutUsBrief />
      <BestSellersText />
      <CategoryGrid />
      <StatsSection />
      <FactoryTour />
      <CoreValues />
      <WhyChooseUs />
      <ContactForm />
    </div>
  );
}