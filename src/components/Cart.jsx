import { useContext } from 'react';
import { Button } from "@chakra-ui/react";
import { CartContext } from '../context/CartContext.jsx';

const Cart = () => {
    const { cart, delProductFromCart, emptyCart } = useContext(CartContext);

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
                <li>
                    <Button onClick={emptyCart} colorScheme='red'>Empty cart</Button>
                </li>
            </ul>
        </>
    )
}

export default Cart