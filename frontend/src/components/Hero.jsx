import React from "react";
const Hero = () => {
  return (
    <div className="bg-hero sm:h-[25rem] md:h-[30rem] object-fill shadow-hero bg-cover bg-center bg-black/40 bg-blend-multiply hero-animation">
      <div className="h-full md:w-3/4 grid place-items-center hero-animation">
        <div className="flex flex-col gap-3">
        <h1 className="font-raleway sm:text-4xl lg:text-5xl font-bold text-slate-100">
          Wanderlust days and cozy nights
        </h1>
        <h3 className="font-raleway sm:text-3xl lg:text-4xl font-bold text-slate-100">Choose from suites, houses and more</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
