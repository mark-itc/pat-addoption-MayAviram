import React, { useState } from "react";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();
  // console.log("email: ", email);
  // console.log("password: ", password);

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailRef}
            required
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
          />
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setEmail(emailRef.current.value);
            setPassword(passwordRef.current.value);
          }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}
