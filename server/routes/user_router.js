const express = require("express");
const userrouter = express.Router();
const UsersController = require("../controllers/UsersController");
// const Auth = require("../authentication");

userrouter.get("/:id", UsersController.getUserById);

userrouter.put("/:id", (req, res) => {});

userrouter.get("/", (req, res) => {});

userrouter.get("/:id/full", (req, res) => {});

module.exports = userrouter;
