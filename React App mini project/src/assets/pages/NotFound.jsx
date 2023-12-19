import notFoundImage from "../images/notfound.png";

function NotFound() {
  return (
    <div className="not-found-page">
      <h2>Not Found</h2>
      <img src={notFoundImage} alt="Page Not Found" />
      <p>Sorry, the page you are looking for does not exist.</p>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1"
        target="_blank"
        rel="noopener noreferrer"
        className="rick"
      >
        Go Home
      </a>
    </div>
  );
}

export default NotFound;
