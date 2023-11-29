import React from "react";

function Search({searchTerm, onSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Type a name to search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;

//have a state in plantpage for searching

//this state should filter the plants array depending on whether or not the array contains the search term
