import React from 'react';
import Auxiliar from '../../hoc/auxiliar';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {
  render() {
    return (
      <Auxiliar>
        <Burger />
        <div>Burger Controls</div>
      </Auxiliar>
    );
  }
}

export default BurgerBuilder;
