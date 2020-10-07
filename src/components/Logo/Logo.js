import React from 'react';
import foodBuilderLogo from '../../assets/images/food-builder-logo.webp';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={foodBuilderLogo} alt="FoodBuilder"/>
    </div>
);

export default logo;