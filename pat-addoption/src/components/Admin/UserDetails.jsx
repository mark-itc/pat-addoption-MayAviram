import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/table.css";
import { useNavigate } from "react-router-dom";

export default function UserDetails({ closeDetails, user }) {
  const [userDetails, setUserDetails] = useState();
  const [keys, setKeys] = useState();
  const [userPets, setUserPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/user/${user._id}/full`
        );
        const data = response.data.user;
        if (data) {
          if (data.pets) {
            const getPets = data.pets.owned.map(async (petId) => {
              const response = await axios.get(
                `http://localhost:3001/pet/${petId}`
              );
              return response.data.pet;
            });

            setUserPets(await Promise.all(getPets));
          }

          const { pets, ...dataRest } = data;
          setUserDetails(dataRest);
          setKeys(Object.keys(dataRest));
        }
      } catch (err) {
        console.log("err", err);
      }
    };
    getUserDetails();
  }, []);

  return (
    <div className="detailsContainer">
      <h3>User Details</h3>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              {keys &&
                keys.map((key, index) => {
                  return <th key={index}>{key}</th>;
                })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {keys &&
                keys.map((key, index) => {
                  return <td key={index}>{userDetails[key]}</td>;
                })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="userPets">
        <h3>User pets</h3>
        <div className="userPetsContainer">
          {userPets.length > 0 ? (
            userPets.map((pet, index) => {
              return (
                <img
                  src={`${pet.image}`}
                  alt={`Image${pet.name}`}
                  key={index}
                  onClick={() => {
                    navigate(`/PetPage/${pet._id}`);
                  }}
                />
              );
            })
          ) : (
            <div>this user dont own any pets</div>
          )}
        </div>
      </div>

      <button onClick={() => closeDetails()}>Back</button>
    </div>
  );
}
