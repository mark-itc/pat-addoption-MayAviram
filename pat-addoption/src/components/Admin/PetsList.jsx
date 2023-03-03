import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/table.css";
import { useNavigate } from "react-router-dom";

export default function PetsList() {
  const [petsList, setPetsList] = useState();
  const [keys, setKeys] = useState();
  const petParamList = ["type", "color", "name", "adoptionStatus"];
  const navigate = useNavigate();

  function formatString(str) {
    str = str.replace(/([A-Z])/g, " $1").toLowerCase();
    return str;
  }
  useEffect(() => {
    const getPetsList = async () => {
      try {
        const response = await axios.get("http://localhost:3001/pet");
        const data = response.data.pets;
        setPetsList(data);

        if (data[0]) {
          setKeys(Object.keys(data[0]));
        }
      } catch (err) {
        console.log("err", err);
      }
    };
    getPetsList();
  }, []);

  return (
    <div className="petsListContainer">
      <h3>Pets List</h3>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>#</th>

              {keys &&
                keys.map((key, index) => {
                  if (!petParamList.includes(key)) {
                    return;
                  } else {
                    return <th key={index}>{formatString(key)}</th>;
                  }
                })}
            </tr>
          </thead>
          <tbody>
            {petsList &&
              petsList.map((pet, index) => {
                return (
                  <tr
                    key={index}
                    onClick={() => {
                      console.log("pet onclick: ", pet);
                      navigate(
                        `/Admin/AddPet/?type=set&pet=${encodeURIComponent(
                          JSON.stringify(pet)
                        )}`
                      );
                    }}
                  >
                    <td>{index + 1}</td>
                    {keys.map((key, index) => {
                      if (!petParamList.includes(key)) {
                        return;
                      } else {
                        return <td key={index}>{pet[key]}</td>;
                      }
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
