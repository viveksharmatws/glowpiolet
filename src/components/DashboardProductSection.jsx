import React from "react";

const DashboardProductSection = () => {
  const products = [
    { name: "Product Name", img: "/dashboardproduct1.png" },
    { name: "Product Name", img: "/dashboard2.jpg" },
    { name: "Product Name", img: "/dashboard3.jpg" },
    { name: "Product Name", img: "/dashboard4.jpg" },
  ];

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[14px] sm:!text-[16px] leading-[16px] tracking-[0.02em] text-start text-white/70 font-medium font-inter align-middle">
          Start With Your Existing Product
        </h2>

        <a
          href="#"
          className="text-[14px] sm:!text-[16.18px] leading-[21.57px] text-white/90 font-medium font-inter flex gap-3 items-center border-b-2 border-transparent hover:border-white transition-all duration-200"
        >
          See All Products{" "}
          <img src="/dashboardarrow.svg" alt="arrow" className="h-4 w-4" />
        </a>
      </div>
      <div className="border w-full border-[#FFFFFF1F] mb-2"></div>

      <div className="grid grid-cols-2  sm:!grid-cols-2  md:!grid-cols-3 lg:!grid-cols-4 gap-3 gap-y-7 sm:!gap-6 md:!gap-x-6">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-[#202328] p-0 sm:!p-4 sm:!px-0 rounded-lg flex flex-col items-start cursor-pointer"
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

            <button className="relative overflow-hidden bg-transparent border border-[#8267EC] px-2 sm:!px-4 py-3 mt-auto rounded-full flex items-center gap-2 font-inter font-normal text-[16px] text-[#FFFFFFCC] cursor-pointer hover:!text-white group transition-colors duration-300">
              <span className="absolute inset-0 bg-purple-700 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
              <img
                src="/dashboardstar.svg"
                alt="add image"
                className="h-5 w-5 sm:!h-7 sm:!w-7 relative z-10"
              />
              <span className="relative z-10 text-sm md:!text-base">
                Create Ad
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardProductSection;
