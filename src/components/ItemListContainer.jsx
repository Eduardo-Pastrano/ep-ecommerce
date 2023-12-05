import { Heading } from '@chakra-ui/react'

const ItemListContainer = ({ greeting }) => {
    return (
        <Heading align='center'>{greeting}</Heading>
    )
}

export default ItemListContainer;