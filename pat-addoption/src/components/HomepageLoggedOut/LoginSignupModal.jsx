import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import { useState } from "react";

export default function LoginSignupModal(props) {
  // const [newType, setNewType] = useState(props.type);

  const loginCheck = props.type === "Login";
  const signupCheck = props.type === "SignUp";

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {loginCheck && "Login"}
            {signupCheck && "Sign Up"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loginCheck && <Login />}
          {signupCheck && <Signup />}
        </Modal.Body>
        <Modal.Footer>
          {loginCheck ? (
            <>
              <span>Need an account?</span>
              <Button variant="link" onClick={() => props.changetype()}>
                Sign up
              </Button>
            </>
          ) : (
            <>
              <span>Already has an account?</span>
              <Button variant="link" onClick={() => props.changetype()}>
                Log in
              </Button>
            </>
          )}

          <Button variant="outline-dark" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
