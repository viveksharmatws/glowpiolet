import React from "react";
import TemplatesProductSection from "./TemplatesProductSection";
import DashboardProductSection from "./DashboardProductSection";

const DashboardHome = () => {
  return (
    <main className="flex-1 p-3 sm:!p-6 space-y-12">
      {/* Start New Product */}
      <section>
        <div className="mb-6">
          <div className="border-2 border-gray-700 border-dashed p-10 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-purple-400 w-fit mx-auto sm:!m-0">
            <img src="/addimage.svg" alt="add image" className="h-10 w-10" />
            <span className="font-normal text-lg text-center align-middle font-inter text-white mt-6 max-w-[220px] tracking-wide leading-relaxed">
              Start with a new product image
            </span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <DashboardProductSection />

      <TemplatesProductSection />
    </main>
  );
};

export default DashboardHome;
