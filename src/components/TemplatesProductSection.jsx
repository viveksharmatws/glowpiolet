import React from "react";

const TemplatesProductSection = () => {
  const templates = [
    {
      name: "Product Demo",
      img: "/DashboardProduct1.jpg",
      duration: "30 sec",
      aspect: "1:1",
      aspectImg: "/border11.svg",
      description:
        "This is a product demo video that showcases a beauty product. This ad is for social media.",
    },
    {
      name: "UGC Ad",
      img: "/template2.png",
      duration: "30 sec",
      aspect: "9:16",
      aspectImg: "/border916.svg",
      description:
        "This is a UGC ad format designed to engage audiences with authentic content.",
    },
    {
      name: "Tutorial/How-To Ads",
      img: "/template3.png",
      duration: "30 sec",
      aspect: "16:9",
      aspectImg: "/border169.svg",
      description:
        "A tutorial or how-to ad format that explains product use cases.",
    },
    {
      name: "Problem/Solution Ads",
      img: "/template4.png",
      duration: "30 sec",
      aspect: "1:1",
      aspectImg: "/border11.svg",
      description:
        "An ad format highlighting a problem and showing your product as the solution.",
    },
  ];

  return (
    <section>
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[14px] sm:!text-[16px] leading-[16px] tracking-[0.02em] text-start text-white/70 font-medium font-inter">
          Start With A Template
        </h2>

        <a
          href="#"
          className="text-[14px] sm:!text-[16.18px] leading-[21.57px] text-white/90 font-medium font-inter flex gap-3 items-center border-b-2 border-transparent hover:border-white transition-all duration-200"
        >
          Explore All Templates{" "}
          <img src="/dashboardarrow.svg" alt="arrow" className="h-4 w-4" />
        </a>
      </div>

      <div className="border w-full border-[#FFFFFF1F] mb-2"></div>

      {/* Templates Grid */}
      <div className="grid grid-cols-2 sm:!grid-cols-2 lg:!grid-cols-4 gap-3 sm:!gap-5">
        {templates.map((template, idx) => (
          <div
            key={idx}
            className="bg-[#202328] p-0 sm:!p-4 sm:!px-0 rounded-lg flex flex-col items-start  cursor-pointer"
          >
            {/* Image Section */}
            <div className="relative w-full max-w-[192px] h-[137px] sm:!h-[180px] lg:!h-[200px] mb-3">
              <img
                src={template.img}
                alt={template.name}
                className=" h-full object-cover rounded-xl w-[192px]"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-2 sm:!p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:!h-8 sm:!w-8 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Aspect Ratio & Duration */}
              <div className="absolute bottom-2 left-2 px-2 py-1 rounded-md text-white text-xs sm:!text-sm font-inter font-normal flex items-center gap-1 bg-black/40">
                <img src={template.aspectImg} className="h-4 w-4" />
                {template.aspect}
              </div>

              <div className="absolute bottom-2 right-2 px-2 py-1 rounded-md text-white text-xs sm:!text-sm font-inter font-normal bg-black/40">
                {template.duration}
              </div>
            </div>

            {/* Content */}
            <h2 className="text-white text-base sm:!text-xl text-start mb-2 font-inter">
              {template.name}
            </h2>

            <p className="text-[#FFFFFFB2] text-sm text-start mb-2 font-inter">
              {template.description}
            </p>

            {/* Try Button */}
            <button className="bg-[#F33EE7] hover:bg-[#da62d2] px-4 py-2 sm:px-5 sm:py-2 mt-auto rounded-md flex items-center gap-2 font-inter font-semibold text-[15px] sm:text-[16px] text-white cursor-pointer transition-colors duration-300">
              Try
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TemplatesProductSection;
