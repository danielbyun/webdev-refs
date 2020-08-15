import React from "react";

import "./SearchBox.css";

const SearchBox = (props) => {
  const { onSearchChange } = props;
  return (
    <input
      aria-label="Search Robots"
      className="search-box"
      type="search"
      placeholder="search monsters"
      onChange={(e) => onSearchChange(e)}
    />
  );
};

export default SearchBox;
