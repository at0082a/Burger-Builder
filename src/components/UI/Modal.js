import React from 'react';
import './modal.css'

const modal = (props) => (
  <div className='modal' style={{
    transform: props.show ? 'translateY(0)' : 'translate(-100vh)'
  }}>
    {props.children}
  </div>
)

export default modal