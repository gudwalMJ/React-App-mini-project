import React, { useState } from "react";
import productsData from "/products.json";
import "/src/style/productsList.css";

function ProductList() {
  const [products, setProducts] = useState(productsData);
  console.log(products);
  return (
    <div>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.thumbnail} alt={product.title} />
            <div className="textPart">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>
                <span className="bold-text">Price:</span> ${product.price}
              </p>
              {/* Add any additional information you want to display */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
