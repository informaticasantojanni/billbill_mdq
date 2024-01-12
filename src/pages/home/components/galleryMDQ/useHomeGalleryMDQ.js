
import {useState, useEffect} from "react";

const useHomeGalleryMDQ = () => {

    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setSlidesPerView(1);
        } else if (window.innerWidth < 1024) {
          setSlidesPerView(2);
        } else {
          setSlidesPerView(3);
        }
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return { slidesPerView }
}

export default useHomeGalleryMDQ;