import React from 'react';
import './backdrop.css';

const backDrop = (props) => {
  console.log(props.show);
  return (
    props.show ? <div className='backdrop'> </div> : null
  )
}

export default backDrop