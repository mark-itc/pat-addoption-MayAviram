import React, { useContext } from "react";
import PetCard from "./PetCard";
// import { PetsContext } from "../../context/PetsProvider";
import "../../css/petsPage.css";

export default function PetsCards(props) {
  // const { petsList } = useContext(PetsContext);
  const { petsList } = props;
  return (
    <div className="petsCards">
      {petsList.map((item) => {
        return <PetCard pet={item} key={item.id} />;
      })}
    </div>
  );
}
