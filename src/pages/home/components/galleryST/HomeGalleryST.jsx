import React from "react";
import "./HomeGalleryST.css"
import "../../../../../src/styles.css"

import { imageData } from './imagesST';
import SwiperGallery from "../../../../components/swiperGallery/SwiperGallery";
import useHomeGalleryST from "./useHomeGalleryST";
import FileteLeft from "./svg/FileteLeft"
import FileteRight from "./svg/FileteRight"


const HomeGalleryST = ({ mb }) => {

    const { slidesPerView } = useHomeGalleryST();

    return (
        <div className="main-container">
            <div className={`homeGalleryMDQ ${mb}`}>
                <div className="homeGallery__header mb-3">
                    <FileteLeft rotationAngle={0} width={120}/>
                    <h1 className="titleSize3 fontStyle2 fontColor2 ml-1 mr-1"> Bill&Bill San Telmo </h1>
                    <FileteRight rotationAngle={0} width={120}/>
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
