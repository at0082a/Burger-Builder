import React, { useState } from 'react';
import Aux from '../hoc/Aux';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './Toolbar/SideDrawer';
import './Layout.css';

function layout(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [open, setOpen] = useState(false);
  // const clicked = () => {
  //   setOpen(!open);
  // };

  return (  
    <Aux>
      <div className='content'>
        <Toolbar/>
        <SideDrawer/>
        Backdrop 
      </div>
      <main>
        { props.children }
      </main>
    </Aux>
  )
}

export default layout