import ListItem from "./ListItem";
import PropTypes from "prop-types";

function List({ products, handleDelete }) {
  return (
    <div className="productsList-wrapper">
      <ul>
        {products.map((product) => (
          <ListItem
            key={product.id} // key prop used here
            product={product}
            defaultStockAmount={60}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

List.propTypes = {
  products: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default List;
