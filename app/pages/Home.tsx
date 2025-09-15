import React from "react";
import HeroCarousel from "../components/ui/HeroCarousel";
import GenerateSection from "../components/ui/GenerateSection";

const HomePage = () => {
  return (
    <main className="container mx-auto px-4 py-[10rem] h-full">
      <HeroCarousel />
      <GenerateSection />
    </main>
  );
};

export default HomePage;
