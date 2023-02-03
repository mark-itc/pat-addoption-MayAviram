const express = require("express");
const signuprouter = express.Router();
const { validateData, validatePasswordMatch } = require("../validation.js");
const db = require("../DB/petAddoptionDB");

signuprouter.post(
  "/",
  validateData("signup"),
  validatePasswordMatch,
  db.userExistByEmail,
  (req, res) => {
    db.addNewUser(req.body);
    //todo - login the user - and redirect to correct page
    res.status(200).send({ message: "You have registered successfully" });
  }
);

module.exports = signuprouter;
