import React from "react";

const BrandAssets = () => {
  const products = [
    { name: "Product Name", img: "/dashboardproduct1.png" },
    { name: "Product Name", img: "/dashboard2.jpg" },
    { name: "Product Name", img: "/dashboard3.jpg" },
    { name: "Product Name", img: "/dashboard4.jpg" },
  ];

  return (
    <section className="flex-1 p-6 space-y-12">
      {/* Title */}
      <h2 className="text-[24px] leading-[17.02px] font-inter font-semibold text-start text-white">
        Set Up Your Brand
      </h2>
      <div className="max-w-[677px] flex flex-col gap-6">
        {/* Brand Name + Logo */}
        <div className="flex flex-col md:!flex-row !gap-6">
          {/* Brand Name */}
          <div className="flex-1">
            <label className="block text-white text-lg text-start font-inter font-light mb-3 leading-[17.02px]">
              Brand Name
            </label>
            <input
              type="text"
              placeholder="Type your Brand Name"
              className="w-full max-w-[400px] bg-[#202328] rounded-lg p-4 
             text-white text-left font-inter-tight font-semibold text-[19px] leading-[24px]
             placeholder-white placeholder-font-inter-tight placeholder-font-semibold placeholder-text-[16px] placeholder-leading-[24px]
             border-2 border-[#FFFFFF5C] focus:outline-none"
            />
          </div>

          {/* Brand Logo */}
          <div className="flex-1">
            <label className="block text-white text-lg text-start font-inter font-light mb-3 leading-[17.02px]">
              Brand logo
            </label>

            <div
              className="
    w-full max-w-[400px] bg-[#FFFFFF0A] rounded-lg p-4
    flex justify-between items-center
    border-2 border-[#FFFFFF5C] border-dotted
    cursor-pointer
    hover:border-[#8267EC] transition
  "
            >
              <img src="/upload.svg" alt="Upload" className="h-7 w-7" />
              <span className="text-white/50 font-inter font-light text-[18px] leading-[24px]">
                Add a character
              </span>
            </div>
          </div>
        </div>

        {/* About Brand (full width) */}
        <div>
          <label className="block text-white text-[19px] leading-[17.02px] font-inter font-light text-start mb-2">
            About Brand
          </label>
          <textarea
            placeholder="Explain your brand, products, mission and vision"
            className="
    w-[674px] h-[127px] bg-[#202328] 
    rounded-[12px] p-[12px] 
    text-white font-inter font-normal text-[16px] leading-[24px] 
    mt-3
    border border-[#FFFFFF5C] opacity-100
    placeholder-white/50 placeholder-font-inter placeholder-font-light placeholder-text-[16px] placeholder-leading-[24px]
    focus:outline-none
  "
          />
        </div>

        {/* Brand Colors */}
        <div className="">
          <label className="block text-white text-[19px] leading-[17.02px] font-inter font-light text-start mb-2">
            Brand Colors
          </label>

          <div className="bg-[#151515] rounded-md p-4 flex flex-col gap-4 border-2 border-[#2A2A2A]">
            <div className="flex items-center gap-4">
              <img src="/whiterectangle.svg" className="w-[79px] h-[79px]" />

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
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
                      className="h-[25px] w-[25px] rounded-full cursor-pointer border border-gray-700"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}

                  <div className="h-[25px] w-[25px] rounded-full  bg-[#7676803D] border-gray-500 flex items-center justify-center text-white text-sm cursor-pointer">
                    <img src="/Plus.svg" className="h-3 w-3" />
                  </div>
                </div>

                {/* Hex Color input */}
                <div className="flex items-center gap-2">
                  <span className="text-[#0094FF] font-inter text-[16px] font-normal">
                    Hex Color #
                  </span>
                  <p
                    className="
    bg-[#29292A] px-3 py-2 rounded-lg 
    font-inter font-semibold 
    text-[12.05px] leading-[15.59px] tracking-[-0.29px] 
    text-center text-white
  "
                  >
                    00000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UGC Characters */}
      <div>
        <label className="block text-white text-[19px] leading-[17.02px] font-inter font-light text-start mb-2">
          UGC Character
        </label>
        <div
          className="flex !flex-nowrap
 gap-4"
        >
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-[#151515] p-4 rounded-lg flex cursor-pointer justify-between w-full max-w-[320px] items-start"
            >
              <div className="relative h-20 w-20">
                <img
                  src="/ugcframe.png"
                  alt="character"
                  className="h-20 w-20 rounded-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 flex-1 ml-4">
                <h2 className="text-white font-inter font-normal text-[20px] leading-[20px]">
                  Disha Hannan
                </h2>

                <p className="text-[#FFFFFFB2] font-inter text-sm leading-[18px]">
                  26 years old
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-white/70 font-inter text-sm leading-[18px]">
                    Skin:
                  </span>
                  <div className="h-4 w-4 rounded-full bg-[#FFDBAC] border border-gray-500"></div>
                  <span className="text-[#FFFFFFB2] font-normal font-inter text-sm leading-[18px]">
                    Navajo White
                  </span>
                </div>
              </div>

              {/* Menu Icon */}
              <button className="ml-3 cursor-pointer">
                <img src="/ThreeDots.png" alt="menu" className="h-5 w-5" />
              </button>
            </div>
          ))}

          <div
            className="
    w-full max-w-[200px] bg-[#202328] rounded-lg p-6
    flex justify-between items-center
    border-2 border-[#FFFFFF5C] border-dotted
    cursor-pointer
    hover:border-[#8267EC] transition
    flex-col
  "
          >
            <img src="/whiteplus.svg" className="w-6 h-6 text-[#FFFFFF]" />
            <span className="text-[#FFFFFF] font-inter font-light text-[18px] leading-[24px]">
              Add a character
            </span>
          </div>
        </div>
      </div>

      {/* Website */}
      <div>
        <label
          className="
    block 
    font-inter font-normal 
    text-[16px] leading-[17.02px] 
    text-white text-start 
    mb-2
  "
        >
          Website
        </label>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="https://"
            className="w-full max-w-[400px] bg-[#202328] rounded-2xl p-4 
             text-[#FFFFFF80] text-left font-inter-tight font-semibold text-[19px] leading-[24px]
              placeholder-font-inter-tight placeholder-font-semibold placeholder-[#FFFFFF80] placeholder-text-[16px] placeholder-leading-[24px]
             border-2 border-[#FFFFFF5C] focus:outline-none"
          />
          <button className="relative overflow-hidden bg-transparent border border-[#8267EC] px-7 py-2 rounded-full flex items-center gap-2 font-inter font-semibold text-[16px] text-[#FFFFFFE5] cursor-pointer hover:!text-white group transition-colors duration-300">
            <span className="absolute inset-0 bg-purple-700 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
            <img
              src="/dashboardstar.svg"
              alt="add image"
              className="h-7 w-7 relative z-10"
            />
            <span className="relative z-10">Analyze</span>
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div>
        <label className="block text-white text-[19px] leading-[17.02px] font-inter font-light text-start mb-2">
          Your Products
        </label>
        <p
          className="
    font-inter font-normal 
    text-[16px] leading-[17.02px] 
    text-white/50 text-start mt-2
  "
        >
          Click on Analyze to get all the products from your website
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-[#202328] p-4 rounded-lg flex flex-col items-start hover:!shadow-lg transition cursor-pointer"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-[192px] h-[137px] object-cover mb-3 rounded-xl"
              />
              <h2 className="!text-white text-lg mb-2 font-inter">
                {product.name}
              </h2>
              <p className="!text-white/70 text-sm mb-3 font-inter">
                This is where the product description goes. This description
                comes from the user’s website.
              </p>
              <button className="relative overflow-hidden bg-transparent border border-[#8267EC] px-5 py-2 mt-auto rounded-full flex items-center gap-2 font-inter font-semibold text-[16px] !text-[#8267EC] cursor-pointer hover:!text-white group transition-colors duration-300">
                <span className="absolute inset-0 bg-purple-700 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                <img
                  src="/dashboardstar.svg"
                  alt="add"
                  className="h-6 w-6 relative z-10"
                />
                <span className="relative z-10">Create Ad</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandAssets;
