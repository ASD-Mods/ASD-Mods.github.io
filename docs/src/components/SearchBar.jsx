import React, { useState } from "react";
import "./SearchBar.css";

/**
 * Props:
 * - fillerText: The text shown when search is empty
 * - ord: Array that creates the different search orders
 * - fil: Array that creates the different search filters
 */

const SearchBar = ({ fillerText, ord, fil }) => {
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
        placeholder={fillerText}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />


      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="search-bar-select"
      >
        {ord.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="search-bar-select"
      >
        {fil.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>


      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
