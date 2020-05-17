import React from 'react';
import Auxiliar from '../../../hoc/auxiliar';
import Button from '../../UI/Button/Button';

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
      <Button btnType='Success' clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
      <Button btnType='Danger' clicked={props.purchaseCancel}>
        CANCEL
      </Button>
    </Auxiliar>
  );
};

export default OrderSummary;
