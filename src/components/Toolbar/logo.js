import React from 'react';
import burgLogo from './burger-logo.png';
import './logo.css';

const logo = () => (
  <div className='logo'>
    <img src={burgLogo} alt="myBurger"/>
  </div>
)

export default logo