import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const imgs = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://swiperjs.com/demos/images/nature-9.jpg",
];

export default function CurvedCarousel() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      spaceBetween={10}
      loop={true}
      loopedSlides={imgs.length}
      coverflowEffect={{
        rotate: 80,
        depth: -100,
        modifier: 0.2,
        scale: 0.3,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {imgs.map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
