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
  const [ingredients, setIngredients] = useState(
      { salad: 0 , bacon: 0 , cheese: 0, meat: 1 } 
  );
  const [total, setTotal] = useState(4);
  const [purchaseState, setPurchaseState] = useState(false);

const addIngredient = (type) => {
  let newIngs = {...ingredients}
  let ingredient = newIngs[type];
  let newCount = ingredient + 1;
  newIngs[type] = newCount;
  setTotal(prevState => prevState + INGREDIENT_PRICES[type]);
  setIngredients(prevState => {
    return {...prevState, ...newIngs}
  });
};

const removeIngredient = (type) => {
  let newIngs = {...ingredients};
  let ingredient = newIngs[type];
  let newCount = ingredient - 1;
  newIngs[type] = newCount;
  setTotal(prevState => prevState - INGREDIENT_PRICES[type]);
  setIngredients(prevState => {
    return {...prevState, ...newIngs}
  });
};

let disabledInfo = {...ingredients};

for (let key in disabledInfo) {
  if (key === 'meat' && disabledInfo[key] === 1) {
    disabledInfo[key] = true
  } else {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
}

let state = purchaseState
if (total === 4) {
  state = true
} else if (total === 4) {
  state = false
}

  return (
    <Aux>
      <Burger ingredients={ingredients} />
      <BuildControls 
        remove={removeIngredient} 
        add={addIngredient}
        disabled={disabledInfo} 
        total={total} 
        purchasable={state}
      />
    </Aux>
  )
};

export default burgerBuilder;