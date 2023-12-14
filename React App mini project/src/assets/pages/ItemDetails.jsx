import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../../products.json';

function ItemDetailsPage() {
    const { id } = useParams();
    console.log(id);
    const product = productsData.find(
        (product) => String(product.id) === String(id)
    );
    console.log(productsData);

    return (
        <div>
            {product ? (
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Stock: {product.stock}</p>
                    <p>Price: ${product.price}</p>
                    <p>Discount: {product.discountPercentage}%</p>
                    <p>Rating: {product.rating}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Category: {product.category}</p>
                    {product.images && (
                        <div>
                            <ul>
                                {product.images.map((image, index) => (
                                    <li key={index}>
                                        <img
                                            src={image}
                                            alt={`Product ${index + 1}`}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {/* Add more information as needed */}
                </div>
            ) : (
                <p>No product found with ID: {id}</p>
            )}
        </div>
    );
}

export default ItemDetailsPage;
