import { ADD_TO_CART, REMOVE_FROM_CART } from '../Types';

const CartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.payload,
            ]
        case REMOVE_FROM_CART:
            return state.filter(el => el.key !== action.payload);
        default:
            return state;
    }
}

export default CartReducer;