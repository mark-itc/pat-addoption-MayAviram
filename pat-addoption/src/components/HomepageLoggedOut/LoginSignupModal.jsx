import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function LoginSignupModal(props) {
  const { type, show, onHide, changetype } = props;

  const loginCheck = type === "Login";
  const signupCheck = type === "SignUp";

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
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
              <Button variant="link" onClick={() => changetype()}>
                Sign up
              </Button>
            </>
          ) : (
            <>
              <span>Already has an account?</span>
              <Button variant="link" onClick={() => changetype()}>
                Log in
              </Button>
            </>
          )}

          <Button variant="outline-dark" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
