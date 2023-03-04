import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { UserContext } from "../../context/UserProvider";
import localforage from "localforage";
import { saveTokenInCookies } from "../../token";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    setMessage("");
    return true;
  };

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: email,
        password: password,
      });

      saveTokenInCookies(response);

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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            minLength="6"
            maxLength="10"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            checkData() && login();
          }}
        >
          Submit
        </Button>
        {message}
      </Form>
    </>
  );
}
