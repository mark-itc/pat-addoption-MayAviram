import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

export default function Signup() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [message, setMessage] = useState("");

  // const firstNameRef = useRef();
  // const lastNameRef = useRef();
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const passwordConfirmationRef = useRef();
  // const phoneNumberRef = useRef();

  const signup = async () => {
    const newUser = {
      // FirstName: firstNameRef.current.value,
      // LastName: lastNameRef.current.value,
      // Email: emailRef.current.value,
      // PhoneNumber: phoneNumberRef.current.value,
      // Password: passwordRef.current.value,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: parseInt(phoneNumber),
      password: parseInt(password),
      passwordConfirmation: parseInt(passwordConfirmation),
    };
    try {
      const response = await axios.post("http://localhost:3001/signup", {
        ...newUser,
      });
      const data = response.data;
      setMessage(data.message);
      // alert(data.message);
    } catch (err) {
      // console.log(err);
      setMessage(err.response.data.message);
    }
  };

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
                // ref={firstNameRef}
                required
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                id="LastName"
                name="LastName"
                // ref={lastNameRef}
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
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
            // ref={emailRef}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
                // ref={passwordRef}
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Col>
            <Col>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter confirm password"
                id="passwordConfirmation"
                name="passwordConfirmation"
                // ref={passwordConfirmationRef}
                required
                onChange={(e) => {
                  setPasswordConfirmation(e.target.value);
                }}
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
            // ref={phoneNumberRef}
            required
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </Form.Group>

        <Button
          variant="dark"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            signup();
            // console.log(newUser);
          }}
        >
          Submit
        </Button>
        {message}
      </Form>
    </>
  );
}
