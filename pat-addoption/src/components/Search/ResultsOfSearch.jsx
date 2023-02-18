import React from "react";
import PetsCards from "../MyPetsPage/PetsCards";
// import { PetsContext } from "../../context/PetsProvider";
// import { useContext } from "react";

export default function ResultsOfSearch({ petsSearch }) {
  // const { petsList } = useContext(PetsContext);
  return (
    <div style={{ width: "70vw" }}>
      {/* <h3>Your Search result:</h3> */}
      {/* <PetsCards petsList={petsList} /> */}
      {petsSearch ? <PetsCards petsList={petsSearch} /> : "loading..."}
    </div>
  );
}
