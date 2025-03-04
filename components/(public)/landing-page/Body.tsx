import React from "react";
import Services from "./Services";
import Features from "./Features";
import Testimonials from "./Testimonials";
import HeroSection from "./HeroSection";

const Body = () => {
  return (
    <div className="flex flex-col gap-[35px]">
      <HeroSection />
      <Services />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Body;
