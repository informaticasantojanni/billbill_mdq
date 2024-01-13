import React from 'react'
// import required modules
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import CardService from "./CardService"


const SwiperComponent = ({servicesItems}) => {
  return (
    <Swiper
    loop={true}
    spaceBetween={10}
    observer={true}
    slidesPerView={5}
    centeredSlides={false}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    // pagination={{
    //   clickable: true,
    // }}
    modules={[Autoplay, Pagination]}
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
            iconComponent={service.icon}
            text={service.name} />
        </SwiperSlide>
      )
    })}
  </Swiper>
  )
}

export default SwiperComponent