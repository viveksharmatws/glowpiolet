import React from "react";

const Launchcard = () => {
  return (
    <div
      style={{
        maWidth: "366px",
        maxHeight: "412px",
        padding: "2px",
        borderRadius: "40px",
        position:"relative",
        background:
          "conic-gradient(from 180deg at 50% 50%, #48C8FF 0deg, #F33EE7 81.4deg, #893EF3 220.7deg, #48C8FF 360deg)",
        display: "flex",
        overflow:"hidden",
      }}
      className="w-[90%] m-auto sm:!w-full h-full max-h-[412px]"
    >
    <img src="/pricingblur.png" className="absolute top-[-60px] right-[-33px]"  />
      <div
      className=" p-5 lg:p-10 gap-4 sm:!gap-8"
        style={{
          flex: 1,
          borderRadius: "38px",
          background: "linear-gradient(180deg, #F5A6FF 0%, #A1E2FF 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow:
            "0px 0px 8px rgba(13, 238, 252, 0.32) inset, 8px 4px 16px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Top Icon */}
        <img
          src="/pricingimage.png"
          alt="Icon"
          style={{
            width: "40px",
            height: "40px",
            objectFit: "contain",
            alignSelf: "flex-start",
          }}
        />

        {/* Price */}
        <div style={{ marginTop: "16px" }} className="text-start">
          <span
            style={{
              background:
                "linear-gradient(180deg, #000000 22.5%, rgba(0,0,0,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "500",
            }}
            className="font-inter text-3xl lg:text-5xl"
          >
            $20
          </span>
          <span
            style={{ fontSize: "16px", color: "#555", marginLeft: "4px" }}
            className="text-sm font-inter"
          >
            /month
          </span>
        </div>

        {/* Title & Description */}
        <div style={{ marginTop: "8px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "4px",
              color: "#000",
            }}
            className="text-start font-inter"
          >
            Enterprise
          </h2>
          <p
            style={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.8)" }}
            className="text-start font-inter font-base"
          >
            For large teams & corporations.
          </p>
        </div>

        <div className="flex justify-center ">
          <button className="pricingbtn font-inter flex items-center justify-center gap-2 !text-sm lg:!text-lg">
            Start 7-day trial
            <img
              src="/arrow_forward.png"
              alt="Arrow forward"
              className="w-6 h-6 default-arrow"
            />
            <img
              src="/arrow_forwardwhite.png"
              alt="Arrow forward hover"
              className="w-4 h-4 hover-arrow hidden"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Launchcard;
