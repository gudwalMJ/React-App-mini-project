// UpdateItemForm.jsx
import React, { useState, useEffect } from "react";

const UpdateItemForm = ({ currentItem, onUpdateItem, onCancelUpdate }) => {
  const [updatedItem, setUpdatedItem] = useState({
    title: currentItem.title,
    description: currentItem.description,
    // Add other fields as needed
  });

  useEffect(() => {
    // Update the form fields when currentItem changes
    setUpdatedItem({
      title: currentItem.title,
      description: currentItem.description,
      // Update other fields as needed
    });
  }, [currentItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateItem(currentItem.id, updatedItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={updatedItem.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={updatedItem.description}
          onChange={handleChange}
          required
        />
      </label>
      {/* Add other form fields as needed */}
      <button type="submit">Update Item</button>
      <button type="button" onClick={onCancelUpdate}>
        Cancel
      </button>
    </form>
  );
};

export default UpdateItemForm;
