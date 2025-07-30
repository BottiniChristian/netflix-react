import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Error from "./Error";

const API_KEY = '5ec3a4a3';

const useQuery = () => new URLSearchParams(useLocation().search);

export default function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get('query');
  const type = query.get('type') || 'movie';

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}&type=${type}`);
        const data = await res.json();
        if (data.Response === "True") {
          setResults(data.Search);
        } else {
          setResults([]);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, type]);

  if (loading) return <Loader />;
  if (error) return <Error />;
  if (!searchTerm) return <p>Inserisci un termine di ricerca</p>;

  return (
    <div className="container mt-4 text-white">
      <h4>Risultati per: "{searchTerm}"</h4>
      <div className="d-flex gap-3 flex-wrap">
        {results.length === 0 ? (
          <p>Nessun risultato trovato.</p>
        ) : (
          results.map(item => (
            <div key={item.imdbID} style={{ width: '150px' }}>
              <img src={item.Poster} alt={item.Title} className="img-fluid" />
              <p>{item.Title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
