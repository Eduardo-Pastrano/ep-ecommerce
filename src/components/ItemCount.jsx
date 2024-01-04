import { useState } from "react";
import { Button } from "@chakra-ui/react";

const ItemCount = ({ stock, addToCart }) => {
    const [count, setCount] = useState(1);

    const increase = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <div className="item-count-container">
                <div className="item-count-btn-container">
                    <Button onClick={increase} colorScheme="blue">➕</Button>
                    <p>{count}</p>
                    <Button onClick={decrease} colorScheme="blue">➖</Button>
                </div>
                <div className="item-add-btn-container">
                    <Button  onClick={ () => addToCart(count) } colorScheme="green" className="item-add-btn">Add to cart</Button>
                </div>
            </div>
        </>
    );
};

export default ItemCount;