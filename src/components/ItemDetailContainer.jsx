import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail.jsx";
import db from "../db/db.js";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const productRef = doc(db, "products", id);
        getDoc(productRef)
            .then((response) => {
                const dbProduct = { id: response.id, ...response.data() };
                setProduct(dbProduct);
            })
    }, [id]);
    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer;