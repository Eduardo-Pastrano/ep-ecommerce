import { useState } from "react";
import { Button } from "@chakra-ui/react";

const ItemCount = ({ stock }) => {
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
            <div className="item-count-btn">
                <Button onClick={increase} colorScheme="blue">➕</Button>
                <p>{count}</p>
                <Button onClick={decrease} colorScheme="blue">➖</Button>
            </div>
        </>
    );
};

export default ItemCount;