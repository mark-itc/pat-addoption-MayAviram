import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "../../css/petsPage.css";

export default function PetCard({ pet }) {
  const navigate = useNavigate();

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={pet.image}
          className="petImage"
          alt={`Image${pet.name}`}
        />

        <Card.Body>
          <Card.Title>{pet.name.toUpperCase()}</Card.Title>
          <Card.Text>Current status: {pet.adoptionStatus}</Card.Text>
          <Button
            variant="dark"
            onClick={() => {
              navigate(`/PetPage/${pet._id}`);
            }}
          >
            See more
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
