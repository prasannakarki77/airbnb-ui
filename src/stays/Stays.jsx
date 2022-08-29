import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./stays.scss";
const Stays = () => {
  return (
    <div className="stays-container">
      <div className="stays-header">
        <h2 className="stays-container__heading">Stays in Finland</h2>
        <p className="stays-container__count">12+ stays</p>
      </div>
      <div className="stays">
        <div className="stay">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="stay_image"
            className="stay__image"
          />
          <div className="stay__details">
            <p className="stay__details--type">Apartment, 2 bed</p>{" "}
            <p className="stay__details--ratings">
              <AiFillStar /> 4.5
            </p>
          </div>
          <p className="stay__title">Stylist apartment in center of the city</p>
        </div>
        <div className="stay">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="stay_image"
            className="stay__image"
          />
          <div className="stay__details">
            <p className="stay__details--type">Apartment, 2 bed</p>{" "}
            <p className="stay__details--ratings">
              <AiFillStar /> 4.5
            </p>
          </div>
          <p className="stay__title">Stylist apartment in center of the city</p>
        </div>
        <div className="stay">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="stay_image"
            className="stay__image"
          />
          <div className="stay__details">
            <p className="stay__details--type">Apartment, 2 bed</p>{" "}
            <p className="stay__details--ratings">
              <AiFillStar /> 4.5
            </p>
          </div>
          <p className="stay__title">Stylist apartment in center of the city</p>
        </div>
      </div>
    </div>
  );
};

export default Stays;
