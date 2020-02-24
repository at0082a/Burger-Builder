import React, { useState } from 'react';
import Aux from '../hoc/Aux';
import Burger from '../components/Burger';

function burgerBuilder(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ingredients, setIngredients] = useState({
    ingredients: { salad: 1, bacon: 1, cheese: 2, meat: 2 } 
  }
);

  return (
    <Aux>
      <Burger ingredients={ingredients}/>
      <div> Build Controls </div>
    </Aux>
  )
};

export default burgerBuilder;