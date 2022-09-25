import React from 'react';
import CartContext from '../../context/cart/CartContext.js';
import { useContext } from 'react';
import './CartItems.css';
import ProductContext from '../../context/product/ProductContext.js';
import { useState, useEffect } from 'react';

const CartItems = () => {
    const { productData, setZero, incProduct, decProduct } = useContext(ProductContext);
    const { cartData, removeProduct } = useContext(CartContext);
    const [priceCount, setPriceCount] = useState(0);

    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        const fun = async () => {
            const arr = [...cartData];
            arr.forEach((el, i, arr) => {
                arr[i] = {
                    ...productData[el.category][el.productIndex],
                    productIndex: el.productIndex
                };
            });
            await setCartList(arr);
            let cnt = 0;
            arr.forEach((el, i) => {
                cnt += (el.price * el.count);
                setPriceCount(cnt);
            });
        }
        fun();
    }, [cartData, productData]);

    const removeHandler = async(id, name) => {
        await setZero({ name, id });
        removeProduct(id);
    }

    const plusHandler = (id, name) => {
        incProduct({ name, id });
    }
    const decHandler = async (id, name, idx) => {
        await decProduct({ name, id });
        if (productData[name][idx].count === 0) {
            removeProduct(id);
        }
    }

    return (
        <>
            <h2 className='cart-item-heading'>Cart Items</h2>
            <h3 className='cart-count'>Number of Items : {cartList.length}</h3>
            <div className='cart-container'>
                {cartList.map((el) => {
                    return (
                        <div key={el.key} className="cart-item-card">
                            <img className='cart-item-img' src={el.link} alt={`${el.name}`} />
                            <button className='remove-item-button change-count-button' onClick={() => decHandler(el.key, el.category, el.productIndex)}>-</button>
                            <div className='cart-item-count'>{el.count}</div>
                            <button className='remove-item-button change-count-button' onClick={() => plusHandler(el.key, el.category)}>+</button>
                            <div className="cart-name-div">
                                <h2 className='cart-item-name'>{el.name}</h2>
                                <h3 className='cart-item-price'>${el.price}</h3>
                            </div>
                            <button onClick={() => removeHandler(el.key, el.category)} className='remove-item-button'>Remove Item</button>
                        </div>
                    );
                })}
            </div>
            <hr className='checkout-line' />
            <div className='checkout-div'>
                <div>Total Price :</div>
                <div className='checkout-price-div'>${priceCount}</div>
            </div>
        </>
    );
}

export default CartItems;
