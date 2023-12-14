import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ListItem({ product, defaultStockAmount, handleDelete }) {
    const productId = product?.id;
    return (
        <li key={productId} className='product-item'>
            <Link to={`/item/${productId}`}>
                <div className='product-image-wrapper'>
                    <img src={product.thumbnail} alt={product.title} />
                </div>
            </Link>

            <div className='textPart'>
                <h3>{product.title}</h3>
                <p>
                    <span className='bold-text'>Price:</span> ${product.price}
                </p>
                <div className='delete-button'>
                    <button onClick={() => handleDelete(productId)}>
                        Delete
                    </button>
                    {product.stock < defaultStockAmount && (
                        <span key='low-stock' className='low-stock'>
                            LOW STOCK
                        </span>
                    )}
                </div>
            </div>
        </li>
    );
}

ListItem.propTypes = {
    product: PropTypes.object,
    defaultStockAmount: PropTypes.number,
    handleDelete: PropTypes.func,
};

export default ListItem;
