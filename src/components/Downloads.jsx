import React from "react";

const Downloads = () => {
  const downloads = [
    {
      name: "Product Demo",
      img: "/DashboardProduct1.jpg",
      duration: "30 sec",
      aspect: "1:1",
      aspectImg: "/border11.svg",
    },
    {
      name: "UGC Ad",
      img: "/template2.png",
      duration: "30 sec",
      aspect: "9:16",
      aspectImg: "/border916.svg",
    },
    {
      name: "Tutorial/How-To Ads",
      img: "/template3.png",
      duration: "30 sec",
      aspect: "16:9",
      aspectImg: "/border169.svg",
    },
    {
      name: "Problem/Solution Ads",
      img: "/template4.png",
      duration: "30 sec",
      aspect: "1:1",
      aspectImg: "/border11.svg",
    },
  ];

  return (
    <section className="flex-1 p-2 sm:!p-5 space-y-8">
      {/* Title */}
      <h2 className="text-xl sm:!text-2xl font-inter font-semibold text-start text-white">
        Downloads
      </h2>

      {/* Downloads Grid */}
      <div className="grid grid-cols-2 sm:!grid-cols-2 lg:!grid-cols-4 gap-2 sm:!gap-6 mb-[40px] md:!mb-[80px]">
        {downloads.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#202328] rounded-lg flex flex-col items-start cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-[137px] sm:!h-[180px] lg:!h-[200px] mb-3 max-w-[210px]">
              <img
                src={item.img}
                alt={item.name}
                className="h-full object-cover rounded-xl w-full"
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
                <img src={item.aspectImg} className="h-4 w-4" />
                {item.aspect}
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-1 rounded-md text-white text-xs sm:!text-sm font-inter font-normal bg-black/40">
                {item.duration}
              </div>
            </div>

            {/* Content */}
            <h2 className="text-white text-base sm:!text-lg text-start mb-2 font-inter font-normal">
              {item.name}
            </h2>

            {/* Download Button */}
            <button className="flex items-center gap-2 md:!gap-3 bg-transparent cursor-pointer border-2 font-bold font-inter border-[#FFFFFF] hover:bg-[#3A3E44] px-2 sm:!px-3.5 py-2 rounded-md font-inter text-white text-sm sm:text-base transition-colors duration-300">
              Download
              <img src="/download2.svg" className="h-5 w-5 md:!h-6 md:!w-6" />
            </button>
          </div>
        ))}
      </div>

            {/* Downloads Grid */}
      <div className="grid grid-cols-2 sm:!grid-cols-2 lg:!grid-cols-4 gap-3 sm:!gap-5">
        {downloads.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#202328] rounded-lg flex flex-col items-start cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-[137px] sm:!h-[180px] lg:!h-[200px] mb-3 max-w-[210px]">
              <img
                src={item.img}
                alt={item.name}
                className="h-full object-cover rounded-xl w-full"
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
                <img src={item.aspectImg} className="h-4 w-4" />
                {item.aspect}
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-1 rounded-md text-white text-xs sm:!text-sm font-inter font-normal bg-black/40">
                {item.duration}
              </div>
            </div>

            {/* Content */}
            <h2 className="text-white text-base sm:!text-lg text-start mb-2 font-inter font-normal">
              {item.name}
            </h2>

            {/* Download Button */}
            <button className="flex items-center gap-2 md:!gap-3 bg-transparent border-2 font-bold font-inter border-[#FFFFFF] hover:bg-[#3A3E44] px-2 sm:!px-3.5 py-2 rounded-md font-inter text-white text-sm sm:text-base transition-colors duration-300 cursor-pointer">
              Download
              <img src="/download2.svg" className="h-5 w-5 md:!h-6 md:!w-6" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Downloads;
