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
      className="flex flex-row h-full lg:h-52 p-2.5 md:!p-8"
    >
      {/* Left Box */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: 16,
          width: 300,
          textAlign: "center",
          background: "white",
          boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
          fontSize: 14,
          userSelect: "none",
          marginRight: 20,
        }}
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
          display: "flex",
          alignItems: "center",
          gap: 0,
          color: "#555",
          fontSize: 16,
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
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
          +/
        </div>
        <div>
          <img src="/youridea.png" />
        </div>
        <div>
          <img src="/Line 6.svg" className="w-[60px]" />
        </div>
        <div>
          <img src="/glowpiolet.png" />
        </div>
        <div>
          <img src="/curvedline1.svg" className="w-[67px]" />
          <img src="/Line 6.svg" className="w-[67px]" />
          <img src="/curvedline2.svg" className="w-[67px]" />
        </div>
      </div>

      {/* Right side with lines and bubbles and right box */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          userSelect: "none",
        }}
      >
        {/* Right side bubbles */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 15,
            marginRight: 0,
          }}
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
        <div>
          <img src="/Line 6.svg" className="w-[60px]" />
        </div>

        {/* Right Box */}
        <div
          style={{
            border: "1px solid #dba1ce",
            borderRadius: 14,
            padding: 16,
            width: 300,
            textAlign: "center",
            background: "white",
            boxShadow: "0 4px 16px rgba(219,161,206,0.4)",
            fontSize: 14,
            userSelect: "none",
          }}
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
