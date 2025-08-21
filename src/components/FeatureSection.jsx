import React from "react";
import OurCustomers from "./OurCustomers";
import ShadeHeading from "./ShadeHeading";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const FeaturesSection = () => {
  const FIRST_IMAGE = {
    imageUrl: "/airetouching.jpg",
  };

  const SECOND_IMAGE = {
    imageUrl: "/UGC.jpg",
  };
  return (
    <div
      style={{
        backgroundImage: `url('/herobg.jpg')`,
      }}
    >
      <OurCustomers />

      <div className="">
        <section className="w-full">
          <div className="mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-12 px-1 sm:px-0">
              <h2 className="text-3xl sm:!text-4xl md:!text-5xl font-inter font-semibold text-gray-900 max-w-[400px] md:!max-w-[580px] mx-auto">
                Key Features That Make Your Ads Shine
              </h2>

              <p
                className="text-center align-middle text-[#626266] font-inter font-normal mb-4 mx-auto mt-4 text-base sm:!text-lg lg:text-lg  max-w-[400px] md:!max-w-[520px]"
                style={{
                  lineHeight: "32px",
                  letterSpacing: "-0.3px",
                }}
              >
                Everything you need to create stunning, high-converting beauty
                ads that truly shine.
              </p>
            </div>
            <div className="flex flex-col gap-16 lg:gap-28">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-5 sm:gap-11 lg:gap-32 max-w-[100%] md:!px-4 md:!pr-0">
                <div className="w-full max-w-[595px] ml-auto col-span-2 sm:!col-span-1 px-2">
                  <h3 className="!text-2xl lg:!text-4xl text-center sm:!text-start leading-[38px] lg:leading-[48px] font-semibold font-inter text-transparent bg-clip-text bg-gradient-to-b from-black to-black/70 tracking-[-1.5px]">
                    Stunning Beauty Templates, Tailored for Impact
                  </h3>
                  <p className="text-lg text-gray-700 mt-4 text-center sm:!text-start">
                    Access a rich library of high-converting, beauty-centric
                    templates designed to highlight your products and captivate
                    your audience.
                  </p>
                  <img
                    src="/youtube.png"
                    className="mt-6 rounded-lg shadow-md"
                    alt="Video preview"
                    width="540px"
                  />
                </div>

                <div className="w-full col-span-2 sm:!col-span-1">
                <div className="px-2">

                  <h3 className="!text-2xl lg:!text-4xl text-center sm:!text-start leading-[38px] md:leading-[48px] max-w-[445px] font-semibold font-inter text-transparent bg-clip-text bg-gradient-to-b from-black to-black/70 tracking-[-1.5px]">
                    Transform Your Website into Ad Gold
                  </h3>
                  <p className="text-lg text-gray-700 mt-4 max-w-[617px] mb-10 text-center sm:!text-start">
                    Seamlessly connect your brand's website. Our intelligent AI
                    identifies key content and Products and generates compelling
                    ad markers, turning existing assets into powerful
                    advertisements.
                  </p>
                </div>
                  <div>
                    <img
                      src="/website-top.png"
                      className="rounded-lg shadow-md"
                      alt="Video preview"
                    />
                    <img
                      src="/arrowdown.svg"
                      className="rounded-lg shadow-md"
                      alt="Video preview"
                      style={{ position: "relative", left: "53px" }}
                    />
                    <img
                      src="/website-bottom.png"
                      className="rounded-lg shadow-md w-full"
                      alt="Video preview"
                    />
                  </div>
                </div>
              </div>
              <div className="main-wrapper grid grid-cols-2 md:grid-cols-2 gap-7 sm:gap-11 lg:gap-32 max-w-[1440px] mx-auto px-2">
                <div className="w-full max-w-[595px] col-span-2 sm:!col-span-1">
                  <h3 className="!text-2xl lg:!text-4xl text-center sm:!text-start leading-[38px] md:!leading-[48px] font-semibold font-inter text-transparent bg-clip-text bg-gradient-to-b from-black to-black/70 tracking-[-1.5px]">
                    AI Retouching for Picture-Perfect Results
                  </h3>
                  <p className="text-lg text-gray-700 mt-4 mb-7 text-center sm:!text-start">
                    Our advanced AI ensures every ad showcases perfect skin,
                    with automatic skin tone matching, blemish removal, a
                    natural glow, and impressive before-and-after
                    transformations.
                  </p>

                  <ReactBeforeSliderComponent
                    firstImage={SECOND_IMAGE}
                    secondImage={SECOND_IMAGE}
                  />
                </div>

                <div className="w-full max-w-[595px] col-span-2 sm:!col-span-1">
                  <h3 className="!text-2xl lg:!text-4xl lleading-[38px] md:!leading-[48px] text-center sm:!text-start max-w-[655px] font-semibold font-inter text-transparent bg-clip-text bg-gradient-to-b from-black to-black/70 tracking-[-1.5px]">
                    Create Custom UGC Characters for Authentic Ads
                  </h3>
                  <p className="text-lg text-gray-700 mt-4 max-w-[617px] mb-10 text-center sm:!text-start">
                    Our advanced AI ensures every ad showcases perfect skin,
                    with automatic skin tone matching, blemish removal, a
                    natural glow, and impressive before-and-after
                    transformations.
                  </p>
                  <div>
                    <img
                      src="/UGC.jpg"
                      className="rounded-lg shadow-md"
                      alt="Video preview"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturesSection;