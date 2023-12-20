import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Fetch image related to title using Unsplash API
            const unsplashResponse = await axios.get(
                'https://api.unsplash.com/photos/random',
                {
                    params: {
                        query: formData.title,
                        orientation: 'landscape',
                        client_id:
                            '9qNHi7_HLW6Qw3N4ko1WvrE0DMOd68hmU-K02BFjMtg',
                    },
                }
            );

            const imageUrl = unsplashResponse.data.links.download;

            // Adds the image URL to the data object before calling the onAdd function
            const newData = {
                ...formData,
                thumbnail: imageUrl,
                images: [imageUrl],
            };

            onAdd(newData);

            setFormData({
                title: '',
                description: '',
                price: '',
            });
        } catch (error) {
            console.error('error when searching image:', error);
        }
    };

    return (
        <div className='product-form-wrapper'>
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
                        type='text'
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

ProductForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

export default ProductForm;
