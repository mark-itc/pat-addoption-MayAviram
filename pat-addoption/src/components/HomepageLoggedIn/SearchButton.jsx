import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function SearchButton() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        variant="dark"
        onClick={() => {
          navigate("/SearchPage");
        }}
      >
        Search
      </Button>
    </div>
  );
}
