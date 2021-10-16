import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [filteredPd, setFilteredPd] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredPd(data)
            })
    }, []);
    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        if (products.length) {
            for (const key in savedCart) {
                const addedProducts = products.find(product => product.key === key)
                if (addedProducts) {
                    const quantity = savedCart[key];
                    addedProducts.quantity = quantity;
                    storedCart.push(addedProducts);
                }
            }
            setCart(storedCart);
        }
    }, [products]);
    const handleAddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.key);
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredPd(matchedProduct);

        console.log(matchedProduct.length);
    }
    return (
        <div>
            <div className="search-container">
                <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search Product" />
            </div>
            <div className="shop-container">
                <div className="product-container">

                    {
                        filteredPd.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;