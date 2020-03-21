import React from 'react';
import classes from './NavigationItem.module.css';

const navItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a className={props.active ? ':active' : null} href={props.link}> {props.children} </a>
    </li>
  )
}


export default navItem