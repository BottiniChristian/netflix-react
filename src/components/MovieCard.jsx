const MovieCard = ({ poster, title }) => {
  return (
    <div className="movie-card text-center text-white" style={{ minWidth: "150px" }}>
      <img
        src={poster && poster !== "N/A" ? poster : "https://via.placeholder.com/150x220?text=No+Image"}
        alt={title}
        className="img-fluid rounded"
      />
      <small>{title}</small>
    </div>
  )
}
export default MovieCard
