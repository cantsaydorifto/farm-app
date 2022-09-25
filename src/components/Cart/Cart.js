import React, { useContext, useState } from 'react';
import './Cart.css';
import cartLogo from '../../icons/shopping-cart.png';
import DropdownElements from '../DropdownElements/DropdownElements';
import CartContext from '../../context/cart/CartContext';

const duration = 250;

const Cart = () => {
    const {cartData} = useContext(CartContext);

    const [cartState, setCartState] = useState(false);

    return (
        <>
            <div className='Cart'
                onMouseEnter={() => setCartState(prev => !prev)}
                onMouseLeave={() => setCartState(prev => !prev)}
            >
                <img className='cartLogo' src={cartLogo} alt="Shopping Cart" />
            </div>
            <div className="count-cart">{cartData.length}</div>
            <DropdownElements duration={duration} cartState={cartState} setCartState={setCartState} />
        </>
    );
}

export default Cart;
