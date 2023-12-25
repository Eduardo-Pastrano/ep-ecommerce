import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import getProducts from './utils/data.js';
import ItemList from './ItemList.jsx';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        getProducts
            .then((response) => {
                if (category) {
                    const filteredProducts = response.filter((product) => product.category === category)
                    setProducts(filteredProducts);
                } else {
                    setProducts(response);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
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