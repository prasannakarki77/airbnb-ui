import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import "./stays.scss";
import StaysContext from "../contexts/StaysContext";
import { useContext } from "react";
const Stays = () => {
  const { staysList, staysLocation } = useContext(StaysContext);
  const [staysCount, setStaysCount] = useState(staysList.length);
  useEffect(() => {
    setStaysCount(staysList.length);
  }, [staysList]);
  return (
    <div className="stays-container">
      <div className="stays-header">
        <h2 className="stays-container__heading">Stays in Finland</h2>
        <p className="stays-container__count">{staysCount} stays</p>
      </div>
      <div className="stays">
        {staysList.map(
          ({ type, title, ratings, superHost, image, location }) => (
            <div className="stay">
              <img src={image} alt="stay_image" className="stay__image" />
              <div className="stay__details">
                <p className="stay__details--type">{type}</p>{" "}
                <p className="stay__details--ratings">
                  <AiFillStar /> {ratings}
                </p>
              </div>
              <p className="stay__title">{title}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Stays;
