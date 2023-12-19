import { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';
import getProducts from './utils/data.js';
import ItemList from './ItemList.jsx';

const ItemListContainer = ({ greeting, }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts
            .then((response) => {
                setProducts(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Promise completed")
            })
    }, []);

    return (
        <div className='item-container'>
            <Heading align='center'>{greeting}</Heading>
            <ItemList products={products} />
        </div>
    )
};

export default ItemListContainer;