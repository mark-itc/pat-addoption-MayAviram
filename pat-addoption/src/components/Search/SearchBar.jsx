import React from "react";
import { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";

export default function SearchBar() {
  const [searchLevel, setSearchLevel] = useState("basic");
  console.log("searchLevel: ", searchLevel);
  const listOfType = ["cat", "dog"];
  return (
    <div>
      {/* SearchBar Advanced Search */}
      {/* <span>Advanced Search</span>
      <input
        type={"checkbox"}
        onClick={(e) => {
          if (e.target.checked) {
            setSearchLevel("advanced");
          } else {
            setSearchLevel("basic");
          }
        }}
      /> */}
      {/* <select multiple={true} value={["B", "C"]}></select> */}

      {/* <select>
        <option value={"Typeofanimal"} selected disabled hidden>
          Type of animal
        </option>
        {listOfType.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
      <input placeholder="Type of animal" />

      <button>Search</button> */}
      {/* <Form.Switch /> */}

      {/* <Form.Switch></Form.Switch> */}
      {/* <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Check this switch"
        />
      </Form> */}
      {/* <InputGroup className="mb-3">
        <Form.Control
          placeholder="Type of animal"
          aria-label="Type of animal"
          aria-describedby="Typeofanimal"
        />
        <Button variant="warning" id="Typeofanimal">
          Search
        </Button>
      </InputGroup> */}
    </div>
  );
}
