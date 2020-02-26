/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Aux from '../hoc/Aux';
import Burger from '../components/Burger';
import BuildControls from '../components/BuildControls';


const INGREDIENT_PRICES = {
  salad: 1,
  bacon: 2,
  meat: 3,
  cheese: 1.5 
};

function burgerBuilder(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ingredients, setIngredients] = useState({
      ingredients: { salad: 0 , bacon: 0 , cheese: 0, meat: 0 } 
    }
  );
  const [total, setTotal] = useState(4);

const addIngredient = (type) => {
  let ingredient = ingredients.ingredients[type];
  console.log('typpeeee', ingredient);
  let newCount = ingredient + 1;
  ingredients.ingredients[type] = newCount;
  setTotal(prevState => prevState + INGREDIENT_PRICES[type]);
  setIngredients(prevState => {
    return {...prevState, ...ingredients}
  });
};

const removeIngredient = (type) => {
  let ingredient = ingredients[type];
  let newCount = ingredient - 1;
  ingredients[type] = newCount;
  let oldPrice = total;
  const newPrice = oldPrice - INGREDIENT_PRICES[type];
  setIngredients(ingredients);
  setTotal(newPrice);
};

  return (
    <Aux>
      <Burger ingredients={ingredients} total={total} />
      <BuildControls remove={removeIngredient} add={addIngredient} />
    </Aux>
  )
};

export default burgerBuilder;