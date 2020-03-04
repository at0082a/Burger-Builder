import React from 'react';
import NavigationItem from './NavigationItem';

const navItems = (props) => (
  <ul>
      <NavigationItem link='/' active> Burger Builder </NavigationItem>
      <NavigationItem link='/'> Checkout </NavigationItem>
  </ul>
)

export default navItems