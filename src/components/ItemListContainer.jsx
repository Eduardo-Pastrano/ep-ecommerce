import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from './ItemList.jsx';
import db from "../db/db.js";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        setLoading(true);

        let check
        const productsRef = collection(db, "products");

        if (category) {
            check = query(productsRef, where("category", "==", category))
        } else {
            check = productsRef;
        }

        getDocs(check)
            .then((response) => {
                let dbProducts = response.docs.map((product) => {
                    return { id: product.id, ...product.data() };
                });
                setProducts(dbProducts);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [category]);

    return (
        <>
            {
                loading ? (
                    <div className='loader'>
                        <SyncLoader color="#57bce4" size={30} />
                    </div>
                ) : (
                    <div className='item-list-container'>
                        <ItemList products={products} />
                    </div>
                )
            }
        </>
    )
};

export default ItemListContainer;