import React, { useState, useRef } from "react";
import "../../css/searchBar.css";
import axios from "axios";

export default function SearchBar({ setPetsSearch }) {
  const [searchLevel, setSearchLevel] = useState("basic");
  const listOfType = ["cat", "dog"];
  const listOfAdoptionStatus = ["fostered", "adopted", "available"];

  const typeRef = useRef();
  const adoptionStatusRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();
  const nameRef = useRef();
  const formRef = useRef();

  const search = async () => {
    let params;
    if (searchLevel === "advanced") {
      params = {
        type: typeRef.current.value,
        adoptionStatus: adoptionStatusRef.current.value,
        heigh: heightRef.current.value,
        weigh: weightRef.current.value,
        name: nameRef.current.value,
      };
    } else {
      params = { type: typeRef.current.value };
    }
    try {
      const response = await axios.get("http://localhost:3001/pet", {
        params: { ...params },
      });
      const data = response.data;
      setPetsSearch(data.pets);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="searchBarContainer">
      <div className="searchLevel">
        <div>
          <span>Basic Search</span>

          <input
            type={"radio"}
            value={"basic"}
            name={"searchLevel"}
            defaultChecked
            onClick={(e) => {
              if (e.target.checked) {
                setSearchLevel("basic");
              }
            }}
          />
        </div>
        <div>
          <span>Advanced Search</span>

          <input
            type={"radio"}
            value={"advanced"}
            name={"searchLevel"}
            onClick={(e) => {
              if (e.target.checked) {
                setSearchLevel("advanced");
              }
            }}
          />
        </div>
      </div>

      <form ref={formRef}>
        <label>I'm looking for...</label>
        <div className="formOption">
          <select name={"type"} ref={typeRef}>
            <option>Type of animal</option>
            {listOfType.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {searchLevel === "advanced" ? (
          <>
            <div className="formOption">
              <select name={"Adoption Status"} ref={adoptionStatusRef}>
                <option>Adoption Status</option>
                {listOfAdoptionStatus.map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="formOption">
              <input
                type={"text"}
                name={"height"}
                placeholder={"Height"}
                ref={heightRef}
              />
            </div>
            <div className="formOption">
              <input
                type={"text"}
                name={"weight"}
                placeholder={"Weight"}
                ref={weightRef}
              />
            </div>
            <div className="formOption">
              <input
                type={"text"}
                name={"name"}
                placeholder={"Name"}
                ref={nameRef}
              />
            </div>
          </>
        ) : null}
        <button
          onClick={(e) => {
            e.preventDefault();
            search();
          }}
        >
          Start your search!
        </button>
      </form>
    </div>
  );
}
