// ProductsList.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "./List";
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
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/item/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
