import React, { Component } from 'react';
import Logo from '../Logo';
import './Banner.scss';

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <span className="Banner-text">Milk</span>
        <Logo/>
        <span className="Banner-text">Tea</span>
      </div>
    );
  }
}

export default Banner;
