import React from "react";

const FlowDiagram = () => {
  const productImageSrc = "/flowchartproduct.jpg";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position: "relative",
      }}
      className="flex flex-col md:!flex-row h-full lg:h-52 p-2.5 md:!p-8"
    >
      {/* Left Box */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: 16,
          textAlign: "center",
          background: "white",
          boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
          fontSize: 14,
          userSelect: "none",
        }}
        className="mr-0 md:!mr-5 w-[270px] md:!w-[300px]"
      >
        <div style={{ marginBottom: 10, fontWeight: 600, color: "#333" }}>
          Product Photo/Video
        </div>
        <img
          src={productImageSrc}
          alt="Product Photo"
          style={{ width: "100%", borderRadius: 14 }}
        />
      </div>

      <div
        style={{
          alignItems: "center",
          gap: 0,
          color: "#555",
          fontSize: 16,
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
        className="flex flex-col md:!flex-row"
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: 24,
            lineHeight: "20px",
            userSelect: "none",
            color: "#666",
            marginRight: 14,
          }}
        >
        <div className="my-4 md:!my-0">
          +/
        </div>
        </div>
        <div className="my-4 md:!my-0">
          <img src="/youridea.png" />
        </div>
        <div>
          <img src="/Line 6.svg" className="w-[60px] h-[60px] rotate-90 md:!rotate-0" />
        </div>
        <div className="w-[205px] md:!w-[49%]">
          <img src="/glowpiolet.png" />
        </div>
        <div  className="
        rotate-90 md:!rotate-0
        ">
          <img src="/curvedline1.svg" className="w-[80px] md:!w-[67px]" />
          <img src="/Line 6.svg" className="w-[80px] md:!w-[67px]" />
          <img src="/curvedline2.svg" className="w-[80px] md:!w-[67px]" />
        </div>
      </div>

      {/* Right side with lines and bubbles and right box */}

      <div
        style={{
          alignItems: "center",
          gap: 0,
          userSelect: "none",
        }}
      className="flex flex-col md:!flex-row"

      >
        {/* Right side bubbles */}
        <div
          style={{
            position: "relative",
            gap: 15,
            marginRight: 0,
          }}
        className="flex flex-row md:!flex-col"
        >
          <div>
            <img src="/scriptbtn.png" />
          </div>
          <div>
            <img src="/voicebtn.png" />
          </div>{" "}
          <div>
            <img src="/musicbtn.png" />
          </div>
        </div>
        <div className="my-4 mb-0 md:!my-0">
          <img src="/Line 6.svg" className="w-[60px] h-[60px] rotate-90 md:!rotate-0" />
        </div>

        {/* Right Box */}
        <div
          style={{
            border: "1px solid #dba1ce",
            borderRadius: 14,
            padding: 16,
            textAlign: "center",
            background: "white",
            boxShadow: "0 4px 16px rgba(219,161,206,0.4)",
            fontSize: 14,
            userSelect: "none",
          }}
          className="w-[270px] md:!w-[300px]"
        >
          <div style={{ marginBottom: 10, fontWeight: 600, color: "#333" }}>
            Winning Beauty Ad
          </div>
          <img
            src={productImageSrc}
            alt="Winning Ad"
            style={{ width: "100%", borderRadius: 14 }}
          />
        </div>
      </div>
    </div>
  );
};

export default FlowDiagram;
