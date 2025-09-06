import React, { useEffect } from "react";
import SkinToneDropdown from "./SkinToneDropdown";

const CreateCharacterModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto"; // restore scroll
    }

    // Cleanup when unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-[#151515] rounded-lg w-full max-w-[669px] mx-4 sm:mx-0 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#2A2A2A] p-4 sm:p-5">
          <div className="flex gap-4">
            <button onClick={onClose}>
              <img src="/cross.svg" alt="close" className="h-4 w-4 cursor-pointer" />
            </button>
            <h2 className="text-white text-lg sm:text-xl font-semibold font-inter">
              Create a Character
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-[#8267EC] w-full h-[43px] rounded-full cursor-pointer pt-[10px] pr-8 pb-[11px] pl-8 text-white font-inter font-medium text-sm">
              Create
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* Upload Section */}
          <div className="mb-6 w-full max-w-[271px]">
            <div className="border-2 border-[#f0f0f05c] border-dotted p-10 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-[#8267EC] transition w-full">
              <img src="/addimage.svg" alt="add" className="h-10 w-10" />
              <span className="font-normal text-lg text-center font-inter text-white mt-6 max-w-[220px] tracking-wide leading-relaxed">
                Upload a photo
              </span>
            </div>
          </div>

          {/* Name */}
          <div className="mb-6">
            <label className="block text-white text-base sm:text-lg font-inter font-light mb-3">
              Name
            </label>
            <input
              type="text"
              placeholder="Type your Brand Name"
              className="w-full bg-[#202328] rounded-lg p-3 sm:p-4 
             text-white font-inter-tight font-semibold text-base sm:text-lg
             placeholder:font-inter placeholder:text-white/70 
             border border-[#FFFFFF5C] focus:outline-none"
            />
          </div>

          {/* Age */}
          <div className="mb-6">
            <label className="block text-white text-base sm:text-lg font-inter font-light mb-3">
              Age
            </label>
            <input
              type="number"
              placeholder="Enter character age"
              className="w-full bg-[#202328] rounded-2xl p-3 sm:p-4 
              text-white font-inter-tight font-semibold text-base sm:text-lg
              placeholder-white/70 border border-[#FFFFFF5C] focus:outline-none placeholder:font-inter"
            />
          </div>

          {/* Skin Tone */}
         <SkinToneDropdown />

          {/* Voice */}
          <div className="mb-6">
            <label className="block text-white text-base sm:text-lg font-inter font-light mb-3">
              Voice
            </label>
            <div
              className="w-full bg-[#202328] rounded-2xl p-3 sm:p-4 flex justify-between items-center
              border border-[#FFFFFF5C]"
            >
              <span className="text-white/50 font-inter text-sm sm:text-base">
                Upload a voice
              </span>
              <img src="/upload.svg" alt="upload" className="h-5 w-5" />
            </div>
          </div>

          {/* Uploaded Voice File */}
          <div className="flex justify-between items-center rounded-2xl p-3">
            <span className="text-white text-sm sm:text-base font-inter">
              Disha Hannan.mp3
            </span>
            <div className="flex items-center gap-3">
              <button>
                <img
                  src="/play.svg"
                  alt="play"
                  className="h-6 w-6 cursor-pointer"
                />
              </button>
              <button>
                <img
                  src="/delete.svg"
                  alt="delete"
                  className="h-6 w-6 cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCharacterModal;
