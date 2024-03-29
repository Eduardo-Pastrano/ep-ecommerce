import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SyncLoader } from 'react-spinners';
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail.jsx";
import Error from "./Error.jsx";
import db from "../db/db.js";

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({})
    const [productExists, setProductExists] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        setLoading(true);

        const productRef = doc(db, "products", id);
        getDoc(productRef)
            .then((response) => {
                const dbProduct = { id: response.id, ...response.data() };

                if (!response.exists()) {
                    setProductExists(true)
                }

                setProduct(dbProduct);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <section>
            {
                productExists ? (
                    <Error message='404 product not found'/>
                ) : (
                    loading ? (
                        <div className='loader'>
                            <SyncLoader color="#57bce4" size={30} />
                        </div>
                    ) : (
                        <div>
                            <ItemDetail product={product} />
                        </div >
                    )
                )
            }
        </section>
    )
};

export default ItemDetailContainer;