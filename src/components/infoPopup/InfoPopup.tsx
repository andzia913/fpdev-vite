import React, { useState, useEffect } from 'react';
import './infoPopup.css';

const InfoPopup = ({ onClose, text, isPositive }) => {
  console.log('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className={isPositive ? 'info-popup positive' : 'info-popup negative'}>
      <div className="popup-content">
        <span className="popup-text">{text}</span>
        <button type="button" className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default InfoPopup;
