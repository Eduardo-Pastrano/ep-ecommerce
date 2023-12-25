import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "./utils/data.js";
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams() 

    useEffect(() => {
        getProducts
            .then((response) => {
                const getProductById = response.find((prod) => prod.id === id)
                setProduct(getProductById);
            })
    },)
    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer;