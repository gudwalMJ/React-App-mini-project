import React from "react";

function ListItem({ product, defaultStockAmount, handleDelete }) {
  return (
    <li key={product.id} className="product-item">
      {product.stock < defaultStockAmount && (
        <span key="low-stock" className="low-stock">
          LOW STOCK
        </span>
      )}
      <img src={product.thumbnail} alt={product.title} />
      <div className="textPart">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Stock: {product.stock}</p>
        <p>
          <span className="bold-text">Price:</span> ${product.price}
        </p>
        {/* */}
        <div className="Delete-button">
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      </div>
    </li>
  );
}

export default ListItem;
