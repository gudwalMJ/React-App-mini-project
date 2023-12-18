import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import UpdateProductForm from '../components/UpdateProductForm';

function ItemDetailsPage({ products, updateProduct }) {
    const { id } = useParams();

    const product = products.find(
        (product) => String(product.id) === String(id)
    );

    return product ? (
        <div className='item-details-page-wrapper'>
            <h1>{product.title}</h1>
            <p>
                {' '}
                <strong>Description:</strong> {product.description}
            </p>
            <p>
                <strong>Stock:</strong> {product.stock}
            </p>
            <p>
                <strong>Price:</strong> ${product.price}
            </p>
            <p>
                <strong>Discount:</strong> {product.discount}%
            </p>
            <p>
                <strong>Rating:</strong> {product.rating}
            </p>
            <p>
                <strong>Brand:</strong> {product.brand}
            </p>
            <p>
                <strong>Category:</strong> {product.category}
            </p>
            {product.images && (
                <div className='item-details-page'>
                    <ul>
                        {product.images.map((image, index) => (
                            <li key={index}>
                                <img src={image} alt={`Product ${index + 1}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <UpdateProductForm product={product} onUpdate={updateProduct} />
        </div>
    ) : (
        <p>No product found with ID: {id}</p>
    );
}

ItemDetailsPage.propTypes = {
    products: PropTypes.array.isRequired,
    updateProduct: PropTypes.func.isRequired,
};

export default ItemDetailsPage;
