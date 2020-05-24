import React from 'react';
import classes from './Layout.module.css';
import Auxiliar from '../../hoc/auxiliar';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
  state = {
    showSideDrawer: true,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Auxiliar>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxiliar>
    );
  }
}

export default Layout;
