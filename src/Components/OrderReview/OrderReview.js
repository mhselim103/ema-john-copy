import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useproducts';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            {/* <h1>{setProducts([])}</h1> */}
            <h1>{products.length}</h1>
            <h1>{cart.length}</h1>
        </div>
    );
};

export default OrderReview;