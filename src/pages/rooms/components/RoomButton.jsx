import React from 'react';
import './roomButton.css';

const RoomButton = ({ link, textButton }) => {

  return (
    <div className='roomButton'>
      <button 
      onClick={() => window.location.href = link}
      className='btnBook'
      >
        {textButton}
      </button>
    </div>
  );
};

export default RoomButton;
