import React from 'react';
import './navigationItem.css';

const navItem = (props) => {
  console.log(props.active)
  return (
    <li className='navigationItem'>
      <a className={props.active ? 'active' : null} href={props.link}> {props.children} </a>
    </li>
  )
}


export default navItem