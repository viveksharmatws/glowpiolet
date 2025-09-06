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

    const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <section className="flex-1 p-3 sm:p-5 space-y-10">
      {/* Title */}
      <h2 className="text-xl sm:!text-2xl font-inter font-semibold text-start text-white mb-2">
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
              className="w-full bg-[#202328] rounded-lg p-3 sm:p-4 
              text-white font-inter-tight font-semibold text-base sm:text-lg
              placeholder-white/70 border border-[#FFFFFF5C] focus:outline-none"
            />
          </div>

          {/* Brand Logo */}
          <div className="flex-1">
            <label className="block text-white text-base sm:text-lg font-inter font-light mb-3">
              Brand Logo
            </label>
            <div
              className="w-full bg-[#FFFFFF0A] rounded-lg p-4
              flex justify-between items-center border-2 border-[#FFFFFF5C] border-dotted
              cursor-pointer hover:border-[#8267EC] transition"
            >
              <img src="/upload.svg" alt="Upload" className="h-7 w-7" />
              <span className="text-white/50 font-inter text-sm sm:text-base">
                Add a character
              </span>
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
              <img
                src="/whiterectangle.svg"
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    "#D17CFF",
                    "#C77EFF",
                    "#8267EC",
                    "#5A3FE3",
                    "#B388FF",
                    "#F39C12",
                    "#F28B82",
                    "#EA4335",
                    "#FF7043",
                  ].map((color, idx) => (
                    <div
                      key={idx}
                      className="h-6 w-6 rounded-full border border-gray-700 cursor-pointer"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                  <div className="h-6 w-6 rounded-full bg-[#7676803D] flex items-center justify-center border border-gray-500 cursor-pointer">
                    <img src="/Plus.svg" className="h-3 w-3" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0094FF] text-sm sm:text-base">
                    Hex Color #
                  </span>
                  <p className="bg-[#29292A] px-3 py-1 rounded-lg font-inter text-xs sm:text-sm text-white">
                    00000
                  </p>
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
          <div className="flex flex-wrap sm:!flex-nowrap gap-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-[#151515] p-4 rounded-lg flex flex-col sm:flex-row cursor-pointer w-full items-center sm:items-start gap-4"
              >
                <img
                  src="/ugcframe.png"
                  alt="character"
                  className="h-15 w-15 rounded-full object-cover"
                />

                <div className="flex items-start">
                  <div className="flex flex-col gap-2 flex-1 text-center sm:text-left">
                    <h2 className="text-white text-base md:!text-base">
                      Disha Hannan
                    </h2>
                    <p className="text-white/70 text-sm">26 years old</p>

                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <span className="text-white/70 text-sm">Skin:</span>
                      <div className="h-4 w-4 rounded-full bg-[#FFDBAC] border border-gray-500"></div>
                      <span className="text-white/70 text-sm">
                        Navajo White
                      </span>
                    </div>
                  </div>

                  <button className="mt-2 sm:mt-0 self-start sm:ml-3">
                    <img src="/ThreeDots.png" alt="menu" className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
            <div className="w-full sm:w-[200px] bg-[#202328] rounded-lg p-6 flex flex-col items-center justify-center border-2 border-[#FFFFFF5C] border-dotted cursor-pointer hover:border-[#8267EC]" onClick={()=> setIsModalOpen(true)}>
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
          <div className="flex flex-col sm:flex-row gap-3 max-w-[500px]">
            <input
              type="text"
              placeholder="https://"
              className="w-full bg-[#202328] rounded-xl p-3 sm:p-4 text-white/80 text-sm sm:text-base border border-[#FFFFFF5C] focus:outline-none"
            />
            <button className="relative overflow-hidden bg-transparent border border-[#8267EC] px-10 py-2 rounded-full flex items-center justify-center gap-2 font-inter text-white/90 hover:bg-purple-700 hover:text-white transition">
              <img src="/dashboardstar.svg" alt="analyze" className="h-6 w-6" />
              Analyze
            </button>
          </div>
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
            <div
              key={idx}
              className="bg-[#202328] p-0 sm:!p-4 rounded-lg flex flex-col items-start hover:shadow-lg transition cursor-pointer"
            >
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

              <button className="relative overflow-hidden bg-transparent border border-[#8267EC] px-2 sm!px-5 py-2 mt-auto rounded-full flex items-center gap-2 font-inter font-semibold text-[16px] text-[#8267EC] cursor-pointer hover:!text-white group transition-colors duration-300">
                <span className="absolute inset-0 bg-purple-700 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                <img
                  src="/dashboardstar.svg"
                  alt="add image"
                  className="h-5 w-5 sm:!h-7 sm:!w-7 relative z-10"
                />
                <span className="relative z-10">Create Ad</span>
              </button>
            </div>
          ))}
        </div>
      </section>{" "}
      <CreateCharacterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default BrandAssets;
