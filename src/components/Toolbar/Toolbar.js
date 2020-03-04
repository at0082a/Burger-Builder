import React from 'react'
import './toolbar.css'
import Logo from './logo';


const toolbar = (props) => {
  return (
    <header className='toolbar'>
      <div> MAIN</div>
      <Logo/>
      <nav>
        ...nav
      </nav>
    </header>
  )
}

export default toolbar