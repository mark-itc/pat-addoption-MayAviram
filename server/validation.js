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
  additionalProperties: false,
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

const pet_schema = {};

// const validate_signup = ajv.compile(signup_schema);
// const validate_login = ajv.compile(login_schema);
// const validate_pet = ajv.compile(pet_schema);

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
    const isvalid = validateData(req.body);
    if (!isvalid) {
      const instance = validateData.errors[0].instancePath;
      res.status(400).send({
        message: `Login failed, ${instance.slice(instance.indexOf("/") + 1)} ${
          validateData.errors[0].message
        }`,
      });
    } else {
      next();
    }
  };
}

function validatePasswordMatch(req, res, next) {
  console.log("req.body: ", req.body);
  if (req.body.password === req.body.passwordConfirmation) {
    next();
  } else {
    res.status(400).send({
      message: `Password dont match`,
    });
  }
}

module.exports = { validateData, validatePasswordMatch };
