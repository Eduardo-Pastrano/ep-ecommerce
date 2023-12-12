import { Heading } from '@chakra-ui/react';

const ItemListContainer = ({ greeting, children }) => {
    return (
        <div className='item-container'>
            <Heading align='center'>{ greeting }</Heading>
            {children}
        </div>
    )
}

export default ItemListContainer;