import React from 'react';
import Aux from '../hoc/Aux';
import Button from './Button';

const orderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((ingredient, i) => {
    return <li key={i}> <span style={{textTransform: 'capitalize'}}> {ingredient} </span> : { props.ingredients[ingredient] } </li>
  });
  return (
    <Aux>
        <h3>Your Order: </h3>
          <ul>
            { ingredients }
          </ul>
        <p> Continue to Checkout? </p>
        <p> <strong>Total Price : ${props.total.toFixed(2)} </strong></p>
        <Button btnType='Danger' clicked={props.clicked}>No</Button>
        <Button btnType='Success' clicked={props.clicked}>Yes</Button>
    </Aux>
  )
};

export default orderSummary;