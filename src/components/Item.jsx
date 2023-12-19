import ItemCount from './ItemCount';

const Item = ({ product }) => {
    return (
        <div className="item">
            <img className="item-img" src={product.pictureUrl} alt={product.title} />
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
            <ItemCount stock={product.stock} />
        </div>
    )
}

export default Item;