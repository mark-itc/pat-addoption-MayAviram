import React from "react";
import TextDisplaying from "../components/MyPetsPage/TextDisplaying";
import PetsCards from "../components/MyPetsPage/PetsCards";
import Header from "../components/Header";
export default function MyPetsPage() {
  return (
    <div>
      <Header>
        <h2> My Pets Page</h2>
        <TextDisplaying />
      </Header>
      <PetsCards />
    </div>
  );
}
