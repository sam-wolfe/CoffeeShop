import "./cartitem.css";
import { useState } from 'react';

const DrinkSize = () => {

    const [size, setSize] =  useState(true);

    return (
        // TODO remove hack when drink size is attached to order item not cart item
        <div className="size-holder">
            <div className="reg" onClick={() => {
                setSize(true)
            }} style={{border: !size ? "3px solid rgba(12, 25, 51, 0.4)" : "3px solid rgba(12, 25, 51)"}}>Regular</div>
            <div className="large" onClick={() => {
                setSize(false)
            }} style={{border: size ? "3px solid rgba(12, 25, 51, 0.4)" : "3px solid rgba(12, 25, 51)"}}>Large</div>
        </div>
    )
}

const CartItem = ({children, drink}) => {
    return (
        <div className="cartitem"><div >{children}</div> {drink && <DrinkSize/>}</div>
    )
}

export default CartItem;