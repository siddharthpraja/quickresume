import React from "react";
import HeroAnimation from "./aminations/hero";

const HeroPage = () => {
  return (
    <div className="lg:flex items-end justify-center my-10 ">
      <div className="font-extrabold font-sans text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        WELCOME TO QUICK RESUME
      </div>
      <div className="w-1/2">
        <HeroAnimation />
      </div>
    </div>
  );
};

export default HeroPage;
