import React from 'react';
import classes from  './Button.module.css';

const button = props => {
  const className = classes[props.btnType];
  
  return (
      <button className={className} onClick={props.clicked}>
        {props.children}
      </button>
  ) 
}




export default button;