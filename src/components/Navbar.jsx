import { useState } from "react";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(prev => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3 bg-black">
      <Link to="/">
        <img src="./image/netflix_logo copia.png" height="40" alt="logo" />
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/tv-shows">TV Shows</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/">Movies</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/">My list</NavLink></li>
        </ul>
        <div className="d-flex align-items-center">
          <i
            className="fas fa-search text-white me-3"
            style={{ cursor: "pointer" }}
            onClick={toggleSearch}
            title="Cerca"
          ></i>
          {showSearch && <div style={{ width: '200px', marginRight: "5px" }}>
            <SearchBar />
            </div>}
          <span className="me-3">KIDS</span>
          <i className="fas fa-bell text-white me-3"></i>
          <a href="/profile.html"><img src="./image/avatar copia.png" height="30px" alt="avatar" /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
