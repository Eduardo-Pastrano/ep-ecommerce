import { useContext } from 'react';
import { Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const Cart = () => {
    const { cart, delProductFromCart, emptyCart, totalPrice } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div>
                <h1>Your cart is empty 😔</h1>
                <Link to="/">
                    <Button className="item-link">Go to home</Button>
                </Link>
            </div>
        );
    }

    return (
        <>
            <ul>
                {
                    cart.map((product) => (
                        <li key={product.id}>
                            <img src={product.pictureUrl} alt="" />
                            <p>Product: {product.title}</p>
                            <p>Price: {product.price}</p>
                            <p>Quantity: {product.quantity}</p>
                            <Button onClick={() => delProductFromCart(product.id)} colorScheme='red'>X</Button>
                        </li>
                    ))
                }
                <h2>Cart total: ${totalPrice()}</h2>
                <li>
                    <Button onClick={emptyCart} colorScheme='red'>Empty cart</Button>
                </li>
            </ul>
        </>
    )
}

export default Cart