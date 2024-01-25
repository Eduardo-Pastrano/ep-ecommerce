import { useContext } from 'react';
import { Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons"
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const Cart = () => {
    const { cart, delProductFromCart, emptyCart, orderTotal } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className='cart-empty'>
                <h1>Your cart is empty 😔</h1>
                <Link to="/">
                    <Button className="item-link">Go to home</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className='cart-container'>
            <ul className='cart-products'>
                {
                    cart.map((product) => (
                        <li key={product.id} className='item'>
                            <div className='img-container'>
                                <img src={product.pictureUrl} alt={product.title} className="item-img" />
                            </div>
                            <div className="item-details-container">
                                <p className="item-title">{product.title}</p>
                                <p className="item-price">Price: ${product.price}</p>
                                <p className="item-quantity">Quantity: {product.quantity}</p>
                                <div className="item-btn-container">
                                    <Button onClick={() => delProductFromCart(product.id)} colorScheme='red'>Remove<DeleteIcon boxSize={5} /></Button>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <ul className='cart-total-container'>
                <li className='cart-total'>
                    <strong>Cart total:</strong> ${orderTotal()}
                </li>
                <div className='cart-btn-container'>
                    <Link to="/checkout">
                        <Button colorScheme='green'>Go to checkout</Button>
                    </Link>
                    <Button onClick={emptyCart} colorScheme='red'>Empty cart</Button>
                </div>
            </ul>
        </div>
    )
}

export default Cart