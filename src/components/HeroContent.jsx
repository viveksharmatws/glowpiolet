import React from "react";
import ShadeHeading from "./ShadeHeading";
import star from "/public/herostar.svg";
import CurvedCarousel from "./CurvedCarousel";

const HeroContent = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-fit mx-auto px-1 sm:px-0">
  <h2
    className="
      font-inter font-semibold text-center
      text-[clamp(32px,6vw,68px)]
      leading-[clamp(42px,7vw,78px)]
      tracking-[-0.0375em]
      text-transparent bg-clip-text 
      bg-[linear-gradient(180deg,#000000_22.5%,rgba(0,0,0,0.7)_100%)]
    "
  >
    Create Beauty Ads That
  </h2>

  <div className="flex justify-center items-center gap-3 mb-2">
    <h2
      className="
        font-inter font-semibold text-center
        text-[clamp(32px,6vw,68px)]
        leading-[clamp(42px,7vw,78px)]
        tracking-[-0.0375em]
        text-transparent bg-clip-text 
        bg-[linear-gradient(180deg,#000000_22.5%,rgba(0,0,0,0.7)_100%)]
      "
    >
      Actually
    </h2>
    <h2
      className="
        glow-heading font-inter font-semibold text-center
        text-[clamp(34px,6vw,68px)]
        leading-[clamp(42px,5vw,78px)]
        tracking-[-0.0375em]
      "
    >
      Glow
    </h2>
  </div>

  <p
    className="text-center text-[#626266] font-inter text-base sm:text-lg lg:text-xl font-normal mb-4 max-w-[442px] md:max-w-[532px] mx-auto"
    style={{
      lineHeight: "32px",
      letterSpacing: "-0.3px",
    }}
  >
    Turn any product or idea into winning ads in seconds.
    <br className="hidden sm:block" />
    Your autopilot for creative growth.
  </p>
          <div className="flex flex-col items-center">
            <div
              style={{
                background: "linear-gradient(180deg, #A466FE 0%, #D234E0 100%)",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
              }}
              className="p-4 font-semibold font-inter rounded-full mx-auto py-4 px-9 mt-1 cursor-pointer 
                   bg-gradient-to-r from-[#FD2AB2] to-[#7141D2] text-white 
                   transition-all duration-300 hover:scale-105 
                   hover:shadow-[0_0_20px_rgba(253,42,178,0.5),0_0_25px_rgba(113,65,210,0.5)]"
            >
              Try For Free
            </div>
            <div className="flex items-center mx-auto mt-3 gap-2">
              <p className="text-base">No credit card required</p>
              <img src={star} alt="star" className="h-3 w-3" />
              <p className="text-base">14-days free trial</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[100vw] w-full mx-auto mt-10 ">
        <CurvedCarousel />
      </div>
    </>
  );
};

export default HeroContent;
