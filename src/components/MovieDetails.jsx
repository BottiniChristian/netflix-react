import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Error  from "./Error";

const API_KEY = "5ec3a4a3";

export default function MovieDetails() {
  const { movieId } = useParams();          
  const [details, setDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const resMovie = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}&plot=full`);
        const movie = await resMovie.json();

        const resCom = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${movieId}/comments`);
        const commJson = await resCom.json();

        setDetails(movie);
        setComments(commJson);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, [movieId]);

  if (loading) return <Loader />;
  if (error || !details) return <Error />;

  return (
    <>
      <Navbar />
      <div className="container text-white mt-4">
        <div className="row">
          <div className="col-md-4">
            <img src={details.Poster} className="img-fluid rounded mb-3" alt={details.Title} />
          </div>
          <div className="col-md-8">
            <h2>{details.Title}</h2>
            <p>{details.Plot}</p>
            <p><strong>Year:</strong> {details.Year}</p>
            <p><strong>Genre:</strong> {details.Genre}</p>
          </div>
        </div>

        <hr className="text-secondary" />
        <h4>Comments</h4>
        {comments.length === 0 ? <p>No comments yet.</p> :
          comments.map(c => (
            <div key={c._id} className="mb-2">
              <strong>{c.author}</strong> – {c.comment}
            </div>
          ))
        }
      </div>
      <Footer />
    </>
  );
}
