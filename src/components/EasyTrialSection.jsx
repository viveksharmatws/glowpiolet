import React from "react";
import PricingSection from "./PricingSection";

const TrialTimeline = () => {
  return (
    <div className="text-center px-2 md:px-0 !mt-30 md:!mt-[150px] max-w-[1268px] mx-auto">
      {/* Keep your existing headings */}
      <h2 className="text-3xl sm:!text-4xl md:!text-5xl font-inter font-semibold leading-tight">
        Your Free Trial{" "}
      </h2>
      <h2 className="text-3xl sm:!text-4xl md:!text-5xl font-inter font-semibold leading-tight">
        Made{" "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          Easy
        </span>
      </h2>
      <p className="mx-auto text-lg md:text-xl text-gray-700 mb-8 max-w-[488px]">
        Go from struggling with creative to scaling with confidence.
      </p>
      {/* CTA */}
      <div className="flex justify-center items-center mb-16">
        <div className="p-[1px] rounded-full bg-gradient-to-b from-[#FD2AB2] to-[#7141D2] inline-block shadow-[0px_8px_24px_rgba(137,62,243,0.25)]">
          <button className="cursor-pointer px-[32px] py-[15px] rounded-full bg-gradient-to-b from-[#F6EFFF] to-[#DAC1FE] text-black font-inter text-xl transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(253,42,178,0.5),0px_0px_25px_rgba(113,65,210,0.5)]">
            Start Today
          </button>
        </div>
      </div>

      <div className="relative flex justify-between items-start main-wrapper mx-auto px-2 lg:px-4">
        {/* Connecting line only between icons */}
        <div
          className="absolute top-[25px] left-[14.66%] right-[14.66%] h-0 z-0"
          style={{
            borderTop: "1px solid",
            borderImageSource:
              "linear-gradient(90deg, #48C8FF 0%, #893EF3 100%)",
            borderImageSlice: 1,
          }}
        ></div>

        {/* Step 1 */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-xs">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-[20px]"
            style={{
              borderImageSource:
                "linear-gradient(137.12deg, rgba(216, 216, 216, 0.025) -0.08%, rgba(72, 200, 255, 0.2) 98.5%)",
              borderImageSlice: 1,
              boxShadow:
                "8px 4px 16px rgba(0, 0, 0, 0.08), 0px 0px 8px rgba(13, 238, 252, 0.32) inset",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            <img src="/lock.png" alt="Lock Icon" className=" h-6" />
          </div>
          <h3 className="mt-4 font-bold font-inter !text-3xl lg:text-xl">Today</h3>
          <p className="text-gray-600 font-inter text-sm lg:text-base mt-2 max-w-[363px]">
            Unlock the full suite of AI tools and create your first winning ad in minutes.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-xs">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-[20px]"
            style={{
              borderImageSource:
                "linear-gradient(137.12deg, rgba(216, 216, 216, 0.025) -0.08%, rgba(72, 200, 255, 0.2) 98.5%)",
              borderImageSlice: 1,
              boxShadow:
                "8px 4px 16px rgba(0, 0, 0, 0.08), 0px 0px 8px rgba(13, 238, 252, 0.32) inset",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            <img src="/bellicon.png" alt="Bell Icon" className="h-6" />
          </div>
          <h3 className="mt-4 font-bold font-inter !text-3xl lg:text-xl">Day 7</h3>
          <p className="text-gray-600 font-inter px-1 lg:px-0 text-sm lg:text-base mt-2 max-w-[363px]">
            We’ll send a friendly reminder so you stay in control. No surprises.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-xs">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-[20px]"
            style={{
              borderImageSource:
                "linear-gradient(137.12deg, rgba(216, 216, 216, 0.025) -0.08%, rgba(72, 200, 255, 0.2) 98.5%)",
              borderImageSlice: 1,
              boxShadow:
                "8px 4px 16px rgba(0, 0, 0, 0.08), 0px 0px 8px rgba(13, 238, 252, 0.32) inset",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            <img src="/staricon.png" alt="Star Icon" className=" h-6" />
          </div>
          <h3 className="mt-4 font-bold font-inter !text-3xl lg:text-xl">Day 14</h3>
          <p className="text-gray-600 font-inter text-sm lg:text-base mt-2 max-w-[363px]">
            Your trial ends. Choose a plan to keep growing, or cancel with a single click.
          </p>
        </div>
      </div>
      <PricingSection />
    </div>
  );
};

export default TrialTimeline;
