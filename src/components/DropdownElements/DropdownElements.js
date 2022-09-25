import React from 'react';
import './DropdownElements.css';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

const DropdownElements = ({ duration, cartState, setCartState }) => {
    return (
        <>
            <div onMouseEnter={() => setCartState(prev => !prev)}
                onMouseLeave={() => setCartState(prev => !prev)}
                className="invisibleDiv"></div>
            <CSSTransition
                in={cartState}
                timeout={duration}
                unmountOnExit
                mountOnEnter
                classNames='dropdown'>
                <div onMouseEnter={() => setCartState(prev => !prev)}
                    onMouseLeave={() => setCartState(prev => !prev)}
                    className='dropdown'>
                    <Link className="go-to-cart" to="cart">Go to Cart</Link>
                    <div className="wishList">Wish List</div>
                </div>
            </CSSTransition>
        </>
    );
}

export default DropdownElements;
