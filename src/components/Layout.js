import React, { useState } from 'react';
import Aux from '../hoc/Aux';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './Toolbar/SideDrawer';
import Backdrop from './UI/BackDrop';
import classes from './Layout.module.css';

function layout(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showDrawer, setShowDrawer] = useState(true);

  const show = () => {
    setShowDrawer(false);
  };

  return (  
    <Aux>
      <Toolbar/>
      <SideDrawer clicked={show} show={showDrawer}/>
      <main className={classes.Content}>
       { props.children }
     </main>
    </Aux>
  )
}

export default layout