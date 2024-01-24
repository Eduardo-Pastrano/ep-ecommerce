import { useState, useContext } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../db/db.js";
import { CartContext } from '../context/CartContext.jsx';
import Form from "./Form.jsx";

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const [orderId, setOrderId] = useState(null);
    const { cart, totalPrice, emptyCart } = useContext(CartContext);

    const saveInputData = () => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const sendOrder = (event) => {
        event.preventDefault();

        const itemSummary = cart.map(product => ({
            title: product.title,
            price: product.price,
            quantity: product.quantity,
            description: product.description,
        }));

        const order = {
            buyer: {
                client: { ...formData },
            },
            items: {
                products: itemSummary,
            },
            date: new Date(),
            total: totalPrice(),
        }

        submitOrder(order);
    }

    const submitOrder = (order) => {
        const ordersRef = collection(db, "orders");
        addDoc(ordersRef, order).then((response) => {
            setOrderId(response.id)
            emptyCart();
        });
    }

    return (
        <div>
            {
                orderId ? (
                    <div>
                        <h2>Thank you for shopping with us!</h2>
                        <p>Your order number is: {orderId}</p>
                    </div>
                ) : (
                    <Form formData={formData} saveInputData={saveInputData} sendOrder={sendOrder} />
                )
            }
        </div>
    )
}

export default Checkout