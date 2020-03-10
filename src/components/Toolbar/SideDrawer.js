import React from 'react';
import Logo from './logo';
import NavigationItems from './NavigationItems';
import Backdrop from "../UI/BackDrop";
import './sidedrawer.css'

const sideDrawer = (props) => {
  return (
    <div className='sideDrawer'>
      <Backdrop show={props.show} clicked={props.clicked}/>
      <Logo height='11%' marginBottom='32px'/>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}

export default sideDrawer