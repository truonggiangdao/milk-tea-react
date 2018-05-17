import React, { Component } from 'react';
import drinkImg from './drinks.jpg';
import './Logo.scss';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <div className="Logo-container">
          <img src={drinkImg} className="Logo-img" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Logo;
