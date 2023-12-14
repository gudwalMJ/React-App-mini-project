import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../../../products.json";

function ItemDetailsPage() {
  const { id } = useParams();
  console.log(id);
  const product = productsData.find(
    (product) => String(product.id) === String(id)
  );
  console.log(productsData);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>No product found with ID: {id}</p>
      )}
    </div>
  );
}

export default ItemDetailsPage;
