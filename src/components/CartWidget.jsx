import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cart, totalQty } = useContext(CartContext);

    return (
        <>
            <img src="/img/shopping-bag.png" alt="shopping-bag" className='shopping-bag' />{cart.length !== 0 && <p>{totalQty()}</p>}
        </>
    )
}

export default CartWidget;