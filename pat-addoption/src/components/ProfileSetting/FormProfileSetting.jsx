import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/profileSetting.css";
import { useRef } from "react";

export default function FormProfileSetting() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const phoneNumberRef = useRef();
  const bio = useRef();

  return (
    <div>
      <Form className="ProfileSettingForm">
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
        <Row>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            id="Email"
            name="Email"
            ref={emailRef}
            required
          />
        </Row>
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
        <Row>
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
        </Row>
        <Row>
          <Form.Label>Bio</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter some bio"
            id="Bio"
            name="Bio"
            rows={3}
            ref={bio}
          />
        </Row>
      </Form>
    </div>
  );
}
