import { useState } from 'react';
import ProductsList from '../components/ProductsList';
import ProductForm from '../components/ProductForm';
import productsData from '../../../products.json';

function DashboardPage() {
    const [products, setProducts] = useState(productsData);
    const handleDelete = (productId) => {
        const updatedProducts = products.filter(
            (product) => product.id !== productId
        );
        setProducts(updatedProducts);
    };
    const addProduct = (newProduct) => {
        console.log('Adding product:', newProduct);
        // Update the state with the new product and use the callback
        setProducts([newProduct, ...products]);
    };
    console.log('Updated Products:', products); // Add this line
    return (
        <div>
            <ProductForm onAdd={addProduct} />
            <ProductsList
                products={products}
                handleDelete={handleDelete}
                setProducts={setProducts}
            />
        </div>
    );
}
export default DashboardPage;
