const express = require("express");
const userrouter = express.Router();
const UsersController = require("../controllers/UsersController");
// const Auth = require("../authentication");
const { validateData, validatePasswordMatch } = require("../validation.js");

userrouter.get("/:id", UsersController.getUserById);

userrouter.put(
  "/:id",
  validateData("signup"),
  validatePasswordMatch,
  UsersController.uptadeUser
);

userrouter.get("/", UsersController.getAllUsers);

userrouter.get("/:id/full", UsersController.getUserByIdFull);

module.exports = userrouter;
