import React from "react";
import "./HomeGalleryST.css"
import "../../../../../src/styles.css"

import { imageData } from './imagesST';
import SwiperGallery from "../../../../components/swiperGallery/SwiperGallery";
import useHomeGalleryST from "./useHomeGalleryST";


const HomeGalleryST = ({ mb }) => {

    const { slidesPerView } = useHomeGalleryST();

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

export default HomeGalleryST
