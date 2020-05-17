import React from 'react';
import Auxiliar from '../../../hoc/auxiliar';

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => (
    <li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}>{igKey}: </span>
      {props.ingredients[igKey]}
    </li>
  ));
  return (
    <Auxiliar>
      <h4>Your Order</h4>
      <p>A hamburguer with the next ingredients:</p>

      <ul>{ingredientsSummary}</ul>

      <p>Continue to Checkout?</p>
      <button>Continue</button>
      <button>Cancel</button>
    </Auxiliar>
  );
};

export default OrderSummary;
