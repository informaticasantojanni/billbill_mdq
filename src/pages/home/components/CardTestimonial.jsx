import React, { useState, useEffect } from "react";
import "./HomeTestimonials.css";

const CardTestimonial = ({
  id,
  image,
  name,
  nationality,
  website,
  description,
  flag
}) => {

  const [trunkLimit, setTrunkLimit] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTrunkLimit(25);
      } else if (window.innerWidth < 1024) {
        setTrunkLimit(25);
      } else {
        setTrunkLimit(50);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  var descriptionTruncated = "";

  const truncate = (description) => {
    const words = description.split(' ');

    if (words.length <= trunkLimit) {
      return description;
    } else {
      const truncatedWords = words.slice(0, trunkLimit);
      return truncatedWords.join(' ') + '...';
    }
  };

  ;


  return (
    <div className="testimonials-card">
      <div className="testimonials-card-header">
        <img src={image} alt={website} />
        <div>
          <p className="name textSize3 fontStyle5 fontColor8">{name}</p>
          <div className="nationality-container">
            <img className="flag" src={flag} alt="flag"></img>
            <p className="nationality textSize1 fontStyle5 fontColor8">{nationality}</p>
          </div>
        </div>
      </div>
      <div className="testimonials-card-body">
        <p className="textSize1 fontStyle3 fontColor8">{truncate(description)}</p>
      </div>
      <div className="testimonials-card-footer">
        <p>{website}</p>
      </div>
    </div>
  );
};

export default CardTestimonial;
