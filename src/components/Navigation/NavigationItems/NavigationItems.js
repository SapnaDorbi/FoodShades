import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationitems = () => (
    <ul className={classes.Navigationitems}>
        <NavigationItem link="/" active>Burger Buuilder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationitems;