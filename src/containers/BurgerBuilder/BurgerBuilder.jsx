import React from 'react';
import Auxiliar from '../../hoc/auxiliar';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <Auxiliar>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls></BuildControls>
      </Auxiliar>
    );
  }
}

export default BurgerBuilder;
