import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UpdateProductForm = ({ product, onUpdate }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        stock: '',
        discount: '',
        rating: '',
        brand: '',
    });

    // Load product data into the form when the component mounts or when the product changes
    useEffect(() => {
        if (product) {
            setFormData({
                title: product.title,
                description: product.description,
                price: product.price,
                stock: product.stock,
                discount: product.discountPercentage,
                rating: product.rating,
                brand: product.brand,
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onUpdate(product.id, formData);
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className='update-product-form-wrapper'
            >
                <label>
                    Title:
                    <input
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className='input-field-update'
                    />
                </label>
                <label>
                    Description:
                    <input
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className='input-field-update'
                    />
                </label>
                <label>
                    Price:
                    <input
                        type='number'
                        name='price'
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className='input-field-update'
                    />
                </label>
                <label>
                    Stock:
                    <input
                        type='number'
                        name='stock'
                        value={formData.stock}
                        onChange={handleChange}
                        required
                        className='input-field-update'
                    />
                </label>
                <label>
                    Discount:
                    <input
                        type='number'
                        name='discount'
                        value={formData.discount}
                        onChange={handleChange}
                        required
                        className='input-field-update'
                    />
                </label>
                <label>
                    Rating:
                    <input
                        type='number'
                        name='rating'
                        value={formData.rating}
                        onChange={handleChange}
                        required
                        className='input-field-update'
                    />
                </label>
                <label>
                    Brand:
                    <input
                        type='text'
                        name='brand'
                        value={formData.brand}
                        onChange={handleChange}
                        required
                        className='input-field-update'
                    />
                </label>

                <button className='update-item-button' type='submit'>
                    Update Item
                </button>
            </form>
        </div>
    );
};

UpdateProductForm.propTypes = {
    product: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default UpdateProductForm;
