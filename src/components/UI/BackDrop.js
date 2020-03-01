import React from 'react';
import './backdrop.css';

const backDrop = props => (
  props.show ? <div className='backdrop' onClick={props.clicked}> </div> : null
)


export default backDrop