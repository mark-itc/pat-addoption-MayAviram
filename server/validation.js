const Ajv = require("ajv");
const ajv = new Ajv();
const addFormats = require("ajv-formats");
addFormats(ajv);

const signup_schema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      format: "email",
      description: "Email of the user",
    },
    password: {
      type: "string",
      description: "Password of the user",
      minLength: 6,
      maxLength: 10,
    },
    passwordConfirmation: {
      type: "string",
      description: "Password confirm of the user",
      minLength: 6,
      maxLength: 10,
    },
    firstName: {
      type: "string",
      minLength: 1,
      maxLength: 10,
      description: "First name of the user",
    },
    lastName: {
      type: "string",
      minLength: 1,
      maxLength: 10,
      description: "Last name of the user",
    },
    phoneNumber: {
      type: "string",
      pattern: "^[0-9]{10}$",
      description: "Phone number of the user",
    },
  },
  required: [
    "firstName",
    "lastName",
    "phoneNumber",
    "email",
    "password",
    "passwordConfirmation",
  ],
  additionalProperties: {
    type: "string",
    properties: {
      bio: { type: "string" },
    },
    additionalProperties: false,
  },
};

const login_schema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      format: "email",
      description: "Email of the user",
    },
    password: {
      type: "string",
      description: "Password of the user",
      minLength: 6,
      maxLength: 10,
    },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

const pet_schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "Name of the pet",
    },
    type: {
      type: "string",
      description: "Type of the pet",
    },
    adoptionStatus: {
      type: "string",
      description: "Adoption Status of the pet",
    },
    height: {
      type: "number",
      description: "Height of the pet",
    },
    weight: {
      type: "number",
      description: "Weight of the pet",
    },
    color: {
      type: "string",
      description: "Color of the pet",
    },
    hypoallergenic: {
      type: "string",
      description: "Hypoallergenic of the pet",
    },
    dietaryRestrictions: {
      type: "string",
      description: "Dietary Restrictions of the pet",
    },
    breedOfAnimal: {
      type: "string",
      description: "Breed Of Animal of the pet",
    },
    image: {
      type: "string",
      description: "Image of the pet",
    },
    bio: {
      type: "string",
      description: "Bio of the pet",
    },
  },
  required: [
    "name",
    "type",
    "adoptionStatus",
    "height",
    "weight",
    "color",
    "hypoallergenic",
    "dietaryRestrictions",
    "breedOfAnimal",
    "image",
    "bio",
  ],
  additionalProperties: false,
};

function validateData(type) {
  let validateData = null;
  switch (type) {
    case "signup":
      validateData = ajv.compile(signup_schema);
      break;
    case "login":
      validateData = ajv.compile(login_schema);
      break;
    case "pet":
      validateData = ajv.compile(pet_schema);
  }

  return function (req, res, next) {
    let isvalid = null;
    if (type === "pet") {
      req.body.height = Number(req.body.height);
      req.body.weight = Number(req.body.weight);
      newPet = {
        ...req.body,
        image: req.file.path,
      };
      isvalid = validateData(newPet);
    } else {
      isvalid = validateData(req.body);
    }

    if (!isvalid) {
      const instance = validateData.errors[0].instancePath;
      res.status(400).send({
        success: false,
        message: `Failed, ${instance.slice(instance.indexOf("/") + 1)} ${
          validateData.errors[0].message
        }`,
      });
    } else {
      next();
    }
  };
}

function validatePasswordMatch(req, res, next) {
  if (req.body.password === req.body.passwordConfirmation) {
    next();
  } else {
    res.status(400).send({
      success: false,
      message: `Password dont match`,
    });
  }
}

module.exports = { validateData, validatePasswordMatch };
