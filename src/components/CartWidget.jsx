import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { totalQty } = useContext(CartContext);

    return (
        <>
            <img src="/img/shopping-bag.png" alt="shopping-bag" className='shopping-bag' />{totalQty()}
        </>
    )
}

export default CartWidget;