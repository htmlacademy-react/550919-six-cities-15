import React from 'react';
import '../spinner/index.css';

const Spinner: React.FC = () => (
  <div className="spinner__container">
    <div className="spinner"></div>
    <span className="spinner__info">Loading...</span>
  </div>
);

export default Spinner;
