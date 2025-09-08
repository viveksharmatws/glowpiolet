import React, { useState } from "react";
import DashboardProductSection from "./DashboardProductSection";
import CreateCharacterModal from "./CreateCharacter";

const BrandAssets = () => {
  const products = [
    { name: "Product Name", img: "/dashboardproduct1.png" },
    { name: "Product Name", img: "/dashboard2.jpg" },
    { name: "Product Name", img: "/dashboard3.jpg" },
    { name: "Product Name", img: "/dashboard4.jpg" },
  ];
  const colors = [
    "#D17CFF",
    "#C77EFF",
    "#8267EC",
    "#5A3FE3",
    "#B388FF",
    "#F39C12",
    "#F28B82",
    "#EA4335",
    "#FF7043",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#000000");

  return (
    <section className="flex-1 p-3 sm:p-5 space-y-10">
      {/* Title */}
      <h2 className="text-xl sm:!text-2xl font-inter font-semibold text-start text-white mb-[40px] md:!mb-[60px]">
        Set Up Your Brand
      </h2>
      <div className="w-full max-w-[650px] flex flex-col gap-8">
        {/* Brand Name + Logo */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Brand Name */}
          <div className="flex-1">
            <label className="block text-white text-base sm:text-lg font-inter font-light mb-3">
              Brand Name
            </label>
            <input
              type="text"
              placeholder="Type your Brand Name"
              className="w-full bg-[#202328] rounded-lg p-3 sm:p-2.5 
              text-white font-inter-tight font-semibold text-base sm:text-lg
              placeholder-white/70 border border-[#FFFFFF5C] focus:outline-none placeholder:font-semibold"
            />
          </div>

          {/* Brand Logo */}
          <div className="flex-1">
            <label className="block text-white text-base sm:text-lg font-inter font-light mb-3">
              Brand logo
            </label>
            <div
              className="w-full bg-[#FFFFFF0A] rounded-lg p-3 sm:p-2.5 
              flex justify-between items-center border-2 border-[#FFFFFF5C] border-dotted
              cursor-pointer hover:border-[#8267EC] transition !px-7"
            >
              <span className="text-white/50 font-inter text-sm sm:text-base font-normal">
                Upload your brand logo
              </span>
              <img
                src="/upload.svg"
                alt="Upload"
                className="h-[22px] w-[22px]"
              />
            </div>
          </div>
        </div>

        {/* About Brand */}
        <div>
          <label className="block text-white text-base sm:text-lg font-inter font-light mb-2">
            About Brand
          </label>
          <textarea
            placeholder="Explain your brand, products, mission and vision"
            className="w-full h-32 sm:h-40 bg-[#202328] 
            rounded-lg p-3 sm:p-4 
            text-white font-inter text-sm sm:text-base
            border border-[#FFFFFF5C] placeholder-white/50 focus:outline-none"
          />
        </div>

        {/* Brand Colors */}
        <div>
          <label className="block text-white text-base sm:text-lg font-inter font-light mb-2">
            Brand Colors
          </label>

          <div className="bg-[#151515] rounded-md p-4 flex flex-col gap-4 border border-[#2A2A2A]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Dynamic Color Block */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-md border border-gray-700 transition-colors duration-300"
                style={{ backgroundColor: selectedColor }}
              ></div>

              <div className="flex flex-col gap-4">
                {/* Color Options */}
                <div className="flex flex-wrap items-center gap-2">
                  {colors.map((color, idx) => (
                    <div
                      key={idx}
                      className={`h-6 w-6 rounded-full border cursor-pointer ${
                        selectedColor === color
                          ? "border-blue-500"
                          : "border-gray-700"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    ></div>
                  ))}

                  {/* Add Custom Color */}
                  <div
                    className="h-6 w-6 rounded-full bg-[#7676803D] flex items-center justify-center border border-gray-500 cursor-pointer"
                    onClick={() => {
                      const userColor = prompt(
                        "Enter a hex color (e.g. #FF5733):"
                      );
                      if (
                        userColor &&
                        /^#([0-9A-F]{3}){1,2}$/i.test(userColor)
                      ) {
                        setSelectedColor(userColor);
                      }
                    }}
                  >
                    <img src="/Plus.svg" className="h-3 w-3" />
                  </div>
                </div>

                {/* Show Selected Hex */}
                <div className="flex items-center gap-2">
                  <span className="text-[#0094FF] text-sm sm:text-base">
                    Hex Color #
                  </span>
                  <p className="bg-[#29292A] px-3 py-1 rounded-lg font-inter text-xs sm:text-sm text-white">
                    {selectedColor.replace("#", "").toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UGC Characters */}
      <div>
        <label className="block text-white text-base sm:text-lg font-inter font-light mb-2">
          UGC Character
        </label>
        <div className="flex flex-wrap sm:!flex-nowrap gap-2 lg:!gap-4">
        <div>
          
        </div>
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-[#151515] p-4 rounded-lg flex flex-col sm:flex-row cursor-pointer w-full items-center sm:items-start gap-2 md:!gap-4 md:!max-w-[300px]"
            >
              <img
                src="/ugcframe.png"
                alt="character"
                className="h-15 w-15 rounded-full object-cover"
              />

              <div className="flex items-start w-full gap-2">
                {/* Text Column */}
                <div className="flex flex-col gap-2 flex-1 min-w-0 text-center sm:text-left">
                  <h2 className="text-white text-base md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                    Disha Hannan
                  </h2>
                  <p className="text-white/70 text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    26 years old
                  </p>

                  <div className="flex items-center justify-center sm:justify-start gap-2 flex-nowrap">
                    <span className="text-white/70 text-sm whitespace-nowrap">
                      Skin:
                    </span>
                    <div className="h-4 w-4 rounded-full bg-[#FFDBAC] border border-gray-500 flex-shrink-0"></div>
                    <span className="text-white/70 text-sm whitespace-nowrap">
                      Navajo White
                    </span>
                  </div>
                </div>

                {/* Three Dots Button */}
                <button className="mt-2 sm:mt-0 flex-shrink-0 p-0 self-start">
                  <img src="/ThreeDots.png" alt="menu" className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
          <div
            className="w-full sm:w-[200px] bg-[#FFFFFF0A] rounded-lg p-6 flex flex-col items-center justify-center border-2 border-[#FFFFFF1F] border-dotted cursor-pointer hover:border-[#8267EC]"
            onClick={() => setIsModalOpen(true)}
          >
            <img src="/whiteplus.svg" className="w-6 h-6" />
            <span className="text-white text-sm mt-2 text-center">
              Add a character
            </span>
          </div>
        </div>
      </div>
      {/* Website */}
      <div>
        <label className="block text-white text-sm sm:text-base mb-2">
          Website
        </label>
        <div className="flex flex-row gap-2 md:!gap-3 max-w-[500px]">
          <input
            type="text"
            placeholder="https://"
            className="w-full bg-[#202328] rounded-xl p-3 sm:p-2.5  text-white/80 text-sm sm:text-base border border-[#FFFFFF5C] focus:outline-none"
          />
          <button className="relative overflow-hidden bg-transparent border border-[#8267EC] px-6 md:!px-10 py-2 rounded-full flex items-center justify-center gap-1 md:!gap-2 font-inter text-white/90 hover:bg-purple-700 hover:text-white transition ">
            <img src="/dashboardstar.svg" alt="analyze" className="h-5 w-5 md:h-6 md:w-6" />
           <p className="text-sm md:!text-base">
            Analyze
           </p> 
          </button>
        </div>
      </div>
      <section>
        <div className="flex flex-col justify-start items-start mb-4">
          <h2 className="text-[14px] sm:!text-[16px] leading-[16px] tracking-[0.02em] text-start text-white font-normal font-inter align-middle">
            Your Products
          </h2>
          <p className="text-[#FFFFFF80] text-sm sm:!text-base text-start mb-2 font-inter font-normal mt-2">
            Click on Analyze to get all the products from your website
          </p>
        </div>
        <div className="grid grid-cols-2  sm:!grid-cols-2 lg:!grid-cols-4 gap-3 sm:!gap-6">
          {products.map((product, idx) => (
            <div key={idx}>
              <img
                src={product.img}
                alt={product.name}
                className="w-[192px] h-[137px] object-cover mb-3 rounded-xl"
              />

              <h2 className="text-white text-xl text-start mb-2 font-inter">
                Product Name
              </h2>

              <p className="text-[#FFFFFFB2] text-sm text-start mb-2 font-inter">
                This where the product description goes. This description comes
                from the user’s website.
              </p>
              <button className="relative overflow-hidden bg-transparent border border-[#8267EC] px-2 sm:!px-6 py-3 mt-auto rounded-full flex items-center gap-2 font-inter font-normal text-[16px] text-[#FFFFFFCC] cursor-pointer hover:!text-white group transition-colors duration-300">
                <span className="absolute inset-0 bg-purple-700 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                <img
                  src="/dashboardstar.svg"
                  alt="add image"
                  className="h-5 w-5 sm:!h-7 sm:!w-7 relative z-10"
                />
                <span className="relative z-10 text-sm md:!text-base">Create Ad</span>
              </button>
            </div>
          ))}
        </div>
      </section>{" "}
      <CreateCharacterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default BrandAssets;
