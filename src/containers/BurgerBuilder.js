import React from 'react';
import Aux from '../hoc/Aux';
import Burger from '../components/Burger';

const burgerBuilder = props => {
  return (
    <Aux>
      <div> <Burger/> </div>
      <div> Burger Ingredients </div>
    </Aux>
  )
};

export default burgerBuilder;