import React from 'react';
import BurgerIngredient from "./BurgerIngredient";
import './Burger.css';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients.ingredients)
    .map(igKey => {  
      return [...Array(props.ingredients.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      });
  })
  .reduce((prev, curr) => {
    return prev.concat(curr);
  }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Please start adding ingredients! </p>
  }

  return (
    <div className='burger'> 
      <BurgerIngredient type='bread-top'/>
        {transformedIngredients}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  )
}

export default burger;