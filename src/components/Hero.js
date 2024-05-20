import React from "react";
import HeroAnimation from "./aminations/hero";


const HeroPage = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center my-10 space-y-6 lg:space-y-0 lg:space-x-10 px-4">
      <div className="text-start">
        <h1 className="font-extrabold font-sans text-5xl md:text-8xl lg:text-7xl xl:text-9xl bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          WELCOME <br/> TO QUICK <br/> RESUME
        </h1>
      </div>
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 ">
        <HeroAnimation />
      </div>
    </div>
  );
};

export default HeroPage;
