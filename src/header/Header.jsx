import React from "react";
import "./header.scss";
import { RiCloudWindyFill } from "react-icons/ri";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
const Header = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const handleOnClose = () => setOpenSearchBar(false);
  return (
    <>
      <div className="header-container" onClick={() => setOpenSearchBar(true)}>
        <div className="logo">
          <RiCloudWindyFill /> windbnb
        </div>
        <div className="search">
          <div className="search__text">Helsinki, Finland</div>
          <div className="search__guest">Add guests</div>
          <div className="search__icon">
            <MdSearch size={25} />
          </div>
        </div>
      </div>
      <SearchBar onClose={handleOnClose} visible={openSearchBar} />
    </>
  );
};

export default Header;
