import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import UpdateProductForm from "../components/UpdateProductForm";
import { Slide } from "react-slideshow-image";
// Styling //
import "../style/itemDetails.css";
import "react-slideshow-image/dist/styles.css";
// Function for the ★ rating
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = Math.ceil(rating) > fullStars;
  const emptyStars = 5 - Math.ceil(rating);
  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="filled-star">
          ★
        </span>
      ))}
      {halfStar && <span className="half-star">★</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="empty-star">
          ☆
        </span>
      ))}
    </>
  );
}

function ItemDetailsPage({ products, updateProduct }) {
  const { id } = useParams();
  const product = products.find((product) => String(product.id) === String(id));

  return product ? (
    <div className="item-details-page-wrapper">
      <div className="product-card">
        <h1 className="product-title">{product.title}</h1>
        {product.images && (
          <div className="product-images-slideshow">
            <Slide
              easing="ease"
              autoplay
              duration={3000}
              transitionDuration={700}
            >
              {product.images.map((image, index) => (
                <div className="each-slide" key={index}>
                  <div style={{ backgroundImage: `url(${image})` }}></div>
                </div>
              ))}
            </Slide>
          </div>
        )}
        <p className="product-description">
          {" "}
          <strong className="product-label">Description:</strong>{" "}
          {product.description}
        </p>
        <div className="product-info">
          <p className="product-brand">
            <strong>Brand:</strong> {product.brand}
          </p>
          <p className="product-rating">
            <strong>Rating:</strong>
            <span className="star-rating">{renderStars(product.rating)}</span>
            <span className="rating-number">({product.rating})</span>
          </p>
        </div>
        <div className="product-price">
          <p>
            <strong>Price:</strong>{" "}
            <span className="price-value">${product.price}</span>
          </p>
          <p>
            <strong>Discount:</strong>{" "}
            <span className="discount-value">
              {product.discountPercentage}%
            </span>
          </p>
          <p>
            <strong>Stock:</strong>{" "}
            <span
              className={
                product.stock > 0
                  ? product.stock < 55
                    ? "stock-value low-stock"
                    : "stock-value"
                  : "stock-value out-of-stock"
              }
            >
              {product.stock > 0
                ? product.stock < 55
                  ? "Low on stock"
                  : "In stock"
                : "Out of stock"}
            </span>
          </p>
        </div>

        <p className="product-category">
          <strong>Category:</strong> {product.category}
        </p>

        <UpdateProductForm product={product} onUpdate={updateProduct} />
      </div>
    </div>
  ) : (
    <p>No product found with ID: {id}</p>
  );
}

ItemDetailsPage.propTypes = {
  products: PropTypes.array.isRequired,
  updateProduct: PropTypes.func.isRequired,
};

export default ItemDetailsPage;
