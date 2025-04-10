import React from "react";
import Services from "./Services";
import Features from "./Features";
import Testimonials from "./Testimonials";
import HeroSection from "./HeroSection";

const Body = () => {
  return (
    <div className="px-[20px] flex flex-col gap-[30px]">
      <HeroSection />
      <div className="flex flex-col gap-[15px]">
        <Services />
        <Features />
        <Testimonials />
      </div>
    </div>
  );
};

export default Body;
