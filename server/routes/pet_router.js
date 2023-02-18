const express = require("express");
const PetsController = require("../controllers/PetsController");
// const Auth = require("../authentication");
const { validateData } = require("../validation");
const petrouter = express.Router();

petrouter.post("/", validateData("pet"), PetsController.addPet);

petrouter.get("/:id", PetsController.getPetById);

petrouter.put("/:id", (req, res) => {});

petrouter.get("/", PetsController.getPets);

petrouter.post("/:id/adopt", (req, res) => {});

petrouter.post("/:id/return", (req, res) => {});

petrouter.post("/:id/save", PetsController.savePet);

petrouter.delete("/:id/save", PetsController.deletePet);

petrouter.get("/user/:id", PetsController.getPetsByUserId);

module.exports = petrouter;
