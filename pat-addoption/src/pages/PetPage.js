import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { PetsContext } from "../context/PetsProvider";
import "../css/petPage.css";

export default function PetPage() {
  const { petId } = useParams();
  const { petsList } = useContext(PetsContext);
  const pet = petsList.find((item) => item.id === Number(petId));

  return (
    <div>
      <Header>
        <h2>Pet Page</h2>
        <h2>Pet id : {petId}</h2>
      </Header>
      <div className="petPageContainer">
        <div className="imageAndName">
          <h4>{pet.Name.toUpperCase()}</h4>
          <img src={pet.Image} alt={`ImageOf${pet.Name}`} />
        </div>

        <div className="petDetailsContiner">
          <div className="detail">
            <h6>Type</h6>
            {pet.type}
          </div>
          <div className="detail">
            <h6>Adoption Status</h6>
            {pet.currentStatus}
          </div>
          <div className="detail">
            <h6>Height</h6>
            {pet.height}
          </div>
          <div className="detail">
            <h6>Weight</h6>
            {pet.weight}
          </div>
          <div className="detail">
            <h6>Color</h6>
            {pet.color}
          </div>
          <div className="detail">
            <h6>Bio</h6>
            {pet.bio}
          </div>
          <div className="detail">
            <h6>Hypoallergenic</h6>
            {pet.hypoallergenic}
          </div>
          <div className="detail">
            <h6>Dietary Restrictions</h6>
            {pet.dietaryRestrictions}
          </div>
          <div className="detail">
            <h6>Breed Of Animal</h6>
            {pet.breedOfAnimal}
          </div>
        </div>
      </div>
    </div>
  );
}
