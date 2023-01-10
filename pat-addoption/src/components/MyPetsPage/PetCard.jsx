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
          src={pet.Image}
          className="petImage"
          alt={`Image${pet.Name}`}
        />
        {/* <Card.ImgOverlay>
          <span class="material-symbols-outlined">favorite</span>
          e87d
        </Card.ImgOverlay> */}
        <Card.Body>
          <Card.Title>{pet.Name.toUpperCase()}</Card.Title>
          <Card.Text>Current status: {pet.currentStatus}</Card.Text>
          <Button
            variant="dark"
            onClick={() => {
              navigate(`/PetPage/${pet.id}`);
            }}
          >
            See more
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
