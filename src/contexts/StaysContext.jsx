import { createContext, useContext, useState } from "react";

const StaysContext = createContext();

const stays = [
  {
    type: "Entire Apartment 2 beds",
    title: "Stylist apartment in center of the city",
    ratings: "4.40",
    superHost: true,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    location: "Helsinki, Finland",
  },
  {
    type: "Private room",
    title: "Cozy, peaceful and private room with...",
    ratings: "4.25",
    superHost: false,
    image:
      "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    location: "Oulu, Finland",
  },
  {
    type: "Entire house",
    title: "Mordern House in a remote area",
    ratings: "4.96",
    superHost: true,
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    location: "Turku, Finland",
  },
  {
    type: "Entire Apartment 2 beds",
    title: "Stylist room in design district",
    ratings: "4.85",
    superHost: false,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    location: "Vaasa, Finland",
  },
  {
    type: "Private room",
    title: "Modern apartment close to nature",
    ratings: "4.54",
    superHost: false,
    image:
      "https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    location: "Vaasa, Finland",
  },
  {
    type: "Entire house",
    title: "House in a remote area",
    ratings: "4.64",
    superHost: false,
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    location: "Helsinki, Finland",
  },
];

export const StaysProvider = ({ children }) => {
  const [staysList, setStaysList] = useState(stays);
  const [staysLocation, setStayLocation] = useState("Helsinki, Finland");
  const [guests, setGuests] = useState(0);
  const filterStays = (address, guestCount) => {
    if (address === "") {
      setStaysList(stays);
      return;
    }
    const filteredList = stays.filter((stay) =>
      stay.location.includes(address)
    );

    setStaysList(filteredList);
    if (address.length) {
      setStayLocation(address);
    }
    if (guestCount >= 0) {
      setGuests(guestCount);
    }
  };
  const value = {
    staysList,
    filterStays,
    staysLocation,
    guests,
  };
  return (
    <StaysContext.Provider value={value}>{children}</StaysContext.Provider>
  );
};

export default StaysContext;
