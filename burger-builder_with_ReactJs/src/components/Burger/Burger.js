import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/burgerIngredients';

const burger = props => {

  let Ingredients = Object.keys(props.Ingredients)
    .map(IgName => {
      return [...Array(props.Ingredients[IgName])].map((_, i) => {
        return <BurgerIngredient key={IgName + i} type={IgName}/>
      })
    })
    .reduce((arr,el) => {
      return arr.concat(el)
    },[]);
    
  if (Ingredients.length === 0) {
    Ingredients = <p>Please add some ingredients first</p>
  }
  console.log(Ingredients);

  return ( 
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {Ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;