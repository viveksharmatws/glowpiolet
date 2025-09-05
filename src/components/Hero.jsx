import React from "react";
import Header from "./Header";
import HeroContent from "./HeroContent";
import FlowDiagram from "./FlowDiagram";

const Hero = () => {
  return (
    <div
      className="hero-background flex flex-col gap-12 lg:gap-20 mb-16 lg:mb-36"
      style={{
        backgroundImage: `url('/herobg.jpg')`,
      }}
    >
      <Header />
      <HeroContent />
      <div>
        <div className="w-fit mx-auto p-1 sm:p-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter text-center font-semibold leading-tight mb-4">
            From a{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Simple
            </span>{" "}
            Spark <br />
            To the{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Spotlight
            </span>{" "}
          </h2>

          <p className="max-w-[458px] font-inter text-base sm:!text-xl text-center text-gray-700 mb-0 md:!mb-8 mx-auto">
          The simple magic behind ads that glow – finally revealed.
          </p>
        </div>
      </div>
      <FlowDiagram />
    </div>
  );
};

export default Hero;
