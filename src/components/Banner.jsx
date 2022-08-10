import React from "react";
import { Autoplay, Navigation } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import bannerFashion from '../assets/banner-fashion.jpg'
import bannerFashionMen from '../assets/banner-man.jpg'
import bannerTech from '../assets/banner-tech.jpg'

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 22500,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={bannerFashion} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={bannerFashionMen} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={bannerTech} alt="banner" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
