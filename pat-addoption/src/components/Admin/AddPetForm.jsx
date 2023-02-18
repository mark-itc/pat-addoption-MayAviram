import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/settingForm.css";
import axios from "axios";
// import "../../css/searchBar.css";

export default function AddPet() {
  const [message, setMessage] = useState("");

  const nameRef = useRef();
  const typeRef = useRef();
  const adoptionStatusRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();
  const colorRef = useRef();
  const hypoallergenicRef = useRef();
  const dietaryRestrictionsRef = useRef();
  const breedOfAnimalRef = useRef();
  const imageRef = useRef();
  const bioRef = useRef();

  // const listOfHypoallergenic = ["yes", "no"];
  const inputRefList = [
    nameRef,
    typeRef,
    heightRef,
    weightRef,
    colorRef,
    hypoallergenicRef,
    dietaryRestrictionsRef,
    breedOfAnimalRef,
    bioRef,
  ];
  const listOfAdoptionStatus = ["fostered", "adopted", "available"];

  const checkData = () => {
    try {
      for (let index = 0; index < inputRefList.length; index++) {
        if (inputRefList[index].current.value.length === 0) {
          console.log("index", index, inputRefList[index].current.value.length);
          setMessage("Error: Input is empty! Please complete all the fields");
          return false;
        }
      }
      // if (inputRefList[index].current.type === "file") {
      //   if (inputRefList[index].current.files.length === 0) {
      //     setMessage("Error: file is empty! Please choose image");
      //     return false;
      //   }
      // }
      if (isNaN(heightRef.current.value) || isNaN(weightRef.current.value)) {
        setMessage(
          "Error: Input is invalid! height and weight must contain only numbers"
        );
        return false;
      }

      if (imageRef.current.files.length === 0) {
        setMessage("Error: file is empty! Please choose image");
        return false;
      }
      console.log("image: ", imageRef.current.value);
      setMessage("");
      return true;
    } catch (err) {
      console.log(err);
    }
  };

  const insertPet = async () => {
    const newPet = {
      name: nameRef.current.value,
      type: typeRef.current.value,
      adoptionStatus: adoptionStatusRef.current.value,
      height: Number(heightRef.current.value),
      weight: Number(weightRef.current.value),
      color: colorRef.current.value,
      hypoallergenic: hypoallergenicRef.current.value,
      dietaryRestrictions: dietaryRestrictionsRef.current.value,
      breedOfAnimal: breedOfAnimalRef.current.value,
      // image: imageRef.current.value,
      image: imageRef.current.value,
      bio: bioRef.current.value,
    };
    try {
      const response = await axios.post(`http://localhost:3001/pet`, {
        ...newPet,
      });
      const data = response.data;
      console.log("add pet data: ", data);
      // setPet(data.pets);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="settingForm">
      <Form className="AddPetForm">
        <Row>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            id="name"
            name="name"
            ref={nameRef}
            required
          />
        </Row>
        <Row>
          <Col>
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pet type"
              id="type"
              name="type"
              ref={typeRef}
              required
            />
          </Col>
          <Col>
            <Form.Label>Adoption Status</Form.Label>
            {/* <Form.Control
              type="text"
              placeholder="Enter adoption status"
              id="adoptionStatus"
              name="adoptionStatus"
              ref={adoptionStatusRef}
              required
            /> */}
            {/* <Form.Select
              aria-label="adoptionStatus"
              style={{ border: " 2px solid #848080" }}
            > */}
            <Form.Select
              aria-label="adoptionStatus"
              id="adoptionStatus"
              name="adoptionStatus"
              ref={adoptionStatusRef}
            >
              {listOfAdoptionStatus.map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>color</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter color"
              id="color"
              name="color"
              ref={colorRef}
              required
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="text"
              // step="0.1"
              placeholder="Enter height"
              id="height"
              name="height"
              ref={heightRef}
              required
            />
          </Col>
          <Col>
            <Col>
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type="text"
                // step="0.1"
                placeholder="Enter weight"
                id="weight"
                name="weight"
                ref={weightRef}
                required
              />
            </Col>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Label>Hypoallergenic</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter some hypoallergenic"
              id="hypoallergenic"
              name="hypoallergenic"
              ref={hypoallergenicRef}
              required
            />
          </Col>
          <Col>
            <Form.Label>Dietary Restrictions</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter dietary restrictions"
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              ref={dietaryRestrictionsRef}
              required
            />
          </Col>
          <Col>
            <Form.Label>Breed Of Animal</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter breed of animal"
              id="breedOfAnimal"
              name="breedOfAnimal"
              ref={breedOfAnimalRef}
              required
            />
          </Col>
        </Row>

        <Row>
          <Form.Label>Image</Form.Label>
          <Form.Control
            style={{ textAlignLast: "left" }}
            type="file"
            // placeholder="choose image"
            id="image"
            name="image"
            ref={imageRef}
            required
          />
        </Row>
        <Row>
          <Form.Label>Bio</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter some bio"
            id="bio"
            name="bio"
            rows={3}
            ref={bioRef}
          />
        </Row>
        <button
          onClick={(e) => {
            e.preventDefault();
            // checkData();
            checkData() && insertPet();
            // insertPet();
          }}
        >
          Add pet!
        </button>
        {message}
      </Form>
    </div>
  );
}
