import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Loader from "./Loader";
import Error from "./Error";

const API_KEY = '5ec3a4a3';

const seriesQueries = [
  "stranger things",
  "the crown",
  "game of thrones",
  "the office",
  "friends",
  "breaking bad",
  "the witcher",
  "dark"
];

const SeriesGallery = ({ title }) => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSeries = async () => {
      setLoading(true);
      setError(false);
      try {
        const results = await Promise.all(
          seriesQueries.map(async (query) => {
            const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=series&page=1`);
            const data = await res.json();
            return data.Search ? [data.Search[0]] : [];
          })
        );

        const merged = results.flat();
        const uniqueSeries = merged.filter((item, index, self) =>
          index === self.findIndex((t) => t.imdbID === item.imdbID)
        );

        setSeries(uniqueSeries);
      } catch (err) {
        console.error(err)
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="section-title">{title}</h4>
      {loading ? <Loader /> : error ? <Error /> : (
        <div className="series-card d-flex gap-3 overflow-auto" style={{ whiteSpace: 'nowrap' }}>
          {series.map((show) => (
            <MovieCard
              key={show.imdbID}
              poster={show.Poster}
              title={show.Title}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default SeriesGallery;
