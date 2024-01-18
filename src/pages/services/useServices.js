import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';


const useServices = () => {

    const { t } = useTranslation('translation', { keyPrefix: 'services' });
    const [imageSize, setImageSize] = useState(80);

    // Functions
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setImageSize(100);
            } else {
                setImageSize(80);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { t, imageSize }
}

export default useServices;







