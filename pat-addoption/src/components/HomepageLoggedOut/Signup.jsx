import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Signup() {
  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [confirmpPassword, setConfirmpPassword] = useState();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const phoneNumberRef = useRef();
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                id="FirstName"
                name="FirstName"
                ref={firstNameRef}
                required
              />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                id="LastName"
                name="LastName"
                ref={lastNameRef}
                required
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            id="Email"
            name="Email"
            ref={emailRef}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                id="Password"
                name="Password"
                ref={passwordRef}
                required
              />
            </Col>
            <Col>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter confirm password"
                id="ConfirmPassword"
                name="ConfirmPassword"
                ref={confirmPasswordRef}
                required
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            pattern="[0-9]{10}"
            id="PhoneNumber"
            name="PhoneNumber"
            ref={phoneNumberRef}
            required
          />
        </Form.Group>

        <Button
          variant="dark"
          type="submit"
          onClick={() => {
            const newUser = {
              FirstName: firstNameRef.current.value,
              LastName: lastNameRef.current.value,
              Email: emailRef.current.value,
              PhoneNumber: phoneNumberRef.current.value,
              Password: passwordRef.current.value,
            };
            console.log(newUser);
          }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}
