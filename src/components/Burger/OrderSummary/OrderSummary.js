import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
             return( 
             <li key={igKey}>
                <span style={{textTransform: 'captialize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
        });
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delecious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Auxiliary>
    );
};

export default orderSummary;