import React from 'react';
import Auxiliar from '../../hoc/auxiliar';
import Burger from '../../components/Burger/Burger';

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
        <div>Burger Controls</div>
      </Auxiliar>
    );
  }
}

export default BurgerBuilder;
