import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
// import { PetsContext } from "../context/PetsProvider";
import "../css/petPage.css";
import axios from "axios";
import { UserContext } from "../context/UserProvider";

export default function PetPage() {
  const { petId } = useParams();
  const { user } = useContext(UserContext);

  // const { petsList } = useContext(PetsContext);
  // const pet = petsList.find((item) => item._id === Number(petId));
  const [pet, setPet] = useState();
  const [saved, setSaved] = useState();

  useEffect(() => {
    const getPetById = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/pet/${petId}`);
        const data = response.data;
        setPet(data.pets);
      } catch (err) {
        console.log(err);
      }
    };
    getPetById();
  }, [petId]);

  useEffect(() => {
    const checkIfSaved = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/pet/user/${user.user._id}`
        );
        const dataSaved = response.data.pets.saved;
        let checkSaved;
        dataSaved.forEach((element) => {
          if (checkSaved) return;
          if (element._id === petId) {
            checkSaved = true;
            setSaved(true);
          } else {
            setSaved(false);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    if (user) {
      checkIfSaved();
    }
  }, [user]);

  const changeFavorite = async () => {
    let response;

    try {
      if (!saved) {
        response = await axios.post(`http://localhost:3001/pet/${petId}/save`, {
          ...user.user,
        });
        setSaved(true);
      } else {
        response = await axios.delete(
          `http://localhost:3001/pet/${petId}/save`,
          {
            data: { ...user.user },
          }
        );
        setSaved(false);
      }
      const data = response.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return pet ? (
    <div>
      <Header>
        {/* <h2>Pet Page</h2> */}
        <h2>My name is : {pet.name.toUpperCase()}</h2>
        {user ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              changeFavorite();
            }}
          >
            {saved ? "unsave pet" : "save pet"}
          </button>
        ) : null}
      </Header>
      <div className="petPageContainer">
        <div className="imageAndName">
          {/* <h4>{pet.name.toUpperCase()}</h4> */}
          <img src={pet.image} alt={`ImageOf${pet.name}`} />
        </div>
        <div className="petDetailsContiner">
          <div className="detail">
            <h6>Type</h6>
            {pet.type}
          </div>
          <div className="detail">
            <h6>Adoption Status</h6>
            {pet.adoptionStatus}
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
  ) : (
    "loading..."
  );
}
