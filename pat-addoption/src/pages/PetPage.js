import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import "../css/petPage.css";
import axios from "axios";
import { UserContext } from "../context/UserProvider";

export default function PetPage() {
  const { petId } = useParams();
  const { user } = useContext(UserContext);
  const [pet, setPet] = useState();
  const [saved, setSaved] = useState();
  const [owned, setOwned] = useState();

  const [adoptionStatus, setAdoptionStatus] = useState();
  const fostered = "fostered";
  const adopted = "adopted";
  const available = "available";

  useEffect(() => {
    const getPetById = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/pet/${petId}`);
        const data = response.data;
        setPet(data.pet);
        if (data.pet.adoptionStatus === fostered) {
          setAdoptionStatus(fostered);
        }
        if (data.pet.adoptionStatus === adopted) {
          setAdoptionStatus(adopted);
        }
        if (data.pet.adoptionStatus === available) setAdoptionStatus(available);
      } catch (err) {
        console.log(err);
      }
    };
    getPetById();
  }, [petId, adoptionStatus]);

  useEffect(() => {
    const getUserPets = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/pet/user/${user.user._id}`
        );
        const dataSaved = response.data.pets.saved;
        const dataOwned = response.data.pets.owned;

        let checkSaved;
        let checkOwned;

        dataSaved.forEach((element) => {
          if (checkSaved) return;
          if (element._id === petId) {
            checkSaved = true;
            setSaved(true);
          } else {
            setSaved(false);
          }
        });

        dataOwned.forEach((element) => {
          if (checkOwned) return;
          if (element._id === petId) {
            checkOwned = true;
            setOwned(true);
          } else {
            setOwned(false);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    if (user) {
      getUserPets();
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
    } catch (err) {
      console.log(err);
    }
  };

  const returnPet = async () => {
    let response;

    try {
      response = await axios.post(`http://localhost:3001/pet/${petId}/return`, {
        ...user.user,
      });
      setOwned(false);
      setAdoptionStatus(available);
      const data = response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const adoptOrFoster = async (newStatus) => {
    let response;

    try {
      response = await axios.post(`http://localhost:3001/pet/${petId}/adopt`, {
        ...user.user,
        adoptionStatus: newStatus,
      });
      setOwned(true);
      if (newStatus === fostered) {
        setAdoptionStatus(fostered);
      } else {
        setAdoptionStatus(adopted);
      }
      const data = response.data;
    } catch (err) {
      console.log(err);
    }
  };

  return pet ? (
    <div>
      <Header>
        <h2>My name is : {pet.name.toUpperCase()}</h2>

        {user && (
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                changeFavorite();
              }}
            >
              {saved ? "unsave pet" : "save pet"}
            </button>

            {owned && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  returnPet();
                }}
              >
                return pet
              </button>
            )}
            <>
              {adoptionStatus !== adopted && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    adoptOrFoster(adopted);
                  }}
                >
                  adopt
                </button>
              )}

              {adoptionStatus === available && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    adoptOrFoster(fostered);
                  }}
                >
                  foster
                </button>
              )}
            </>
          </div>
        )}
      </Header>
      <div className="petPageContainer">
        <div className="imageAndName">
          <img
            src={`http://localhost:3001/${pet.image}`}
            alt={`ImageOf${pet.name}`}
          />
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
