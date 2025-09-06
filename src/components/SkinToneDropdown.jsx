import React, { useState } from "react";

const SkinToneDropdown = () => {
  const [selected, setSelected] = useState({
    name: "Navajo White",
    color: "#FFDBAC",
  });
  const [open, setOpen] = useState(false);

  const options = [
    { name: "Navajo White", color: "#FFDBAC" },
    { name: "Light Yellow", color: "#FFFFE0" },
    { name: "Peach Puff", color: "#FFDAB9" },
    { name: "Rosy Brown", color: "#BC8F8F" },
    { name: "Light Coral", color: "#F08080" },
    { name: "Moccasin", color: "#FFE4B5" },
    { name: "Pale Red", color: "#FF6F61" },
    { name: "Golden Yellow", color: "#FFD700" },
  ];

  return (
    <div className="mb-6 relative">
      <label className="block text-white text-base sm:text-lg font-inter font-light mb-3">
        Skin Tone
      </label>

      {/* Dropdown trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full bg-[#202328] rounded-2xl p-3 sm:p-4 flex justify-between items-center
                   border border-[#FFFFFF5C] cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <div
            className="h-5 w-5 rounded-full border border-gray-500"
            style={{ backgroundColor: selected.color }}
          ></div>
          <span className="text-white/70 font-inter text-sm sm:text-base font-light">
            {selected.name}
          </span>
        </div>
        <img
          src="/downarrow.svg"
          alt="dropdown"
          className={`h-5 w-5 transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute mt-2 w-full bg-[#202328] rounded-xl border border-[#FFFFFF5C] shadow-lg z-50">
          {options.map((opt, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-[#2C2F36] transition"
            >
              <div
                className="h-5 w-5 rounded-full border border-gray-500"
                style={{ backgroundColor: opt.color }}
              ></div>
              <span className="text-white/70 font-inter text-sm sm:text-base">
                {opt.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkinToneDropdown;
