import React from "react";
import Header from "../../components/Header";
import AddPetForm from "../../components/Admin/AddPetForm";

export default function AddPet() {
  return (
    <div>
      <Header>
        <h2>Add new pet</h2>
      </Header>
      <AddPetForm />
    </div>
  );
}
