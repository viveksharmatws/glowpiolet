import React from "react";


const OurCustomers = () => {
  const logos = [
    { src: "/vitalslogo.jpg", alt: "Vitals" },
    { src: "/hubspotlogo.jpg", alt: "HubSpot" },
    { src: "/veganiclogo.jpg", alt: "Veganic" },
    { src: "/zumperlogo.jpg", alt: "Zumper" },
    { src: "/newsbreaklogo.jpg", alt: "NewsBreak" },
  ];

  // Duplicate for infinite effect
  const loopLogos = [...logos, ...logos, ...logos];

  return (
    <div className="my-20 mt-0 carousel-wrapper">
      <div className="w-full flex flex-row items-center gap-5 lg:gap-16 px-4">
        {/* Left: Heading */}
        <p className=" text-base md:text-xl font-inter font-semibold mb-0  min-w-[100px] lg:min-w-[200px]">
          Supporting today’s <br />
          <span className="text-pink-500 font-bold">top brands</span>
        </p>

        {/* Right: Scrolling logos */}
        <div className="flex-1 overflow-hidden">
          <div className="marquee">
            <div className="marquee-inner">
              {loopLogos.map((logo, i) => (
                <div key={i} className="marquee-item">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className=" w-24 lg:w-[132px] lg:h-[35px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCustomers;
