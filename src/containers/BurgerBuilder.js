/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Aux from '../hoc/Aux';
import Burger from '../components/Burger';
import BuildControls from '../components/BuildControls';
import Modal from '../components/UI/Modal';
import OrderSummary from '../components/OrderSummary';

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
  const [order, setOrder] = useState(false);

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

const orderHandler = () => {
  setOrder(true);
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

let purchasable;
if (total === 4) {
  purchasable = true
} else if (total > 4) {
  purchasable = false
}

  return (
    <Aux>
      <Modal show={order}>
        <OrderSummary ingredients={ingredients} total={total}/>
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls 
        remove={removeIngredient} 
        add={addIngredient}
        disabled={disabledInfo} 
        total={total} 
        purchasable={purchasable}
        order={orderHandler}
      />
    </Aux>
  )
};

export default burgerBuilder;