import { useState } from "react";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { pathname } = useLocation();
  const isTV = pathname.startsWith("/tv-shows");
  const [query, setQuery] = useState("");

  return (
   <input
      type="text"
      className="form-control bg-dark text-white"
      placeholder={isTV ? "Cerca Serie TV..." : "Cerca Film..."}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{ fontSize: "0.9rem", padding: "4px 8px", marginRight: "5px" }}
    />
  );
};

export default SearchBar;
