// List.jsx
import ListItem from './ListItem';
import PropTypes from 'prop-types';

function List({ products, handleDelete }) {
    const defaultStockAmount = 60;

    return (
        <div className='productsList-wrapper'>
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

List.propTypes = {
    products: PropTypes.array,
    handleDelete: PropTypes.func,
};

export default List;
