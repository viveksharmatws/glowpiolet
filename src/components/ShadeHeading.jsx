import React from 'react';
import clsx from 'clsx';

const ShadeHeading = ({ text }) => {
  return (
    <h2
      className={clsx(
        "font-inter font-semibold text-center tracking-[-1.5px] bg-gradient-to-b from-black via-black/90 to-black text-transparent bg-clip-text",
        "text-[clamp(28px,6vw,68px)] leading-[clamp(36px,7vw,78px)]"
      )}
    >
      {text}
    </h2>
  );
};

export default ShadeHeading;
