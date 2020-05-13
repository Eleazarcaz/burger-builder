import React from 'react';
import classes from './Layout.module.css';
import Auxiliar from '../../hoc/auxiliar';

const Layout = (props) => (
  <Auxiliar>
    <div>Toolbar, SideDrawer, Backdrop </div>
    <main className={classes.Content}>{props.children}</main>
  </Auxiliar>
);

export default Layout;
