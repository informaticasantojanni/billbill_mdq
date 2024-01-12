import React from "react";
import "./HomeGalleryMDQ.css"
import "../../../../../src/styles.css"

import { imageData } from './imagesMDQ';
import SwiperGallery from "../../../../components/swiperGallery/SwiperGallery";
import useHomeGalleryMDQ from "./useHomeGalleryMDQ";


const HomeGalleryMDQ = ({ mb }) => {

    const { slidesPerView } = useHomeGalleryMDQ();

    return (
        <div className="main-container">
            <div className={`homeGalleryMDQ ${mb}`}>
                <div className="homeGallery__header">
                    <h1 className="mb-3 titleSize1 fontStyle1 fontColor2 "> Galleria </h1>
                </div>
                <div className="homeGallery__body">
                    <SwiperGallery
                        imageData={imageData}
                        slidesPerView={slidesPerView} />
                </div>
            </div>
        </div>

    )
}

export default HomeGalleryMDQ
