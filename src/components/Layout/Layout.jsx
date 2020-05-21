import React from 'react';
import classes from './Layout.module.css';
import Auxiliar from '../../hoc/auxiliar';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
  <Auxiliar>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Auxiliar>
);

export default Layout;
