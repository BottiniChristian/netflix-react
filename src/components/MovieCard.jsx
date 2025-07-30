import { Link } from "react-router-dom";

const MovieCard = ({ poster, title, id }) => (
  <Link to={`/movie-details/${id}`} className="text-decoration-none">
    <div className="movie-card text-center text-white" style={{ minWidth: "150px" }}>
      <img src={poster && poster !== "N/A" ? poster : "/assets/placeholder.jpg"} className="img-fluid rounded" alt={title} />
      <small className="d-block mt-1">{title}</small>
    </div>
  </Link>
);
export default MovieCard;
