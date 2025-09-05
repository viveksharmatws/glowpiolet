import React, { useState, useRef, useEffect } from "react";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar */}
      <div onClick={() => setIsOpen(!isOpen)}>
        <img
          src="/headerprofile.png"
          alt="Profile"
          className="h-8 w-8 lg:h-10 lg:w-10 rounded-full cursor-pointer"
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[#202328] rounded-xl shadow-lg border border-gray-700 z-50">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[18px] leading-[53.93px] font-inter font-normal text-white/70 hover:text-white hover:bg-gray-700"
          >
            <img src="/user.svg" alt="Profile" className="h-5 w-5" />
            Profile
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[18px] leading-[53.93px] font-inter font-normal text-white/70 hover:text-white hover:bg-gray-700"
          >
            <img src="/settings.svg" alt="Settings" className="h-5 w-5" />
            Settings
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[18px] leading-[53.93px] font-inter font-normal text-white/70 hover:text-white hover:bg-gray-700"
          >
            <img src="/myplan.svg" alt="My Plan" className="h-5 w-5" />
            My Plan
          </a>

          <div className="border-t border-gray-700"></div>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[18px] leading-[53.93px] font-inter font-normal text-white/70 hover:bg-red-500 hover:text-white"
          >
            <img src="/logout.svg" alt="Logout" className="h-6 w-6" />
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
