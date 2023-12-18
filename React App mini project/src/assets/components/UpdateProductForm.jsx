import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const UpdateProductForm = ({ product, onUpdate }) => {
<<<<<<< HEAD
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
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
=======
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
                discount: product.discount,
                rating: product.rating,
                brand: product.brand,
                // Load other fields as necessary
            });
        }
    }, [product]);
>>>>>>> 43d6ca47f71de2b840a406f2274b4ccf8b7693b7

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

<<<<<<< HEAD
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    onUpdate(product.id, formData);
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="update-product-form-wrapper">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="input-field-"
          />
        </label>
        <label>
          Description:
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="input-field"
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="input-field"
          />
        </label>
        {/* Add other fields as necessary */}
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
=======
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
                        type='string'
                        name='brand'
                        value={formData.brand}
                        onChange={handleChange}
                        required
                        className='input-field-update'
                    />
                </label>
                {/* Add other fields as necessary */}
                <button className='update-item-button' type='submit'>
                    Update Item
                </button>
            </form>
        </div>
    );
>>>>>>> 43d6ca47f71de2b840a406f2274b4ccf8b7693b7
};

UpdateProductForm.propTypes = {
  product: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UpdateProductForm;
