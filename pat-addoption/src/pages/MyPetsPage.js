import React, { useContext, useEffect, useState } from "react";
import TextDisplaying from "../components/MyPetsPage/TextDisplaying";
import PetsCards from "../components/MyPetsPage/PetsCards";
import Header from "../components/Header";
import { PetsContext } from "../context/PetsProvider";
import "../css/petsPage.css";

export default function MyPetsPage() {
  const { ownsfostersList, savedPetsList } = useContext(PetsContext);
  const [choosenList, setChoosenList] = useState(savedPetsList);
  const [choosenValue, setChoosenValue] = useState("saved");
  const changeListFilter = (e) => {
    // console.log(e);
    if (e.target.value === "savedpets") {
      setChoosenList(savedPetsList);
      setChoosenValue("saved");
    } else {
      setChoosenList(ownsfostersList);
      setChoosenValue("own or foster");
    }
  };

  const checkIfListNotEmpty = () => {
    if (choosenList.length === 0) {
      return true;
    }
  };
  // useEffect(() => {
  //   console.log("ownsList: ", ownsList);
  // }, []);
  return (
    <div className="myPetsPageContainer">
      <Header>
        <h2> My Pets Page</h2>

        <div className="selectPetsList">
          <span>Show by:</span>
          <select onChange={changeListFilter}>
            {/* <option>save pets</option> */}
            <option
              value={"savedpets"}
              // onChange={changeListFilter}
              defaultChecked
            >
              saved pets
            </option>
            <option
              value={"owns/fosters"}
              // onChange={changeListFilter}
            >
              owns/fosters pets
            </option>
          </select>
        </div>
      </Header>
      {checkIfListNotEmpty() ? (
        <TextDisplaying text={choosenValue} />
      ) : (
        <PetsCards petsList={choosenList} />
      )}
    </div>
  );
}
