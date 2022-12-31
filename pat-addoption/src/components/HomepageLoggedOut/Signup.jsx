import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Signup() {
  return (
    <div>
      <Form>
        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group> */}

        {/* <Form.Group className="mb-3" controlId="formFirstLastName"> */}
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                id="FirstName"
                name="FirstName"
              />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                id="LastName"
                name="LastName"
              />
            </Col>
          </Row>
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formEmail"> */}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            id="Email"
            name="Email"
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formPassword"> */}
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                id="Password"
                name="Password"
              />
            </Col>
            <Col>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter confirm password"
                id="ConfirmPassword"
                name="ConfirmPassword"
              />
            </Col>
          </Row>
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formPhoneNumber"> */}
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            pattern="[0-9]{10}"
            id="PhoneNumber"
            name="PhoneNumber"
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
