import React from "react";
import logo from "/public/headerlogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
const navLinks = ["Features", "Pricing", "Become an Affiliate", "Contact us"];

const Header = () => {
  return (
    <div className="flex justify-center w-full pt-4 px-4 main-wrapper">
      <nav
        className="
          w-full 
          gap-4
          lg:gap-6
          max-w-screen-2xl 
          h-20 
          flex 
          justify-between 
          items-center 
          px-5 md:px-4 
          py-2
          sm:!py-4 
          rounded-full 
          border 
          bg-black/5
          backdrop-blur-lg 
          border-transparent
        "
        style={{
          borderWidth: "1px",
          borderImageSource:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.36) 50%, rgba(0, 0, 0, 0) 100%)",
          borderImageSlice: 1,
          WebkitBackdropFilter: "blur(30px)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="Logo" className=" h-9 w-9 lg:h-9 lg:w-9" />
          <span className="font-roboto text-xl lg:text-[22.42px] font-semibold leading-none tracking-tight">
            Glowpilot
          </span>
        </div>

{/* Nav Links */}
<div className="gap-3 items-center lg:gap-10 hidden md:!flex">
  {navLinks.map((link, index) => (
    <a
      key={index}
      href="#"
      className="
        relative
        text-[#333] text-base lg:text-[18px] font-inter 
        text-center leading-6 
        transition 
        hover:text-black
        after:content-['']
        after:absolute
        after:left-0
        after:-bottom-1
        after:w-0
        after:h-[2px]
        after:bg-black
        after:transition-all
        after:duration-300
        hover:after:w-full
      "
    >
      {link}
    </a>
  ))}
</div>


        {/* Actions */}
        <div className="md:!flex items-center gap-3 md:gap-5 hidden">
<button
    className="
      relative
      text-base md:text-[18px] font-roboto font-medium 
      leading-[24px] text-[#333] cursor-pointer 
      transition hover:text-black
      after:content-['']
      after:absolute
      after:left-0
      after:-bottom-1
      after:w-0
      after:h-[2px]
      after:bg-black
      after:transition-all
      after:duration-300
      hover:after:w-full
    "
  >
    Log in
  </button>
          <button
            className="
              text-base lg:text-[18px] font-medium font-inter 
              text-transparent bg-clip-text 
              bg-gradient-to-b from-black/30 to-black 
              border-2 border-black/10 
              rounded-full 
              px-3 lg:px-6 py-3
              flex items-center justify-center
              cursor-pointer
              header-signup
            "
          >
            Sign up
          </button>
        </div>
          <GiHamburgerMenu size={25} className="md:hidden" />
      </nav>
    </div>
  );
};

export default Header;
