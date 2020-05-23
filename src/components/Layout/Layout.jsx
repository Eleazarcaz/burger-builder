import React from 'react';
import classes from './Layout.module.css';
import Auxiliar from '../../hoc/auxiliar';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const Layout = (props) => (
  <Auxiliar>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </Auxiliar>
);

export default Layout;
