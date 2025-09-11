import React from "react";

const VoiceCloning = () => {
  const voices = [
    {
      name: "Joanne Bell",
      description: "Young, Popular American Woman",
      img: "/avatar1.png",
    },
    {
      name: "Jessica",
      description: "Darlene Robertson",
      img: "/avatar2.png",
    },
    {
      name: "Brooklyn Simmons",
      description: "Young, Popular American Woman",
      img: "/avatar3.png",
    },
  ];

  return (
    <section className="flex flex-col items-start  min-h-screen p-2 md:!p-4">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-inter font-semibold text-white text-center mb-12 md:!mb-24">
        Clone Your Voice
      </h2>
      <div className="w-full max-w-[633px] mx-auto space-y-10">
        {/* Upload Section */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white font-inter text-xl md:!text-2xl font-light mb-6">
            Clone a Voice
          </h2>
          <div className="bg-[#43434333] rounded-xl border border-[#2A2A2A] p-6 text-center cursor-pointer hover:border-[#8267EC] transition max-w-[320px] w-full">
            <div className="bg-[#101010] px-4 py-3 w-fit h-fit rounded-md mb-5 mx-auto">
              <img
                src="/upload.svg"
                alt="upload"
                className="h-8 w-8  mx-auto"
              />
            </div>
            <p className="text-white font-inter text-sm sm:text-base font-light">
              Click To Upload, or Drag And Drop
            </p>
            <p className="text-[#FFFFFF8A] font-inter text-xs sm:text-base mt-2 font-light">
              Audio file Up to 50MB
            </p>
          </div>
        </div>

        {/* My Voice Section */}
        <div>
          <h2 className="text-lg sm:text-xl font-inter font-light text-white mb-4 ">
            My Voice
          </h2>
          <div className="space-y-4">
            {voices.map((voice, index) => (
              <div
                key={index}
                className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_auto] grid-cols-1 sm:items-center gap-2 md:!gap-3 bg-transparent rounded-lg cursor-pointer"
              >
                <img
                  src={voice.img}
                  alt={voice.name}
                  className="h-8 w-8 md:!h-10 md:!w-10 rounded-full object-cover"
                />

                <div className="flex gap-2 items-center">
                  <p className="text-white font-inter font-medium text-xs sm:!text-base">
                    {voice.name}
                  </p>
                  <p className="text-white/60 text-xs sm:!text-sm">
                    {voice.description}
                  </p>
                </div>

                <div className="flex items-center gap-1 md:!gap-3 justify-end sm:col-auto col-span-1">
                  <button>
                    <img
                      src="/play.svg"
                      alt="play"
                      className="h-5 w-5 md:!h-6 md:!w-6 cursor-pointer"
                    />
                  </button>
                  <button>
                    <img
                      src="/delete.svg"
                      alt="delete"
                      className="h-5 w-5 md:!h-6 md:!w-6 cursor-pointer"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceCloning;
