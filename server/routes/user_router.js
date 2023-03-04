const express = require("express");
const userrouter = express.Router();
const UsersController = require("../controllers/UsersController");
const { validateData, validatePasswordMatch } = require("../validation.js");
const Auth = require("../authentication");

userrouter.get("/:id", UsersController.getUserById);

userrouter.put(
  "/:id",
  Auth.verify,
  validateData("signup"),
  validatePasswordMatch,
  UsersController.uptadeUser
);

userrouter.get("/", Auth.verify, Auth.checkAdmin, UsersController.getAllUsers);

userrouter.get("/:id/full", UsersController.getUserByIdFull);

module.exports = userrouter;
