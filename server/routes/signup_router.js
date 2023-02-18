const express = require("express");
const signuprouter = express.Router();
const { validateData, validatePasswordMatch } = require("../validation.js");
const UsersController = require("../controllers/UsersController");

signuprouter.post(
  "/",
  validateData("signup"),
  validatePasswordMatch,
  UsersController.signUp
);

module.exports = signuprouter;
