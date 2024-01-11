import { createContext, useState } from "react";

//Creamos un contexto de React
const CartContext = createContext();

const CartProvider = ({ children }) => {
    //Estado del carrito en el que se guardarán los productos añadidos
    const [cart, setCart] = useState([])

    const addProduct = (product) => {
        const condition = isInCart(product.id)
        if (condition) {
            const modifiedProducts = cart.map((cartProduct) => {
                if (cartProduct.id === product.id) {
                    return { ...cartProduct, quantity: cartProduct.quantity + product.quantity }
                } else {
                    return cartProduct;
                }
            })
            setCart(modifiedProducts);
        } else {
            setCart([...cart, product])
        }
    }

    const isInCart = (productId) => {
        return cart.some((product) => product.id === productId)
    }

    const totalQty = () => {
        return cart.reduce((total, product) => total + product.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((total, product) => total + (product.quantity * product.price), 0)
    }

    const emptyCart = () => {
        setCart([]);
    }

    const delProductFromCart = (productId) => {
        const filteredProducts = cart.filter((product) => product.id !== productId)
        setCart(filteredProducts);
    }

    return (
        <CartContext.Provider value={{ cart, addProduct, totalQty, totalPrice, emptyCart, delProductFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext };