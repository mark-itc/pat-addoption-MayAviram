const express = require("express");
const petrouter = express.Router();

petrouter.post("/", (req, res) => {});

petrouter.get("/:id", (req, res) => {});

petrouter.put("/:id", (req, res) => {});

petrouter.get("/", (req, res) => {
  res.json({ message: "pet router" });
});

petrouter.post("/:id/adopt", (req, res) => {});

petrouter.post("/:id/return", (req, res) => {});

petrouter.post("/:id/save", (req, res) => {});

petrouter.delete("/:id/delete", (req, res) => {});

petrouter.get("/user/:id", (req, res) => {});

module.exports = petrouter;
