import React from 'react';
import './roomButton.css';

const RoomButton = ({ link, textButton }) => {

  return (
    <div className='roomButton'>
      <button 
      onClick={() => window.location.href = link}
      className='btnBook textSize2 fontStyle4'
      >
        {textButton}
      </button>
    </div>
  );
};

export default RoomButton;
