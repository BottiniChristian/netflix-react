import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TVShows from './components/TVShows'; 
import MovieDetails from './components/MovieDetails'; 
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tv-shows" element={<TVShows />} />
      <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
  );
}
export default App;
