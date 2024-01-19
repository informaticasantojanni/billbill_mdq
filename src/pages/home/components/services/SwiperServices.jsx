import React from 'react'
// import required modules
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import CardService from "./CardService"


const SwiperComponent = ({ servicesItems }) => {
  return (
    <Swiper
      loop={false}
      spaceBetween={10}
      observer={true}
      // slidesPerView={}
      centeredSlides={false}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      // pagination={{
      //   clickable: true,
      // }}

      breakpoints={{
        200: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
    >
      {servicesItems.map((service, index) => {
        return (
          <SwiperSlide key={index}>
            <CardService
              {...service} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default SwiperComponent