import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/settingForm.css";
import SaveButton from "../../components/ProfileSetting/SaveButton";

export default function FormProfileSetting() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const phoneNumberRef = useRef();
  const bioRef = useRef();

  const createNewProfile = () => {
    const user = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      bio: bioRef.current.value,
    };
    return user;
  };

  return (
    <div>
      <Form className="settingForm">
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
              id="passwordConfirmation"
              name="passwordConfirmation"
              ref={passwordConfirmationRef}
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
            ref={bioRef}
          />
        </Row>
        <SaveButton createNewUser={createNewProfile} />
      </Form>
    </div>
  );
}
