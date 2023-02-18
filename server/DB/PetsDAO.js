const { ObjectId } = require("mongodb");

let petsCollection;

class Pets {
  static async connectPetsCollection(db) {
    if (!db) return;
    try {
      petsCollection = db.collection(process.env.PETS_COLLECTION);
    } catch (err) {
      console.log("cant connect collection");
    }
  }

  static async getPetById(id) {
    try {
      const pet = await petsCollection.findOne({
        _id: ObjectId(id),
      });
      return pet;
    } catch (err) {
      console.log(err);
    }
  }
  static async getPets(query) {
    try {
      const pets = await petsCollection.find(query).toArray();
      return pets;
    } catch (err) {
      console.log(err);
    }
  }

  static async addPet(pet) {
    try {
      await petsCollection.insertOne({ ...pet });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  static async getPetByListOfId(list) {
    try {
      const pets = await petsCollection
        .find({
          _id: { $in: list },
        })
        .toArray();
      return pets;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Pets;
