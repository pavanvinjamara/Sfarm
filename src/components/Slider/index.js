import React, { useState } from 'react';
import './index.scss'; // Import CSS for styling

const Slider = ({ title, direction, visible, onClose }) => {
  const [closed, setClosed] = useState(true);

  const handleClose = () => {
    setClosed(true);
    onClose();
  };

  const SliderClassName = `Slider ${direction} ${closed ? 'closed' : 'open'}`;

  return (
    <div className={SliderClassName}>
      <div className="Slider-header">
        <span>{title}</span>
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
      </div>
      <div className="Slider-content">{visible && <span>Hi, there!</span>}</div>
    </div>
  );
};

export default Slider;
