import List from "./List";
import "/src/style/productsList.css";

function ProductsList({ products, onDelete, setProducts }) {
  console.log("ProductsList rendering with products:", products);
  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };
  return (
    <div className="product-list-wrapper">
      <h2>Product List</h2>
      <List products={products} handleDelete={handleDelete} />
    </div>
  );
}
export default ProductsList;
