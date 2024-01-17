import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const useHome = () => {


    const [trunkLimit, setTrunkLimit] = useState(150);
    const { t } = useTranslation('translation', { keyPrefix: 'home' });

    const truncate = (description) => {
        const words = description.split(' ');

        if (words.length <= trunkLimit) {
            return description;
        } else {
            const truncatedWords = words.slice(0, trunkLimit);
            return truncatedWords.join(' ') + '...';
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 767) {
                setTrunkLimit(150)
            } if (window.innerWidth > 768 && window.innerWidth < 1200) {
                setTrunkLimit(25)
            } else {
                setTrunkLimit(150)
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

      
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        t,
        truncate,
    }
}

export default useHome;