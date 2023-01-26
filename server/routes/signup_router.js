const express = require("express");
const signuprouter = express.Router();
const { validateData, validatePasswordMatch } = require("../validation.js");

signuprouter.post(
  "/",
  validateData("signup"),
  validatePasswordMatch,
  (req, res) => {
    res.send({ message: "You have registered successfully" });
  }
);
// signuprouter.post("/", (req, res) => {
//   console.log("signuprouter");
// });

module.exports = signuprouter;
