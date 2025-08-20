import React from "react";
import Faq from "react-faq-component";
import { IoIosArrowUp } from "react-icons/io";

const FaqSection = () => {
  const faqData = {
    title: "",
    rows: [
      {
        title: "Can I choose my own brand colors?",
        content: "Yes, you can fully customize the brand colors.",
      },
      {
        title: "Will the AI actors match my brand aesthetic?",
        content: "Yes, our AI actors adapt to your brand's style and tone.",
      },
      {
        title: "Can I upload my own fonts?",
        content: "Yes, custom fonts are supported for consistent branding.",
      },
      {
        title: "Is there a limit to the number of projects I can create?",
        content: "No, you can create unlimited projects with any plan.",
      },
      {
        title: "Do you offer enterprise solutions?",
        content: "Yes, we offer custom enterprise packages for large teams.",
      },
    ],
  };

  const styles = {
    titleTextColor: "#000",
    rowTitleColor: "#000",
    rowContentColor: "rgba(0,0,0,0.7)",
    arrowColor: "#fff", // white arrow
    rowContentPaddingTop: "10px",
    rowContentPaddingBottom: "10px",
    rowContentPaddingLeft: "0px",
    rowContentPaddingRight: "0px",
  };

  const config = {
    animate: true,
    tabFocus: true,
    expandIcon: (
      <img
        src="/arrowdown.png"
        alt="Expand"
        style={{
          width: "16px",
          height: "16px",
          display: "block",
          margin: "auto",
          objectFit: "contain",
          transition: "transform 0.3s ease",
        }}
      />
    ),
    collapseIcon: (
      <IoIosArrowUp
        style={{
          width: "19px",
          height: "19px",
          display: "block",
          margin: "auto",
          color: "#000", // arrow color
        }}
      />
    ),
  };

  return (
    <div
      style={{
        padding: "2px",
        display: "flex",
        justifyContent: "center",
      }}
      className="sm:!px-3 my-16 lg:my-28 mx-auto"
    >
      <div className="flex flex-wrap justify-between gap-6 px-2 sm:px-0">
        {/* Left section */}
        <div className="w-full md:flex-[1_1_45%] text-left">
          <div className="max-w-[600px]">
            <h2
              style={{
                fontWeight: "600",
                marginBottom: "16px",
                background:
                  "linear-gradient(180deg, #000000 22.5%, rgba(0,0,0,0.7) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: "120%",
              }}
              className="font-inter text-2xl md:text-3xl lg:text-5xl"
            >
              Got Questions? We’ve Got{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                Answers
              </span>
            </h2>
            <p
              style={{
                color: "rgba(0, 0, 0, 0.6)",
                marginBottom: "24px",
              }}
              className="font-inter text-base lg:text-lg max-w-[527px]"
            >
              Still got questions? Contact us for further discussion.
            </p>
            <button className="w-[163.2px] h-12 text-lg rounded-full border-2 border-black/60 px-8 font-inter text-center hover:bg-black hover:text-white transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full md:flex-[1_1_35%] faq-container">
          <Faq data={faqData} styles={styles} config={config} />
        </div>
      </div>

      <style>
        {`
          .faq-container .row-title {
            border: 1px solid rgba(216, 216, 219, 1);
            border-radius: 40px;
            padding: 14px 20px;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .faq-container .row-title-text {
            font-size: 16px;
            font-weight: 500;
          }
          .faq-container .row-title .icon-wrapper {
            border-radius: 50%;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};

export default FaqSection;
