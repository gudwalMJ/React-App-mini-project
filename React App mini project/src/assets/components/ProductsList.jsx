// ProductsList.jsx
import React, { useState } from "react";
import List from "./List"; // Import the new List component
import productsData from "../../../products.json";
import "/src/style/productsList.css";

function ProductsList() {
  const [products, setProducts] = useState(productsData);

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2>Product List</h2>
      <List products={products} handleDelete={handleDelete} />
    </div>
  );
}

export default ProductsList;
