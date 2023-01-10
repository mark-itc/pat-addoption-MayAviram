import React from "react";
import Button from "react-bootstrap/Button";

export default function LoginSignupButton({ type, func }) {
  return (
    <>
      <Button
        variant="outline-warning"
        onClick={() => {
          func();
        }}
      >
        {type}
      </Button>
    </>
  );
}
