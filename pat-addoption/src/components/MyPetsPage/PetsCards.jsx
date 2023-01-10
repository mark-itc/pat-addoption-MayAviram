import React, { useContext } from "react";
import PetCard from "./PetCard";
import { PetsContext } from "../../context/PetsProvider";
import "../../css/petsPage.css";

export default function PetsCards() {
  const { petsList } = useContext(PetsContext);
  return (
    <div className="petsCards">
      {petsList.map((item) => {
        return <PetCard pet={item} key={item.id} />;
      })}
    </div>
  );
}
