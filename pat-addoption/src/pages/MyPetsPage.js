import React, { useContext, useEffect, useState } from "react";
import TextDisplaying from "../components/MyPetsPage/TextDisplaying";
import PetsCards from "../components/MyPetsPage/PetsCards";
import Header from "../components/Header";
import "../css/petsPage.css";
import axios from "axios";
import { UserContext } from "../context/UserProvider";

export default function MyPetsPage() {
  const { user } = useContext(UserContext);
  const [ownsfostersList, setOwnsfostersList] = useState("");
  const [savedPetsList, setSavedPetsList] = useState("");
  const [choosenList, setChoosenList] = useState("");
  const [choosenValue, setChoosenValue] = useState("saved");
  const [existList, setExistList] = useState(false);

  const changeListFilter = (e) => {
    if (e.target.value === "savedpets") {
      setChoosenList(savedPetsList);
      setChoosenValue("saved");
    } else {
      setChoosenList(ownsfostersList);
      setChoosenValue("own or foster");
    }
  };

  useEffect(() => {
    let response;
    const getPetsLists = async () => {
      try {
        response = await axios.get(
          `http://localhost:3001/pet/user/${user.user._id}`
        );

        const data = response.data;
        setOwnsfostersList(data.pets.owned);
        setSavedPetsList(data.pets.saved);
        setChoosenList(data.pets.saved);
      } catch (err) {
        console.log(err);
      }
    };
    if (user) {
      getPetsLists();
    }
  }, [user]);

  useEffect(() => {
    if (choosenList.length === 0) {
      setExistList(false);
    } else {
      setExistList(true);
    }
  }, [choosenList]);

  return (
    <div className="myPetsPageContainer">
      <Header>
        <h2> My Pets Page</h2>

        <div className="selectPetsList">
          <span>Show by:</span>
          <select onChange={changeListFilter}>
            <option
              value={"savedpets"}
              onChange={changeListFilter}
              defaultChecked
            >
              saved pets
            </option>
            <option value={"owns/fosters"} onChange={changeListFilter}>
              owns/fosters pets
            </option>
          </select>
        </div>
      </Header>

      {!existList ? (
        <TextDisplaying text={choosenValue} />
      ) : (
        <PetsCards petsList={choosenList} />
      )}
    </div>
  );
}
