import React from 'react';
import { useReducer } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from './ProductReducer';
import { INCREMENT_PRODUCT_COUNT, DECREMENT_PRODUCT_COUNT, SET_COUNT_ZERO } from '../Types';
import productData from '../../product-data';


const ProductState = (props) => {
    const initialState = {
        ...productData,
    };

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const incProduct = item => {
        dispatch({ type: INCREMENT_PRODUCT_COUNT, payload: item });
    }
    const decProduct = item => {
        dispatch({ type: DECREMENT_PRODUCT_COUNT, payload: item });
    }
    const setZero = item => {
        dispatch({ type: SET_COUNT_ZERO, payload: item });
    }

    return (
        <ProductContext.Provider
            value={{
                productData: state,
                incProduct,
                decProduct,
                setZero
            }}
        >{props.children}</ProductContext.Provider>
    );
}

export default ProductState;
