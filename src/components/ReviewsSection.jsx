import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper";

const reviews = [
  {
    name: "Elena W.",
    role: "Founder of BareSkin Rituals",
    text: "I used to spend $5k per shoot. Now I launch weekly with AI videos that feel on-brand and high-end.",
    date: "August 29, 2024",
  },
  {
    name: "John D.",
    role: "CEO of SkinGlow",
    text: "I used to spend $5k per shoot. Now I launch weekly with AI videos that feel on-brand and high-end.",
    date: "September 5, 2024",
  },
  {
    name: "Sarah K.",
    role: "CMO of PureEssence",
    text: "I used to spend $5k per shoot. Now I launch weekly with AI videos that feel on-brand and high-end.",
    date: "October 10, 2024",
  },
];

const ReviewsSection = () => {
  return (
    <div className="w-full rounded-2xl flex justify-center my-[80px] md:my-[150px] max-w-[1268px] mx-auto px-2 ">
      <div className="flex flex-col sm:!flex-row w-full rounded-xl gap-20 sm:gap-24    ">
        {/* Left */}
        <div className="w-full sm:w-1/2 text-left flex flex-col justify-between">
          <div className="max-w-[557px] mx-auto sm:mx-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-semibold leading-[120%] bg-gradient-to-b from-black to-black/70 bg-clip-text text-transparent text-center sm:!text-left">
              Indie Founders Are Winning With{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                Glowpilot
              </span>
            </h2>
            <p className="text-base sm:text-lg text-black/60 mt-4 max-w-[527px] text-center sm:!text-left">
              Our beauty ad platform is transforming the way people create their
              product ads. Here's what some of our users have to say about their
              experience.
            </p>
          </div>
          <div className="text-2xl sm:text-3xl font-semibold bg-gradient-to-b from-black to-black/70 bg-clip-text text-transparent mt-6 sm:mt-8 text-center sm:!text-left mb-16">
            2K+ <br />
            <span className="text-sm sm:text-base text-black/60">
              active users
            </span>
          </div>
        </div>
        {/* Right */}
        <div className="relative w-full sm:w-1/2">
          {/* Blur Overlays */}
          <div
            className="pointer-events-none absolute top-0 left-0 w-full h-20 
      bg-gradient-to-b from-white to-transparent z-20"
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 w-full h-20 
      bg-gradient-to-t from-white to-transparent z-20"
          />

          {/* Swiper */}
          <Swiper
            direction="vertical"
            slidesPerView={2.2}
            centeredSlides
            loop
            spaceBetween={30}
            breakpoints={{
              640: {
                spaceBetween: 30,
              },
              900: {
                spaceBetween: 30,
              },
            }}
            className="review-swiper h-[550px] sm:!h-[600px] w-full relative z-10"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx} className="!w-full">
                <div
                  className="review-card w-full rounded-2xl border border-gray-300 
            p-6 sm:p-8 bg-[#F5F6F9] shadow-md transition-all duration-300"
                >
                  <h3 className="font-inter text-lg sm:text-xl font-semibold text-gray-900">
                    {review.name}
                  </h3>
                  <p className="text-base text-[#909090]">{review.role}</p>

                  {/* Stars */}
                  <div className="flex gap-1 my-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#FFC700"
                        className="w-4 h-4"
                      >
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.504 8.279L12 18.896l-7.44 4.517 1.504-8.279L0 9.306l8.332-1.151z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-base leading-relaxed text-[#909090] my  -6">
                    {review.text}
                  </p>

                  {/* Date */}
                  <p className="text-base sm:text-lg text-black mt-3">
                    {review.date}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
