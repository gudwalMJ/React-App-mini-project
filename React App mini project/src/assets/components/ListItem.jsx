import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ListItem({ product, defaultStockAmount, handleDelete }) {
  return (
    <li className="product-item">
      <Link to={`/item/${product.id}`}>
        <div className="product-image-wrapper">
          <img src={product.thumbnail} alt={product.title} />
        </div>
      </Link>

      <div className="textPart">
        <h3>{product.title}</h3>
        <p>
          <span className="bold-text">Price:</span> ${product.price}
        </p>
        <div className="delete-button">
          <button onClick={() => handleDelete(product.id)}>Delete</button>
          {product.stock < defaultStockAmount && (
            <span className="low-stock">LOW STOCK</span>
          )}
        </div>
      </div>
    </li>
  );
}

ListItem.propTypes = {
  product: PropTypes.object.isRequired,
  defaultStockAmount: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ListItem;
