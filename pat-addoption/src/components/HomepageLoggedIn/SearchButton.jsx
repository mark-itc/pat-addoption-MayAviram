import React from "react";
import Button from "react-bootstrap/Button";

export default function SearchButton() {
  return (
    <div>
      <Button
        variant="dark"
        onClick={() => {
          console.log("search button click");
        }}
      >
        Search
      </Button>
    </div>
  );
}
