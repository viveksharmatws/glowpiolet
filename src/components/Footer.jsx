import React from "react";
import logo from "/public/headerlogo.svg";

const Footer = () => {
  return (
    <footer
      className="bg-gray-50 py-10 main-wrapper"
      style={{ background: "rgba(245, 246, 249, 1)", borderRadius: "20px" }}
    >
      <div className="max-w-7xl mx-auto px-2 lg:px-4 grid grid-cols-4 md:!grid-cols-4 lg:gap-5">
        {/* 1️⃣ Logo & Copyright */}
        <div className="flex flex-col lg:!flex-row items-center gap-2 h-fit col-span-5 md:!col-span-1 mb-5 md:!mb-0">
          <img src={logo} alt="Logo" className="h-9 w-9" />
          <span className="font-roboto text-lg sm:!text-2xl font-semibold leading-none tracking-tight">
            Glowpilot
          </span>
        </div>

        {/* 2️⃣ Useful Links */}
        <div className="col-span-2 md:!col-span-1 !text-left">
          <h4 className="font-semibold font-inter text-lg mb-3">Useful Link</h4>
          <ul
            className="space-y-2 text-base font-inter"
            style={{ color: "rgba(6, 11, 19, 1)" }}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Follow Us */}
        <div className="col-span-2 md:!col-span-1 text-left">
          <h5 className="font-semibold font-inter text-lg mb-3">Follow Us</h5>
          <ul
            className="space-y-2 text-base font-inter"
            style={{ color: "rgba(6, 11, 19, 1)" }}
          >
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">X</a>
            </li>
          </ul>
        </div>

        {/* 4️⃣ Newsletter */}
       <div className="col-span-5 md:!col-span-1 mt-6 sm:mt-0">
  <h4 className="font-inter text-center md:text-start text-xl lg:text-2xl mb-3">
    Subscribe our newsletter
  </h4>
  <div
    className="
      flex flex-row items-center 
      w-full 
      bg-[#F5F6F9] rounded-[64px] border border-[#D8D8DB] 
      gap-3 sm:gap-[11.35px] px-4 lg:px-6 py-3
    "
  >
    <input
      type="email"
      placeholder="Your email address"
      className="
        flex-1 min-w-0 
        bg-transparent text-sm 
        outline-none px-3 py-2 
        w-full
      "
    />
    <button
      className="
        bg-gradient-to-t from-[#7050F0] to-[#9680EF] hover:opacity-90 
        text-white text-sm font-medium
        rounded-full cursor-pointer 
        px-5 py-2 
        shrink-0
      "
    >
      Subscribe
    </button>
  </div>
</div>

      </div>

      {/* Bottom Links */}
      <div className="max-w-7xl mx-auto px-4 mt-6 flex flex-col items-center text-center sm:!flex-row sm:!items-center sm:!justify-between gap-4 text-sm text-gray-500">
        <div>
          <a href="#" className="font-inter text-base text-black">
            © 2025. All rights reserved.
          </a>
        </div>
        <div className="gap-2 flex">
          <a href="#" className="font-inter text-sm sm:!text-base text-black">
            Privacy Policy
          </a>
          <a href="#" className="font-inter text-sm sm:!text-base text-black">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
