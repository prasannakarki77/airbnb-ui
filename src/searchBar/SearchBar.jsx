import React from "react";
import "./searchbar.scss";
const SearchBar = ({ visible, onClose }) => {
  const handleClose = (e) => {
    e.target.id = "backdrop-area" && onClose();
  };
  if (!visible) return null;

  return (
    <div id="backdrop-area" onClick={handleClose}>
      <div className="search-bar">searchbar</div>
    </div>
  );
};

export default SearchBar;
