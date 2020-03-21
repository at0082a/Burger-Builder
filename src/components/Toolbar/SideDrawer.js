import React from 'react';
import Logo from './logo';
import NavigationItems from './NavigationItems';
import Backdrop from "../UI/BackDrop";
import Aux from '../../hoc/Aux';
import './sidedrawer.css';

const sideDrawer = (props) => {
  console.log(props.show);
  let attachedClasses = 'sideDrawer close';

  if (props.show) {
    attachedClasses = 'sideDrawer open';
  }

  console.log(attachedClasses);

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.closed}/>
      <div className={attachedClasses}>
        <Logo height='11%' marginBottom='32px'/>
         <button onClick={props.closed}>Toggle</button> 
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default sideDrawer