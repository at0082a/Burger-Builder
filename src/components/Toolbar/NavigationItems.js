import React from 'react';
import NavigationItem from './NavigationItem';
import './navItems.css';

const navItems = (props) => (
  <ul className='navigationItems'>
      <NavigationItem link='/' active> Burger Builder </NavigationItem>
      <NavigationItem link='/'> Checkout </NavigationItem>
  </ul>
)

export default navItems