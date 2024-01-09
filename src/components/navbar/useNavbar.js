import React, { useState, useEffect } from 'react';

const useNavbar = () => {

// Declaration of hook states
    const [mobileView, setMobileView] = useState(true);
    

    // Functions
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1200) {
                setMobileView(true);
            } else {
                setMobileView(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);




    // Final return of variables and functions
    return {
        mobileView,
        setMobileView
    }
}

export default useNavbar;

