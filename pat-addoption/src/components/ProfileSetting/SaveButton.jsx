import React from "react";
import Button from "react-bootstrap/Button";

export default function SaveButton() {
  return (
    <div>
      <Button
        variant="dark"
        type="submit"
        //   onClick={() => {
        //     const newUserDetails = {
        //       FirstName: firstNameRef.current.value,
        //       LastName: lastNameRef.current.value,
        //       Email: emailRef.current.value,
        //       PhoneNumber: phoneNumberRef.current.value,
        //       Password: passwordRef.current.value,
        //     };
        //     // console.log(newUser);
        //   }}
      >
        Submit
      </Button>
    </div>
  );
}
