// List.jsx
import React from "react";
import ListItem from "./ListItem"; // Import the new ListItem component

function List({ products, handleDelete }) {
  const defaultStockAmount = 60;

  return (
    <div className="productsList-wrapper">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ListItem
            key={product.id}
            product={product}
            defaultStockAmount={defaultStockAmount}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
