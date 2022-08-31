import React, { useContext } from "react";
import "./header.scss";
import { RiCloudWindyFill } from "react-icons/ri";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import StaysContext from "../contexts/StaysContext";
const Header = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const { staysLocation, guests } = useContext(StaysContext);
  function refreshPage() {
    window.location.reload(false);
  }
  const handleOnClose = () => setOpenSearchBar(false);
  return (
    <>
      <div className="header-container">
        <div className="logo" onClick={refreshPage}>
          <RiCloudWindyFill /> windbnb
        </div>
        <div className="search" onClick={() => setOpenSearchBar(true)}>
          <div className="search__text">{staysLocation}</div>
          <div className="search__guest">
            {guests > 0 ? `${guests} Guests` : "Add guests"}
          </div>
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
