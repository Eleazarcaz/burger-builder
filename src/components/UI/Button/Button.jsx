import React from 'react';
import classes from './Button.module.css';

const Button = (props) => (
  <Button classes={[classes.Button, classes[props.btnType]].join(' ')}>
    {props.children}
  </Button>
);

export default Button;
