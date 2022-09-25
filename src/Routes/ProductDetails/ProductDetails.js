import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountDiv from '../../components/CountDiv/CountDiv.js';
import './ProductDetails.css';
import CartContext from '../../context/cart/CartContext.js';
import ProductContext from '../../context/product/ProductContext.js';

const ProductDetails = () => {
    const { productName } = useParams();
    const headName = productName[0].toUpperCase() + productName.slice(1);
    const { addProduct, removeProduct, cartData } = useContext(CartContext);
    const { productData, incProduct, decProduct } = useContext(ProductContext);
    const [turtleSrc, setTurtleSrc] = useState('https://preview.redd.it/9wy3z3wwx0181.png?width=438&format=png&auto=webp&s=b792fbbf87f07799697eee540cead9fde400f9fb');
    const [tunaSrc, setTunaSrc] = useState('https://pbs.twimg.com/media/BsnZMB7IEAEiCV3?format=jpg&name=small');

    const addItemhandler = async (id, name) => {
        await incProduct({ name, id });
        const index = productData[name].findIndex(x => x.key === id);
        const idx = cartData.findIndex(x => x.key === id);
        if (idx === -1) {
            addProduct(
                {
                    ...productData[name][index],
                    productIndex: index
                }
            );
        }
    }

    const removeItemhandler = async (id, name) => {
        await decProduct({ name, id });
        const idx = cartData.findIndex(x => x.key === id);
        const index = productData[name].findIndex(x => x.key === id);
        if (idx > -1 && productData[name][index].count === 0) {
            removeProduct(id);
        }
    }
    return (
        <>
            <h1 className='product-heading'>{headName}</h1>
            <div className='product-container'>
                {productData[productName].map(el => {
                    return (
                        <div key={el.key} className="product-card">
                            {el.name === 'Turtles' ? <img
                                onMouseEnter={() =>
                                    setTurtleSrc('https://c.tenor.com/CdhTfPl6IbMAAAAC/the-office-michael-scott.gif')}
                                onMouseLeave={() =>
                                    setTurtleSrc('https://preview.redd.it/9wy3z3wwx0181.png?width=438&format=png&auto=webp&s=b792fbbf87f07799697eee540cead9fde400f9fb')}
                                src={turtleSrc}
                                alt={'Turtles'} />
                                : el.name === 'Big Tuna' ? <img
                                    onMouseEnter={() =>
                                        setTunaSrc('https://c.tenor.com/oYx4kIdnxlEAAAAC/andy-bernard-fishing.gif')}
                                    onMouseLeave={() =>
                                        setTunaSrc('https://pbs.twimg.com/media/BsnZMB7IEAEiCV3?format=jpg&name=small')}
                                    src={tunaSrc}
                                    alt={'Turtles'} />
                                    : <img
                                        src={el.link}
                                        alt={`${el.name}`} />}
                            <h2 className='product-name'>{el.name}</h2>
                            <h3 className='product-price'>${el.price}</h3>
                            {el.count ? <CountDiv
                                count={el.count}
                                addItemhandler={() => addItemhandler(el.key, el.category)}
                                removeItemhandler={() => removeItemhandler(el.key, el.category)}
                            /> :
                                <div
                                    onClick={() => addItemhandler(el.key, el.category)}
                                    className='add-to-cart'>Add To Cart
                                </div>}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ProductDetails;
