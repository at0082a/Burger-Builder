import React from 'react'
import classes from './Toolbar.module.css';
import Logo from './logo';
import NavigationItems from './NavigationItems';

const toolbar = () => (
  <div className={classes.Toolbar}>
    <div> MAIN</div>
    <Logo height='85%'/>  
    <nav className={classes.DesktopOnly}>
      <NavigationItems/>
    </nav>
  </div>
)

export default toolbar