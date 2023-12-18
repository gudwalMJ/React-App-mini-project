import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UpdateProductForm = ({ product, onUpdate }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        // Add other fields as necessary
    });

    // Load product data into the form when the component mounts or when the product changes
    useEffect(() => {
        if (product) {
            setFormData({
                title: product.title,
                description: product.description,
                price: product.price,
                // Load other fields as necessary
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
        onUpdate(product.id, formData);
        console.log('Form submitted with data:', formData);
    };

    return (
        <div className='update-product-form-wrapper'>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className='input-field-'
                    />
                </label>
                <label>
                    Description:
                    <input
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className='input-field'
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
                        className='input-field'
                    />
                </label>
                {/* Add other fields as necessary */}
                <button type='submit'>Update Item</button>
            </form>
        </div>
    );
};

UpdateProductForm.propTypes = {
    product: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default UpdateProductForm;
