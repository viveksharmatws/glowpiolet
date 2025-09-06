import React from "react";
import ShadeHeading from "./ShadeHeading";
import LaunchAdsCard from "./LaunchAdsCard";

const GlowUpSection = () => {
  return (
    <>
      <div className="text-center px-2 mt-16 md:mt-[150px]">
        <h2 className="text-4xl md:text-5xl font-inter font-semibold leading-tight">
          The{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Glow Up
          </span>
        </h2>

        <div className="flex mx-auto justify-center items-center leading-tight">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter leading-tight mr-3 inline font-inter font-semibold">
            Your Brand Deserved
          </h2>
              </div>

        <p className=" mx-auto text-lg md:text-xl text-gray-700 mb-8 max-w-[488px]">
          Go from struggling with creative to scaling with confidence.
        </p>
      </div>

<div className="grid grid-cols-1 sm:!grid-cols-2 gap-4 sm:gap-7 main-wrapper w-fit px-2">
  <LaunchAdsCard heading="Launch Ads 10x Faster" description="Stop waiting on designers or agencies. Go from idea to campaign in minutes, not weeks." imageSrc="/rocket.png" />
  <LaunchAdsCard heading="Slash Creative Costs" description="Get unlimited ad variations without the cost of shoots, models, or expensive software." imageSrc="/slashcost.png" />
  <LaunchAdsCard heading="End Creative Burnout" description="Never run out of fresh ideas. Our AI is your endless source of inspiration and ad concepts." imageSrc="/creativeidea.png" />
  <LaunchAdsCard heading="Actually See What Works" description="Stop guessing. A/B test creatives effortlessly and use real data to find your winning ads." imageSrc="/arrowshot.png" />
</div>

    </>
  );
};

export default GlowUpSection;
