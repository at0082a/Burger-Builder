import React from 'react';
import Aux from '../hoc/Aux';
import './Layout.css';

const layout = (props) => (
  <Aux>
    <div className='content'>Toolbar, Sidedrawer, Backdrop </div>
    <main>
      { props.children }
    </main>
  </Aux>
)

export default layout