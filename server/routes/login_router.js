const express = require("express");
const loginrouter = express.Router();
const { validateData } = require("../validation.js");
const db = require("../DB/petAddoptionDB");

loginrouter.post(
  "/",
  validateData("login"),
  db.userExistByEmailAndPassword,
  (req, res) => {
    // db.login(req.body);
    //todo - login with authentication
    res.status(200).send({ message: "You've logged in successfully" });
  }
);

module.exports = loginrouter;
