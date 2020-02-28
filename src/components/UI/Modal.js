import React from 'react';
import './modal.css';
import BackDrop from './BackDrop';
import Aux from '../../hoc/Aux';

const modal = (props) => {
  console.log(props.show);
  return (
    <Aux>
      <BackDrop show={props.show}/>
      <div className='modal' 
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0' 
        }} 
      >
        {props.children}
      </div>
    </Aux>
  )
}


export default modal