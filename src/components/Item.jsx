import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Item = ({ product }) => {
    const [zoom, setZoom] = useState(false);

    const handleMouseOver = () => {
        setZoom(true);
    };

    const handleMouseLeave = () => {
        setZoom(false);
    };

    const imgStyle = {
        transform: zoom ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform .3s ease-in-out'
    } 
    

    return (
        <div className="item">
            <div className="img-container">
                <img style={imgStyle} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className="item-img" src={product.pictureUrl} alt={product.title} />
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