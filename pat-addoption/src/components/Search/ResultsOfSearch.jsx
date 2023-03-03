import React from "react";
import PetsCards from "../MyPetsPage/PetsCards";

export default function ResultsOfSearch({ petsSearch }) {
  return (
    <div style={{ width: "70vw" }}>
      {petsSearch ? <PetsCards petsList={petsSearch} /> : "loading..."}
    </div>
  );
}
