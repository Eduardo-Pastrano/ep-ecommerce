import { useState, useContext } from "react";
import { addDoc, collection } from "firebase/firestore";
import Swal from 'sweetalert2';
import { CartContext } from '../context/CartContext.jsx';
import db from "../db/db.js";
import Form from "./Form.jsx";

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        confirmEmail: "",
        phone: "",
    })

    const [orderId, setOrderId] = useState(null);
    const { cart, orderTotal, emptyCart } = useContext(CartContext);

    const saveInputData = () => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const sendOrder = (event) => {
        event.preventDefault();

        if (formData.email === formData.confirmEmail) {

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
                total: orderTotal(),
            }

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your purchase is being processed!",
                showConfirmButton: false,
                timer: 1500
            });

            submitOrder(order);
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "The emails are not the same!",
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        }
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
                    <div className="order-placed">
                        <h2>Thank you for shopping with us!🛒</h2>
                        <p>Your order number is: <span>{orderId}</span></p>
                        <p className="contact-msg">We will be contacting you via email at: <span>{formData.email}</span> to process payment💳 and delivery🚚!</p>
                    </div>
                ) : (
                    <Form formData={formData} saveInputData={saveInputData} sendOrder={sendOrder} />
                )
            }
        </div>
    )
}

export default Checkout