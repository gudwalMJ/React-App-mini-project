import notFoundImage from "../images/notfound.png";

function NotFound() {
  return (
    <div className="not-found-page">
      <h2>Not Found</h2>
      <img src={notFoundImage} alt="Page Not Found" />
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
