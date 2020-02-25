import React from 'react';
import BuildControl from "./BuildControl";
import './buildControls.css';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'}
];

const buildControls = () => {
  const buildControl = controls.map((ctrl, i) => {
    return <BuildControl key={i} label={ctrl.label} />
  });
  return (
    <div className='buildControls'>
      {buildControl}
    </div>
  )
};

export default buildControls;