import React from "react";
import Button from "react-bootstrap/Button";

export default function LoginSignupButton({ type, func }) {
  return (
    <div>
      <Button
        variant="light"
        onClick={() => {
          func();
        }}
      >
        {type}
      </Button>
    </div>
  );
}
