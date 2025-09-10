import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger & close icons
import DashboardHeader from "./DashboardHeader";

const HeaderBody = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <DashboardHeader />

      <div className="flex min-h-screen bg-[#202328] text-white sm:!p-4 lg:!p-7">
        <aside
          className={`fixed md:static top-0 left-0 h-full w-60 p-3 lg:!p-6 border-r border-gray-800 bg-[#060B13] rounded-2xl flex flex-col justify-between transform transition-transform duration-300 z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          <div className="md:hidden flex justify-end mb-4">
            <button onClick={() => setSidebarOpen(false)}>
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex-1">
            <div className="mb-8">
              <Link to="/dashboard">
                <button className="flex items-center bg-[#F5F6F91F] gap-2 font-inter text-[#FFFFFFE5] font-semibold text-lg w-full px-2 py-4 rounded-xl cursor-pointer">
                  <img src="/Home.svg" alt="Home Icon" className="h-8 w-8" />
                  Home
                </button>
              </Link>
            </div>

            <div className="flex flex-col gap-2 md:!gap-4 ">
              <button className="text-left px-2 py-1 hover:bg-gray-800 hover:text-white rounded font-inter font-normal text-lg text-[#FFFFFF66] cursor-pointer">
                Create
              </button>

              <Link to="/dashboard" className="hover:bg-gray-800 rounded">
                <button className="text-left px-2 py-2  font-inter text-[#FFFFFFCC] flex gap-4 items-center cursor-pointer">
                  <img src="/dashboardstar.svg" alt="Create Ad" className="h-7 w-7" />
                  Create Ad
                </button>
              </Link>

              <Link to="/dashboard/brandassests" className="hover:bg-gray-800 rounded">
                <button className="text-left px-2 py-2 font-inter text-[#FFFFFFCC] flex gap-4 items-center cursor-pointer">
                  <img src="/brandassets.svg" alt="Brand Assets" className="h-7 w-7" />
                  Brand Assets
                </button>
              </Link>

              <Link to="/dashboard/templates" className="hover:bg-gray-800 rounded">
                <button className="text-left px-2 py-2 font-inter text-[#FFFFFFCC] flex gap-4 items-center cursor-pointer">
                  <img src="/template.svg" alt="Template" className="h-7 w-7" />
                  Template
                </button>
              </Link>

              <Link to="/dashboard/voicecloning" className="hover:bg-gray-800 rounded">
                <button className="text-left px-2 py-2  font-inter text-[#FFFFFFCC] flex gap-4 items-center cursor-pointer">
                  <img src="/voicecloning.svg" alt="Voice Cloning" className="h-7 w-7" />
                  Voice Cloning
                </button>
              </Link>

              <Link to="/dashboard/downloads" className="hover:bg-gray-800 rounded">
                <button className="text-left px-2 py-2 font-inter text-[#FFFFFFCC] flex gap-4 items-center cursor-pointer">
                  <img src="/download.svg" alt="Downloads" className="h-7 w-7" />
                  Downloads
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-[60px] md:!mt-[90px] mb-52">
            <p className="font-inter font-normal text-[20px] leading-[29.66px] text-white/40 cursor-pointer">
              History
            </p>
            <ul className="mt-2 text-gray-400 text-base space-y-4">
              <li className="font-inter text-[14px] leading-[20px] text-white/70 cursor-pointer">
                Lorem Ipsum is simply dummy
              </li>
              <li className="font-inter text-[14px] leading-[20px] text-white/70 cursor-pointer">
                Lorem Ipsum is simply dummy
              </li>
              <li className="font-inter text-[14px] leading-[20px] text-white/70 cursor-pointer">
                Lorem Ipsum is simply dummy
              </li>
            </ul>
          </div>
        </aside>

        <div className="flex-1 flex flex-col">
          <header className="md:hidden flex items-center bg-[#060B13] p-4 border-b border-gray-800">
            <button onClick={() => setSidebarOpen(true)}>
              <Menu className="w-7 h-7 text-white" />
            </button>
            <h2 className="ml-4 font-semibold text-xl">Dashboard</h2>
          </header>

          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default HeaderBody;
