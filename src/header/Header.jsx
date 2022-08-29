import React from "react";
import "./header.scss";
import { RiCloudWindyFill } from "react-icons/ri";
import { MdSearch } from "react-icons/md";
const Header = () => {
  return (
    <div className="header-container">
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
  );
};

export default Header;
