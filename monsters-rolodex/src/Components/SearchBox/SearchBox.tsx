import React from "react";

import "./SearchBox.css";

interface ISearchBoxProps {
  onSearchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ onSearchChange }: ISearchBoxProps) => {
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
