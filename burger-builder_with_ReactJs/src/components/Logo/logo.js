import React from 'react';
import logoSource from '../../assets/images/burger-logo.png';
import classes from './logo.module.css';

const logo = () => (
  <div className={classes.Logo}>
    <img src={logoSource} alt='My Burger' />
  </div>
);

export default logo;