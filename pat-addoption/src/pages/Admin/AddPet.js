import React, { useEffect } from "react";
import Header from "../../components/Header";
import AddPetForm from "../../components/Admin/AddPetForm";
import { useLocation } from "react-router-dom";

export default function AddPet() {
  const location = useLocation();
  const props = new URLSearchParams(location.search);
  const type = props.get("type");
  const petString = props.get("pet");
  const pet = JSON.parse(decodeURIComponent(petString));

  return (
    <div>
      <Header>
        <h2>Add new pet</h2>
      </Header>
      <AddPetForm type={type} originPet={pet} />
    </div>
  );
}
