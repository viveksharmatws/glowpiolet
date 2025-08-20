import React from "react";
import ShadeHeading from "./ShadeHeading";
import Launchcard from "./Launchcard";

const PricingSection = () => {
  return (
    <div className="text-center lg:px-4   mt-20 sm:!mt-[150px]">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-semibold leading-[120%] bg-gradient-to-b from-black to-black/70 bg-clip-text text-transparent text-center">
        Simple and Transparent Pricing
      </h2>

      <p className="mx-auto mt-5 text-lg md:text-xl text-gray-700 mb-8 max-w-[682px] sm:mb-20">
        Choose a plan that fits your business needs and budget. No hidden fees,
        no surprises—just straightforward pricing.
      </p>

      <div className=" pricing-container grid grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 gap-3 px-2 lg:px-3 lg:gap-20 ">
        <Launchcard />
        <Launchcard />
        <Launchcard />
      </div>
    </div>
  );
};

export default PricingSection;
