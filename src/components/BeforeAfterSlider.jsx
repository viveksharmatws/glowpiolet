import React, { useState } from 'react';

export default function BeforeAfterSlider() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="relative w-full max-w-[600px] h-[400px] overflow-hidden rounded-lg shadow-lg">
      <img
        src="/your-image.png"
        alt="After"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderValue}%` }}
      >
        <img
          src="/your-image.png"
          alt="Before"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 h-full border-l-2 border-white z-10"
        style={{ left: `${sliderValue}%` }}
      />

      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
        className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-1/2"
      />
    </div>
  );
}
