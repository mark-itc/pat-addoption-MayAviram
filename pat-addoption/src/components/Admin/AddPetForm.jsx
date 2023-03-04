import React, { useRef, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/settingForm.css";
import axios from "axios";

export default function AddPet({ type, originPet }) {
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
  const AnimalType = ["cat", "dog"];
  const AnimalColor = [
    "mix",
    "white",
    "black",
    "brown",
    "black and white",
    "brown and white",
    "redhead",
  ];
  const yesAndNo = ["no", "yes"];

  const checkData = () => {
    try {
      for (let index = 0; index < inputRefList.length; index++) {
        if (inputRefList[index].current.value.length === 0) {
          setMessage("Error: Input is empty! Please complete all the fields");
          return false;
        }
      }

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
      setMessage("");
      return true;
    } catch (err) {
      console.log(err);
    }
  };

  const createPet = () => {
    const newPet = new FormData();
    newPet.set("name", nameRef.current.value);
    newPet.set("type", typeRef.current.value);
    newPet.set("adoptionStatus", adoptionStatusRef.current.value);
    newPet.set("height", Number(heightRef.current.value));
    newPet.set("weight", Number(weightRef.current.value));
    newPet.set("color", colorRef.current.value);
    newPet.set("hypoallergenic", hypoallergenicRef.current.value);
    newPet.set("dietaryRestrictions", dietaryRestrictionsRef.current.value);
    newPet.set("breedOfAnimal", breedOfAnimalRef.current.value);
    newPet.set("image", imageRef.current.files[0]);
    newPet.set("bio", bioRef.current.value);
    return newPet;
  };
  const insertPet = async () => {
    const newPet = createPet();
    try {
      const response = await axios.post(`http://localhost:3001/pet`, newPet, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const updatePet = async () => {
    const newPet = createPet();
    try {
      const response = await axios.put(
        `http://localhost:3001/pet/${originPet._id}`,
        newPet,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      const data = response.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (type === "set") {
      nameRef.current.value = originPet.name;
      typeRef.current.value = originPet.type;
      adoptionStatusRef.current.value = originPet.adoptionStatus;
      heightRef.current.value = originPet.height;
      weightRef.current.value = originPet.weight;
      colorRef.current.value = originPet.color;
      hypoallergenicRef.current.value = originPet.hypoallergenic;
      dietaryRestrictionsRef.current.value = originPet.dietaryRestrictions;
      breedOfAnimalRef.current.value = originPet.breedOfAnimal;
      bioRef.current.value = originPet.bio;
    }
  }, []);

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
            <Form.Select aria-label="type" id="type" name="type" ref={typeRef}>
              {AnimalType.map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Adoption Status</Form.Label>
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
            <Form.Select
              aria-label="color"
              id="color"
              name="color"
              ref={colorRef}
            >
              {AnimalColor.map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="text"
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
            <Form.Select
              aria-label="hypoallergenic"
              id="hypoallergenic"
              name="hypoallergenic"
              ref={hypoallergenicRef}
            >
              {yesAndNo.map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
            </Form.Select>
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
            id="image"
            name="petImage"
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
            checkData() && type === "add" ? insertPet() : updatePet();
          }}
        >
          {type === "add" ? "Add pet!" : "Update pet!"}
        </button>
        {message}
      </Form>
    </div>
  );
}
