import React from 'react'
import './toolbar.css'
import Logo from './logo';
import NavigationItems from './NavigationItems';

const toolbar = (props) => {
  return (
    <header className='toolbar'>
      <div> MAIN</div>
        <Logo height='85%'/>  
      <nav className='desktopOnly'>
        <NavigationItems/>
      </nav>
    </header>
  )
}

export default toolbar