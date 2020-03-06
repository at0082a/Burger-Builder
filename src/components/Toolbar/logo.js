import React from 'react';
import burgLogo from './burger-logo.png';
import './logo.css';

const logo = (props) => (
  <div className='logo' style={{ height: props.height }}>
    <img src={burgLogo} alt="myBurger"/>
  </div>
)

export default logo