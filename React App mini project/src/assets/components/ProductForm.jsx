import React, { useState } from 'react';
const ProductForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add validation here before adding the item
        onAdd(formData);
        // Reset the form after submission
        setFormData({
            title: '',
            description: '',
            price: '',
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type='text'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Description:
                <textarea
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    required
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
                />
            </label>
            <button type='submit'>Add Item</button>
        </form>
    );
};
export default ProductForm;
