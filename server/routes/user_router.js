const express = require("express");
const userrouter = express.Router();

userrouter.get("/:id", (req, res) => {
  res.json({ message: `user id ${req.params.id}` });
});

userrouter.put("/:id", (req, res) => {});

userrouter.get("/", (req, res) => {
  res.json({ message: "user" });
});

userrouter.get("/:id/full", (req, res) => {});

module.exports = userrouter;
