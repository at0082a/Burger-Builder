import React, { useState } from 'react';
import Aux from '../hoc/Aux';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './Toolbar/SideDrawer';
import Backdrop from './UI/BackDrop';
import './Layout.css';

function layout(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showDrawer, setShowDrawer] = useState(true);

  const show = () => {
    setShowDrawer(false);
  };

  // const clicked = () => {
  //   setOpen(!open);
  // };

  return (  
    <Aux>
      <Toolbar/>
      <SideDrawer closed={show} show={showDrawer}/>
      <main className='content'>
       { props.children }
     </main>
    </Aux>
  )
}

export default layout