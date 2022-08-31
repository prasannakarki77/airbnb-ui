import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import "./searchbar.scss";

const SearchBar = ({ visible, onClose }) => {
  const [locationOpen, setLocationOpen] = useState(true);
  const [guestOpen, setguestOpen] = useState(false);
  const [locationValue, setLocationValue] = useState("");
  const [adultCount, setAdultCount] = useState(0);
  let [childrenCount, setChildrenCount] = useState(0);
  const [totalGuests, setTotalGuests] = useState(0);

  const handleLocationOpen = () => {
    setLocationOpen(true);
    setguestOpen(false);
  };
  const handleGuestOpen = () => {
    setLocationOpen(false);
    setguestOpen(true);
  };
  const increment = (currentCount) => {
    let count = currentCount + 1;
    let total = totalGuests + 1;
    setTotalGuests(total);
    return count;
  };
  const decrement = (currentCount) => {
    if (currentCount === 0) {
      return currentCount;
    }
    let count = currentCount - 1;
    let total = totalGuests - 1;
    setTotalGuests(total);
    return count;
  };

  const handleClose = (e) => {
    e.target.id === "backdrop-area" && onClose();
  };
  if (!visible) return null;

  return (
    <div id="backdrop-area" onClick={handleClose}>
      <div className="search-bar">
        <div className="search-fields-container">
          <div className="location search-option" onClick={handleLocationOpen}>
            <div className="search-field">
              <p className="search-field__label">Location</p>
              <input
                value={locationValue}
                className="location__value search-field__input"
                placeholder="Add location"
              />
            </div>
          </div>
          <div className="guests search-option" onClick={handleGuestOpen}>
            <div className="search-field">
              <p className="search-field__label">guests</p>
              <input
                className="location__value search-field__input"
                placeholder="Add guests"
                value={
                  totalGuests !== 0
                    ? `Adults ${adultCount}, Children ${childrenCount} `
                    : ""
                }
              />
            </div>
          </div>
          <div className="button-field search-option">
            <div className="search-field ">
              <button className="search-field__button">
                <MdSearch />
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="search-reference-container">
          <div
            className={`reference  ${locationOpen ? "reference--open" : ""}`}
          >
            <p
              className="reference__location"
              onClick={() => setLocationValue("Turuku, Finland")}
            >
              <FaMapMarkerAlt /> Turuku, Finland
            </p>
            <p
              className="reference__location"
              onClick={() => setLocationValue("Helsinki, Finland")}
            >
              <FaMapMarkerAlt /> Turuku, Finland
            </p>
            <p
              className="reference__location"
              onClick={() => setLocationValue("Turuku, Finland")}
            >
              <FaMapMarkerAlt /> Turuku, Finland
            </p>
            <p
              className="reference__location"
              onClick={() => setLocationValue("Turuku, Finland")}
            >
              <FaMapMarkerAlt /> Turuku, Finland
            </p>
          </div>
          <div className={`reference  ${guestOpen ? "reference--open" : ""}`}>
            <div className="reference__guests">
              <div className="reference__adults">
                <p className="reference__guests--type">Adults</p>
                <p className="reference__guests--age">Ages 13 or above</p>
                <p className="reference__guests--number">
                  {" "}
                  <AiOutlineMinusCircle
                    onClick={() => setAdultCount(decrement(adultCount))}
                  />{" "}
                  <span className="guest-count">{adultCount}</span>{" "}
                  <AiOutlinePlusCircle
                    onClick={() => setAdultCount(increment(adultCount))}
                  />
                </p>
              </div>
              <div className="reference__children">
                <p className="reference__guests--type">Children</p>
                <p className="reference__guests--age">Ages 2 or 12</p>
                <p className="reference__guests--number">
                  {" "}
                  <AiOutlineMinusCircle
                    onClick={() => setChildrenCount(decrement(childrenCount))}
                  />{" "}
                  <span className="guest-count">{childrenCount}</span>{" "}
                  <AiOutlinePlusCircle
                    onClick={() => setChildrenCount(increment(childrenCount))}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="location-reference"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
