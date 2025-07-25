import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import Loader from "./Loader"
import Error from "./Error"

const API_KEY = '5ec3a4a3'

const MovieGallery = ({ title, query }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
        const data = await res.json()
        if (data.Search) {
          setMovies(data.Search)
        } else {
          setError(true)
        }
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [query])

  return (
    <div className="container my-4">
      <h4 className="section-title text-white">{title}</h4>

      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div className="movie-row d-flex overflow-auto gap-3 py-2">
          {movies.slice(0, 10).map(movie => (
            <MovieCard key={movie.imdbID} poster={movie.Poster} title={movie.Title} />
          ))}
        </div>
      )}
    </div>
  )
}
export default MovieGallery
