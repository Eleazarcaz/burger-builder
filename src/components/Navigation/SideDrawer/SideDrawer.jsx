import React from 'react';

import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const SideDrawer = (props) => {
  return (
    <div className={classes.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItem></NavigationItem>
      </nav>
    </div>
  );
};

export default SideDrawer;
