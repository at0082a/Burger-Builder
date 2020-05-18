import React from 'react';
import Logo from './logo';
import NavigationItems from './NavigationItems';
import Backdrop from "../UI/BackDrop";
import classes from './SideDrawer.module.css';
import Aux from '../../hoc/Aux';

const sideDrawer = (props) => {
  console.log(props.open)
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={classes.SideDrawer}>
        <Logo height='11%' marginBottom='32px'/>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default sideDrawer