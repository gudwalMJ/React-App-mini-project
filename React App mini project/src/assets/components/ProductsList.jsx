import List from "./List";
import "/src/style/productsList.css";
import PropTypes from "prop-types";

function ProductsList({ products, setProducts }) {
  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };
  return (
    <div className="product-list-wrapper">
      <h1>Products</h1>
      <List products={products} handleDelete={handleDelete} />
    </div>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
};

export default ProductsList;
