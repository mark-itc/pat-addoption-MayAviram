import React from "react";
import PetCard from "./PetCard";
import "../../css/petsPage.css";

export default function PetsCards(props) {
  const { petsList } = props;

  return (
    <div className="petsCards">
      {petsList.map((item) => {
        return <PetCard pet={item} key={item._id} />;
      })}
    </div>
  );
}
