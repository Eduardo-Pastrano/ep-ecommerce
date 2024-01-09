import { useState, useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from "../context/CartContext.jsx"

const ItemDetail = ({ product }) => {

    const [toggle, setToggle] = useState(false);
    const { addProduct } = useContext(CartContext);

    const addToCart = (count) => {
        const newProduct = { ...product, quantity: count };
        addProduct(newProduct);
        setToggle(true);
    }

    return (
        <div className="item-detail-container">
            <div className="item-detail">
                <div className='detail-img-container'>
                    <img src={product.pictureUrl} alt={product.title} className='detail-img' />
                </div>
                <div className='detail-info'>
                    <div className='detail-title'>
                        <p>{product.title}</p>
                    </div>
                    <div className='detail-about'>
                        <h3>Highlights</h3>
                        <ul>
                            <li>{product.key1}</li>
                            <li>{product.key2}</li>
                            <li>{product.key3}</li>
                        </ul>
                    </div>
                    <div className='detail-description'>
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>
                    <div className='detail-price'>
                        <p>${product.price}</p>
                    </div>
                </div>
            </div>
            {toggle ? (
                <div className="checkout-btn-container">
                    <Link to="/cart">
                        <Button className="checkout-btn">Go to checkout</Button>
                    </Link>
                </div>
            ) : (
                <div className='item-detail-count-container'>
                    <ItemCount stock={product.stock} addToCart={addToCart} />
                </div>
            )}
        </div>
    )
}

export default ItemDetail;