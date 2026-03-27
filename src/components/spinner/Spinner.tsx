import React from 'react';
import './spinner.css';

const Spinner = () => (
  <div className="spinner-container">
    <div className="spinner spinner--steps icon-spinner" aria-hidden="true" />
  </div>
);

export default Spinner;
