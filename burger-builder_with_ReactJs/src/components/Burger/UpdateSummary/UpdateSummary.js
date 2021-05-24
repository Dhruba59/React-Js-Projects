import React from 'react';
import classes from './UpdateSummary.module.css';
import Button from '../../UI/Button/Button';


const UpdateSummary = props => {
  
  const IngredientList = Object.keys(props.IngredientsList)
    .map(ingredient => {
      return (<li>{ingredient}: {props.IngredientsList[ingredient]}</li>);
    });
  console.log(IngredientList);

  return (
    <div className={classes.Modal}>
      <h3>Your Order</h3>
      <p>A Delicious Burger with following Ingredients</p>
      <ul>
        {IngredientList}
      </ul>
      <h4>Total Price: {props.price}</h4>
      <p>Continue to Checkout?</p>
      <Button type="Danger" clicked={props.cancel}>Cancel</Button>
      <Button type="Success" clicked={props.continue}>Continue</Button>
    </div>
  );
}
  
export default UpdateSummary;