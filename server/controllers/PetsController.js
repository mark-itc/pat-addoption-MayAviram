const PetsDAO = require("../DB/PetsDAO");
const UsersDAO = require("../DB/UsersDAO");

class PetsController {
  static async getPetById(req, res) {
    try {
      const pet = await PetsDAO.getPetById(req.params.id);
      if (pet) {
        res.status(200).send({ success: true, message: "success", pet: pet });
      } else {
        res.status(400).send({ success: false, message: "this pet not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async getPets(req, res) {
    const queryParams = req.query;
    const query = {};
    if (
      queryParams.adoptionStatus &&
      queryParams.adoptionStatus !== "Adoption Status"
    ) {
      query.adoptionStatus = queryParams.adoptionStatus;
    }
    if (queryParams.type && queryParams.type !== "Type of animal") {
      query.type = queryParams.type;
    }
    if (queryParams.heigh) {
      query.heigh = queryParams.heigh;
    }
    if (queryParams.weigh) {
      query.weigh = queryParams.weigh;
    }
    if (queryParams.name) {
      query.name = queryParams.name;
    }
    try {
      const pets = await PetsDAO.getPets(query);
      if (pets) {
        res.status(200).send({ success: true, message: "success", pets: pets });
      } else {
        res.status(400).send({
          success: false,
          message: "cant get pets collection",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async addPet(req, res) {
    const fileUrl = encodeURI(req.file.path);

    const newPet = {
      name: req.body.name,
      type: req.body.type,
      adoptionStatus: req.body.adoptionStatus,
      height: req.body.height,
      weight: req.body.weight,
      color: req.body.color,
      hypoallergenic: req.body.hypoallergenic,
      dietaryRestrictions: req.body.dietaryRestrictions,
      breedOfAnimal: req.body.breedOfAnimal,
      image: fileUrl,
      bio: req.body.bio,
    };

    try {
      const addPet = await PetsDAO.addPet(newPet);
      if (addPet) {
        res
          .status(200)
          .send({ success: true, message: "pet added successful" });
      } else {
        res.status(400).send({ success: false, message: "this pet not added" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async updatePet(req, res) {
    const fileUrl = encodeURI(req.file.path);

    const newPet = {
      name: req.body.name,
      type: req.body.type,
      adoptionStatus: req.body.adoptionStatus,
      height: req.body.height,
      weight: req.body.weight,
      color: req.body.color,
      hypoallergenic: req.body.hypoallergenic,
      dietaryRestrictions: req.body.dietaryRestrictions,
      breedOfAnimal: req.body.breedOfAnimal,
      image: fileUrl,
      bio: req.body.bio,
    };

    try {
      const updatePet = await PetsDAO.updatePet(newPet, req.params.id);
      if (updatePet) {
        res
          .status(200)
          .send({ success: true, message: "pet updated successful" });
      } else {
        res
          .status(400)
          .send({ success: false, message: "this pet not update" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async savePet(req, res) {
    try {
      const savePet = await UsersDAO.savePet(req.body._id, req.params.id);
      if (savePet) {
        res
          .status(200)
          .send({ success: true, message: "pet added to saved successfuly" });
      } else {
        res
          .status(400)
          .send({ success: false, message: "pet didnt added to saved" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteSavePet(req, res) {
    try {
      const deletePet = await UsersDAO.deleteSavePet(
        req.body._id,
        req.params.id
      );
      if (deletePet) {
        res.status(200).send({
          success: true,
          message: "pet delete from saved successfuly",
        });
      } else {
        res
          .status(400)
          .send({ success: false, message: "pet didnt deleted from saved" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async getPetsByUserId(req, res) {
    try {
      const user = await UsersDAO.getUserById(req.params.id);
      const userPets = user.pets;

      if (userPets) {
        const savedList = await PetsDAO.getPetByListOfId(user.pets.saved);
        const ownedList = await PetsDAO.getPetByListOfId(user.pets.owned);

        res.status(200).send({
          success: true,
          message: "success",
          pets: { saved: savedList, owned: ownedList },
        });
      } else {
        res.status(400).send({
          success: false,
          message: "cant get pets",
        });
      }
      return userPets;
    } catch (err) {
      console.log(err);
    }
  }

  static async returnPet(req, res) {
    try {
      const returnPet = await UsersDAO.deleteOwnePet(
        req.body._id,
        req.params.id
      );
      PetsDAO.updateAdoptionStatus(req.params.id, "available");
      if (returnPet) {
        res.status(200).send({
          success: true,
          message: "pet return successfuly",
        });
      } else {
        res.status(400).send({ success: false, message: "pet didnt return" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async adoptOrFosterPet(req, res) {
    try {
      const ownedPet = await UsersDAO.addOwnePet(req.body._id, req.params.id);
      PetsDAO.updateAdoptionStatus(req.params.id, req.body.adoptionStatus);
      if (ownedPet) {
        res.status(200).send({
          success: true,
          message: "pet is owned by user successfuly",
        });
      } else {
        res
          .status(400)
          .send({ success: false, message: "pet isnt owne by user yet" });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = PetsController;
