import React from 'react';
import Aux from '../hoc/Aux';

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
        <p> Total : ${props.total} </p>
    </Aux>
  )
};

export default orderSummary;