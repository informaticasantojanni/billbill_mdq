import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';

const useNavDesktop = () => {

    const { t } = useTranslation('translation', { keyPrefix: 'navbar' });
    const [alpha, setAlpha] = useState(0.2);
    const [logoSize, setLogoSize] = useState(60);

    var calcLogoSize = 0;
    var calcAlpha = 0;
    const SCROLL_BREAK = 1000;
    const LOGO_SIZE = 90;
    const NAV_HX = 50;
    const BILL_SIZE = 20;
    const [poligonClip, setPoligonClip] = useState(NAV_HX);


    useEffect(() => {
        if (typeof window !== "undefined") {
            setLogoSize(1);

            const handleScroll = () => {
                calcAlpha = window.scrollY;
                console.log(calcAlpha)
                calcAlpha = 0.2 + (2* calcAlpha / SCROLL_BREAK);
                setAlpha(calcAlpha > 1 ? 1 : calcAlpha);

                calcLogoSize = 1 - (3*window.scrollY / SCROLL_BREAK);
                setLogoSize(calcLogoSize < 0 ? 0 : calcLogoSize);
            }

            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    return {
        t,
        alpha,
        logoSize,
        LOGO_SIZE,
        NAV_HX
    }
}

export default useNavDesktop;