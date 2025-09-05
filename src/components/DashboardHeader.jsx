import React from "react";
import logo from "/public/headerlogo.svg";
import DashboardProductSection from "./DashboardProductSection";
import TemplatesProductSection from "./TemplatesProductSection";
import ProfileMenu from "./ProfileMenu";
import HeaderBody from "./HeaderBody";

const DashboardHeader = () => {
  return (
    <>
      <header className="bg-black text-white px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="Logo" className="h-9 w-9 lg:h-8 lg:w-8" />
          <span className="font-roboto text-xl lg:text-[19px] font-semibold leading-none tracking-tight">
            Glowpilot
          </span>
        </div>

        <div className="flex items-center gap-9">
          <div className="flex items-center gap-1">
            <img src="/thunder.svg" alt="Score Icon" className="h-6 w-6" />
            <p className="text-sm lg:text-base font-medium font-inter">3600</p>
          </div>

          <div className="relative">
            <img
              src="/bell.svg"
              alt="Notifications"
              className="h-6 w-5 cursor-pointer"
            />
          </div>

          <ProfileMenu />
        </div>
      </header>
    </>
  );
};

export default DashboardHeader;
