import React from 'react'
import "./SwiperGallery.css"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";


const SwiperGallery = ({ imageData, slidesPerView }) => {
    return (
        <div className='swiperGallery-container'>
      <Swiper
        loop={true}
        pagination={false}
        observer={true}// adding this solve my issue
        navigation={true}
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        className="mySwiper">
        {imageData.map((image, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                background: "transparent",
              }}>
              <img
                className="img"
                src={image.imageUrl} />
            </SwiperSlide>
          )
        })}
      </Swiper>
        </div>

    )
}

export default SwiperGallery