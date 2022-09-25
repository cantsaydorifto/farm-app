import React from 'react';
import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from './CartReducer';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../Types';


const CartState = (props) => {
    const initialState = [];

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addProduct = item => {
        dispatch({ type: ADD_TO_CART, payload: item });
    }
    const removeProduct = item => {
        dispatch({ type: REMOVE_FROM_CART, payload: item });
    }

    return (
        <CartContext.Provider
            value={{
                cartData: state,
                addProduct,
                removeProduct,
            }}
        >{props.children}</CartContext.Provider>
    );
}

export default CartState;
