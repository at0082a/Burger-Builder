import React from 'react';
import './button.css';

const button = props => (
  <button className={props.btnType} onClick={props.clicked}>
    {props.children}
  </button>
)

export default button;