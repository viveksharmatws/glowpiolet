import React, { useState } from "react";

const SettingsMenu = ({ onBack }) => {
  const [notifications, setNotifications] = useState(false);
  const [followUp, setFollowUp] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <div className="absolute right-0 mt-2 w-96 bg-[#1E1F23] rounded-xl shadow-lg border border-gray-700 z-50 p-3 space-y-3">
      {/* Back button */}
      <button
        onClick={onBack}
        className="text-white/70 text-lg hover:text-white mb-2 flex items-center gap-3 cursor-pointer"
      >
        <p className="text-2xl">←</p> Back
      </button>

      {/* Notifications */}
      <div className="flex justify-between items-center px-2 py-2 hover:bg-gray-800 rounded-md">
        <span className="flex items-center gap-2 text-white/80">
          <img src="/bell.svg" alt="Notifications" className="h-5 w-5" />
          Notifications
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="sr-only peer"
          />
          {/* Track */}
          <div className="w-11 h-6 bg-[#000000] rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-[#000000] transition-colors">
            {/* Thumb */}
            <div
              className={`absolute top-[2px] left-[2px] w-5 h-5 bg-[#7E7E7E] rounded-full transition-transform peer-checked:translate-x-full`}
            ></div>
          </div>
        </label>
      </div>

      {/* Follow-up */}
      <div className="flex justify-between items-center px-2 py-2 hover:bg-gray-800 rounded-md">
        <span className="flex items-center gap-2 text-white/80">
          <img src="/suggestions.svg" alt="Follow Up" className="h-5 w-5" />
          Show follow up suggestions in chats
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={followUp}
            onChange={() => setFollowUp(!followUp)}
            className="sr-only peer"
          />
          {/* Track */}
          <div className="w-11 h-6 bg-[#000000] rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-[#000000] transition-colors">
            {/* Thumb */}
            <div
              className={`absolute top-[2px] left-[2px] w-5 h-5 bg-[#7E7E7E] rounded-full transition-transform peer-checked:translate-x-full`}
            ></div>
          </div>{" "}
        </label>
      </div>

      {/* Language */}
      <div className="flex justify-between items-center px-2 py-2 hover:bg-gray-800 rounded-md">
        <span className="flex items-center gap-2 text-[#FFFFFFB2]">
          <img src="/globe.svg" alt="Language" className="h-5 w-5" />
          Language
        </span>
        <img src="/downarrow.svg" />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Delete All Chats */}
      <div className="flex items-center gap-2 px-2 py-2 hover:bg-red-600 rounded-md cursor-pointer text-white/80">
        <img src="/chatdelete.svg" alt="Delete" className="h-5 w-5" />
        <span>Delete all chats</span>
      </div>
    </div>
  );
};

export default SettingsMenu;
