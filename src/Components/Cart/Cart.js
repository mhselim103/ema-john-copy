import './Cart.css'
import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const tax = total * .10;
    const grandTotal = total + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Item Ordered:{totalQuantity}</h5>
            <h3>Total:{total.toFixed(2)}</h3>
            <h4>Tax:{tax.toFixed(2)} </h4>
            <h4>Grand Total:{grandTotal.toFixed(2)} </h4>
        </div>
    );
};

export default Cart;