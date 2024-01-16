import React from 'react';

const RoomButton = ({ link, textButton }) => {
  return (
    <div className='roomButton'>
      <button 
      onClick={() => window.location.href = link}
      className=''
      >
        {textButton}
      </button>
    </div>
  );
};

export default RoomButton;
