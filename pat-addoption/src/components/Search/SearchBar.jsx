import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";

// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import "../../css/searchBar.css";

export default function SearchBar() {
  const [searchLevel, setSearchLevel] = useState("basic");
  //   const [type, setType] = useState("");

  const listOfType = ["cat", "dog"];

  //   useEffect(() => {
  //     console.log("searchLevel ", searchLevel);
  //   }, [searchLevel]);
  return (
    <div className="searchBarContainer">
      {/* SearchBar Advanced Search */}
      <div className="searchLevel">
        <div>
          <span>Basic Search</span>

          <input
            type={"radio"}
            value={"basic"}
            name={"searchLevel"}
            defaultChecked
            onClick={(e) => {
              if (e.target.checked) {
                setSearchLevel("basic");
              }
            }}
          />
        </div>
        <div>
          <span>Advanced Search</span>

          <input
            type={"radio"}
            value={"advanced"}
            name={"searchLevel"}
            onClick={(e) => {
              if (e.target.checked) {
                setSearchLevel("advanced");
              }
            }}
          />
        </div>
      </div>

      {/* <input
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
      <form>
        <label>I'm looking for...</label>
        <div className="formOption">
          <select>
            {/* <option value={"Typeofanimal"} selected disabled hidden>
          Type of animal
        </option> */}
            {/* <option value>Type of animal</option> */}

            <option>Type of animal</option>

            {listOfType.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {/* <input placeholder="Type of animal" /> */}
        {searchLevel == "advanced" ? (
          <>
            <div className="formOption">
              <select>
                <option>Adoption Status</option>
                <option value={"foster"}>foster</option>
                <option value={"adopted"}>for adoption</option>
                {/* <option value={"adopted"}>adopted</option> */}
              </select>
            </div>
            <div className="formOption">
              <select>
                <option>Height</option>
                <option value={"foster"}>foster</option>
                <option value={"adopted"}>for adoption</option>
                {/* <option value={"adopted"}>adopted</option> */}
              </select>
            </div>
            <div className="formOption">
              <select>
                <option>Weight</option>
                <option value={"foster"}>foster</option>
                <option value={"adopted"}>for adoption</option>
                {/* <option value={"adopted"}>adopted</option> */}
              </select>
            </div>
            <div className="formOption">
              <input type={"text"} placeholder={"Name"} />
            </div>
          </>
        ) : null}
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Start your search!
        </button>
      </form>
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

      {/* <div style={{ width: "auto" }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Type of animal
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Age"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value={"Dog"}>Dog</MenuItem>
              <MenuItem value={"Cat"}>Cat</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div> */}
    </div>
  );
}
