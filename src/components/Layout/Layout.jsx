import React from 'react';
import Auxiliar from '../../hoc/auxiliar';

const Layout = (props) => (
  <Auxiliar>
    <div>Toolbart, SideDrawer, Backdrop </div>
    <main>{props.children}</main>
  </Auxiliar>
);

export default Layout;
