const express = require("express");
const PetsController = require("../controllers/PetsController");
// const Auth = require("../authentication");
const { validateData } = require("../validation");
const petrouter = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./${process.env.UPLOADS_FILES_FOLDER}`);
  },
  filename: function (req, file, cb) {
    const dateRandomNumber = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,

      file.originalname +
        "-" +
        dateRandomNumber +
        "." +
        file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: storage });

petrouter.post(
  "/",
  upload.single("image"),
  validateData("pet"),
  PetsController.addPet
);

petrouter.get("/:id", PetsController.getPetById);

petrouter.put(
  "/:id",
  upload.single("image"),
  validateData("pet"),
  PetsController.updatePet
);

petrouter.get("/", PetsController.getPets);

petrouter.post("/:id/adopt", PetsController.adoptOrFosterPet);

petrouter.post("/:id/return", PetsController.returnPet);

petrouter.post("/:id/save", PetsController.savePet);

petrouter.delete("/:id/save", PetsController.deleteSavePet);

petrouter.get("/user/:id", PetsController.getPetsByUserId);

module.exports = petrouter;
