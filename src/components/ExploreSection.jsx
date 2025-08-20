import React from 'react';

const ExploreSection = () => {
  return (
    <div className="max-w-[518px] mx-auto px-2 sm:px-0 mt-10 md:!mt-20">
      <h3 className="text-center !text-3xl lg:!text-4xl font-inter font-semibold mb-2 md:!mb-5">
        And Much More to Explore!
      </h3>
      <p className="max-w-2xl text-center text-lg md:text-lg text-gray-700 mb-8">
        Glowpilot is constantly evolving to bring you the best in
        AI-powered ad creation.
      </p>
      <div className="flex justify-center items-center">
        <div className="p-[1px] rounded-full bg-gradient-to-b from-[#FD2AB2] to-[#7141D2] inline-block shadow-[0px_8px_24px_rgba(137,62,243,0.25)]">
          <button className="cursor-pointer px-[32px] py-[15px] rounded-full bg-gradient-to-b from-[#F6EFFF] to-[#DAC1FE] text-black font-inter text-xl transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(253,42,178,0.5),0px_0px_25px_rgba(113,65,210,0.5)]">
            Start Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;