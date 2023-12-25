import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="item">
            <div className="img-container">
                <img className="item-img" src={product.pictureUrl} alt={product.title} />
            </div>
            <div className="item-details-container">
                <p className="item-title">{product.title}</p>
                <p className="item-price">${product.price}</p>
                <div className="item-btn-container">
                    <Link to={`/detail/${product.id}`}>
                        <Button className="item-link">More details</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item;