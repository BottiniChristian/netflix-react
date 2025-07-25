import MovieGallery from "./MovieGallery";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SeriesGallery from "./SeriesGallery";

const HomePage = () => (
  <>
    <Navbar />
    <div className="container mt-3">
      <div className="d-flex gap-md-5 align-items-center">
        <h2>TV Shows</h2>
        <select className="form-select w-auto bg-dark text-white">
          <option>Genres</option>
          <option>Action</option>
          <option>Comedy</option>
          <option>Drama</option>
        </select>
      </div>
    </div>

    <MovieGallery title="Continue to Watch" query="harry potter" />
    <MovieGallery title="Movie Night" query="lord of the rings" />
    <MovieGallery title="You Might Also Like" query="avengers" />
    <MovieGallery title="Why Did You Watch : Star Wars VIII - The Last Jedi" query="star wars" />
    <SeriesGallery title="Popular Top Series" />

    <Footer />
  </>
)
export default HomePage
