// AddItemForm.jsx
import React, { useState } from "react";

const AddItemForm = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    // Add other fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic if needed
    onAddItem(newItem);
    setNewItem({
      title: "",
      description: "",
      // Reset other fields
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={newItem.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={newItem.description}
          onChange={handleChange}
          required
        />
      </label>
      {/* Add other form fields as needed */}
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
