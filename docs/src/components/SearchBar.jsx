import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
    console.log("Filter:", filter);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search mods..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="search-bar-select"
      >
        <option value="all">All</option>
        <option value="Downloads">Downloads</option>
        <option value="Mod Count">Mod Count</option>
        <option value="Date Added">Date Added</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
