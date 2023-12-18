import { useState } from 'react';

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

        onAdd(formData);

        setFormData({
            title: '',
            description: '',
            price: '',
        });
    };
    return (
        <div className='product-form-wrapper'>
            {' '}
            <form onSubmit={handleSubmit} className='form-wrapper'>
                <label>
                    Title:
                    <input
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className='input-field'
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
                <button className='add-item-button' type='submit'>
                    Add Item
                </button>
            </form>
        </div>
    );
};
export default ProductForm;
