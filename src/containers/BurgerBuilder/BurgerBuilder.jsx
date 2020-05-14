import React from 'react';
import Auxiliar from '../../hoc/auxiliar';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
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
