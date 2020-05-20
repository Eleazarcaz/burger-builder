import React from 'react';
import classes from './Logo.module.css';
import burgerLogo from '../../assets/img/logo.png';

const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt='Logo burger' />
  </div>
);

export default Logo;
