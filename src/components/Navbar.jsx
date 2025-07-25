const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark px-3">
    <img src="/image/netflix_logo copia.png" height="40px" alt="logo" /> 
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto">
        {["Home", "TV Shows", "Movies", "Recently Added", "My List"].map(item => (
          <li key={item} className="nav-item"><a className="nav-link" href="#">{item}</a></li>
        ))}
      </ul>
      <div>
        <i className="fas fa-search text-white me-3"></i>
        <span className="me-3">KIDS</span>
        <i className="fas fa-bell text-white me-3"></i>
        <a href="/profile.html"><img src="./image/avatar copia.png" height="30px" alt="avatar" /></a>
      </div>
    </div>
  </nav>
)
export default Navbar
