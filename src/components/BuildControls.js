import React from 'react';
import BuildControl from "./BuildControl";
import styles from './BuildControls.module.css';
import classes from './OrderButton.module.css';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'}
];

console.log(controls[0].type);

const buildControls = props => {
  const buildControl = controls.map((ctrl, i) => {
    return <BuildControl 
              key={i} 
              label={ctrl.label}
              added={() => props.add(ctrl.type)}
              subtract={ () => props.remove(ctrl.type) }
              disabled={props.disabled[ctrl.type]}
           />
  });

  return (
    <div className={styles.BuildControls}>
      <p> Current Price: ${props.total.toFixed(2)} </p>
        {buildControl}
      <button className={classes.OrderButton} disabled={props.purchasable} onClick={props.order}> ORDER NOW </button>
    </div>
  )
};

export default buildControls;