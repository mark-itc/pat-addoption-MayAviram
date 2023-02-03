import React, { useState } from "react";
// import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const emailRef = useRef();
  // const passwordRef = useRef();
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
      // if (isNaN(password)) {
      //   setMessage(
      //     "Error: Input is invalid! Password must contain only numbers"
      //   );
      //   return false;
      // }
      if (password.length < 6 || password.length > 10) {
        setMessage(
          "Error: Input is invalid! Please enter a password of 6-10 letters"
        );
        return false;
      }
    }

    return true;
  };

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: email,
        password: password,
      });
      const data = response.data;
      setMessage(data.message);
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  // const login = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3001/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email: email, password: parseInt(password) }),
  //     });
  //     const data = await response.json();
  //     setMessage(data.message);
  //     // alert(data.message);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            // ref={emailRef}
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
            // ref={passwordRef}
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
            // setEmail(emailRef.current.value);
            // setPassword(passwordRef.current.value);

            // checkData() && login();
            login();
          }}
        >
          Submit
        </Button>
        {message}
      </Form>
    </>
  );
}
