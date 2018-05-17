import React, { Component } from 'react';
import Banner from './Banner';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Banner/>
      </div>
    );
  }
}

export default Header;
