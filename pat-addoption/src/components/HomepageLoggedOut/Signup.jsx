import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { UserContext } from "../../context/UserProvider";
import localforage from "localforage";

export default function Signup() {
  const { setUser } = useContext(UserContext);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [message, setMessage] = useState("");

  const checkData = () => {
    if (email.length === 0) {
      setMessage("Error: Input is empty! Please enter your email");
      return false;
    } else {
      if (
        email.indexOf("@") < 1 ||
        email.indexOf(".") < 3 ||
        email.indexOf(".") - email.indexOf("@") < 2
      ) {
        setMessage("Error: Input is invalid! Please enter correct email");
        return false;
      }
    }
    if (firstName.length === 0) {
      setMessage("Error: Input is empty! Please enter your first name");
      return false;
    }
    if (lastName.length === 0) {
      setMessage("Error: Input is empty! Please enter your last name");
      return false;
    }
    if (phoneNumber.length === 0) {
      setMessage("Error: Input is empty! Please enter your phone number");
      return false;
    }

    if (password.length === 0) {
      setMessage("Error: Input is empty! Please enter your password");
      return false;
    } else {
      if (password.length < 6 || password.length > 10) {
        setMessage(
          "Error: Input is invalid! Please enter a password of 6-10 letters"
        );
        return false;
      }
    }
    if (passwordConfirmation.length === 0) {
      setMessage(
        "Error: Input is empty! Please enter your password confirmation"
      );
      return false;
    } else {
      if (password.length < 6 || password.length > 10) {
        setMessage(
          "Error: Input is invalid! Please enter a password of 6-10 letters"
        );
        return false;
      }
    }
    if (passwordConfirmation !== password) {
      setMessage(
        "Error: Input is invalid! your password and password confirmation are not equal !"
      );
      return false;
    }
    setMessage("");
    return true;
  };

  const signup = async () => {
    const createUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };
    try {
      const response = await axios.post("http://localhost:3001/signup", {
        ...createUser,
      });
      const data = response.data;
      setMessage(data.message);

      try {
        await localforage.setItem("user", data);
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
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
            checkData() && signup();
          }}
        >
          Submit
        </Button>
        {message}
      </Form>
    </>
  );
}
