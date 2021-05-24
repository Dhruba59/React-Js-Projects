import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const ingredient = [
  { label: "Cheese", type : "cheese" },
  { label: "Meat", type : "meat" },
  { label: "Salad", type : "salad" },
  { label: "Bacon", type : "bacon" },
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>Current Price : <b>{props.price} </b>Taka</p>
    {ingredient.map((ing) => (
        <BuildControl
        key={ing.label}
        label={ing.label}
        added={() => props.IngAdded(ing.type)}
        removed={() => props.IngRemoved(ing.type)}
        disabled={props.disableInfoArray[ing.type]} />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.orderDisabled}
      onClick={props.ordered}>ORDER NOW</button>
  </div> 
  );

export default BuildControls;