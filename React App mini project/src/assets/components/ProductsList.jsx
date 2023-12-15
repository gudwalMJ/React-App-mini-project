import { useState } from 'react';
import List from './List';
import productsData from '../../../products.json';
import '/src/style/productsList.css';
function ProductsList({ products, onDelete, setProducts }) {
    const handleDelete = (productId) => {
        const updatedProducts = products.filter(
            (product) => product.id !== productId
        );
        setProducts(updatedProducts);
    };
    return (
        <div className='product-list-wrapper'>
            <h2>Product List</h2>
            <List products={products} handleDelete={handleDelete} />
        </div>
    );
}
export default ProductsList;
