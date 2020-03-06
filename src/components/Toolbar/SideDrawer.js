import React from 'react';
import Logo from './logo';
import NavigationItems from './NavigationItems';
import './sidedrawer.css';

const sideDrawer = (props) => {
  
  return (
    <div className='sideDrawer'>
      <Logo height='11%'/>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}

export default sideDrawer