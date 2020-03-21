import React from 'react'
import './toolbar.css'
import Logo from './logo';
import NavigationItems from './NavigationItems';

const toolbar = () => (
  <div className='toolbar'>
    <div> MAIN</div>
    <Logo height='85%'/>  
    <nav className='desktopOnly'>
      <NavigationItems/>
    </nav>
  </div>
)

export default toolbar