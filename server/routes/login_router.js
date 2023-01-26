const express = require("express");
const loginrouter = express.Router();
const { validateData } = require("../validation.js");

loginrouter.post("/", validateData("login"), (req, res) => {
  res.send({ message: "You've logged in successfully" });
});

module.exports = loginrouter;
