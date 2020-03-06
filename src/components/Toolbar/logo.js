import React from 'react';
import burgLogo from './burger-logo.png';
import './logo.css';

const logo = (props) => {
  const style = {
    height: props.height,
    marginBottom: props.marginBottom
  };
  return (
    <div className='logo' style={style}>
      <img src={burgLogo} alt="myBurger" />
    </div>
  )
}

export default logo