const express = require("express");
const loginrouter = express.Router();
const { validateData } = require("../validation.js");
const UsersController = require("../controllers/UsersController.js");

loginrouter.post("/", validateData("login"), UsersController.login);

module.exports = loginrouter;
