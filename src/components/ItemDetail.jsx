import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
    return (
        <div className="item-detail-container">
            <div className="item-detail">
                <div className='detail-img-container'>
                    <img src={product.pictureUrl} alt={product.title} className='detail-img' />
                </div>
                <div className='detail-info'>
                    <div className='detail-title'>
                        <p>{product.title}</p>
                    </div>
                    <div className='detail-about'>
                        <h3>Highlights</h3>
                        <ul>
                            <li>{product.about1}</li>
                            <li>{product.about2}</li>
                            <li>{product.about3}</li>
                        </ul>
                    </div>
                    <div className='detail-description'>
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>
                    <div className='detail-price'>
                        <p>${product.price}</p>
                    </div>
                </div>
            </div>
            <div className='item-count-container'>
                <ItemCount stock={product.stock} />
            </div>
        </div>
    )
}

export default ItemDetail;