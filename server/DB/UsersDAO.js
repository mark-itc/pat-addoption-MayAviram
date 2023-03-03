const { ObjectId } = require("mongodb");

let usersCollection;

class Users {
  static async connectUserCollection(db) {
    if (!db) return;
    try {
      usersCollection = db.collection(process.env.USERS_COLLECTION);
    } catch (err) {
      console.log("cant connect collection");
    }
  }

  static async addUser(newUser) {
    try {
      await usersCollection.insertOne({ ...newUser });
      return true;
    } catch (err) {
      console.log("err", err);
      return false;
    }
  }

  static async uptadeUser(userId, newUser) {
    try {
      const uptadeUser = await usersCollection.updateOne(
        { _id: ObjectId(userId) },
        { $set: newUser }
      );

      if (uptadeUser) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(" err: ", err);
    }
  }

  static async getUserByEmail(email) {
    try {
      const user = await usersCollection.findOne({
        email: email,
      });
      if (user) {
        return user;
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async savePet(userId, petId) {
    try {
      const savePet = await usersCollection.updateOne(
        { _id: ObjectId(userId) },
        { $addToSet: { "pets.saved": ObjectId(petId) } }
      );

      if (savePet) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log("save err: ", err);
    }
  }

  static async deleteSavePet(userId, petId) {
    try {
      const deletePet = await usersCollection.updateOne(
        { _id: ObjectId(userId) },
        { $pull: { "pets.saved": ObjectId(petId) } }
      );

      if (deletePet) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log("delete err: ", err);
    }
  }

  static async getUserById(id) {
    try {
      const user = await usersCollection.findOne({ _id: ObjectId(id) });
      if (user) {
        return user;
      } else {
        return;
      }
    } catch (err) {
      console.log("err: ", err);
    }
  }

  static async deleteOwnePet(userId, petId) {
    try {
      const deletePet = await usersCollection.updateOne(
        { _id: ObjectId(userId) },
        { $pull: { "pets.owned": ObjectId(petId) } }
      );

      if (deletePet) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log("delete err: ", err);
    }
  }

  static async addOwnePet(userId, petId) {
    try {
      const ownePet = await usersCollection.updateOne(
        { _id: ObjectId(userId) },
        { $addToSet: { "pets.owned": ObjectId(petId) } }
      );

      if (ownePet) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log("add pet to user owned list, err: ", err);
    }
  }
  static async getAllUsers() {
    try {
      const users = await usersCollection
        .find(
          {},
          {
            projection: {
              _id: 1,
              firstName: 1,
              lastName: 1,
              email: 1,
              role: 1,
            },
          }
        )
        .sort({ role: 1, firstName: 1 })
        .toArray();
      if (users) {
        return users;
      } else {
        return;
      }
    } catch (err) {
      console.log("err: ", err);
    }
  }

  static async getUserByIdFull(id) {
    try {
      const user = await usersCollection.findOne(
        { _id: ObjectId(id) },
        {
          projection: {
            password: 0,
            "pets.saved": 0,
          },
        }
      );
      if (user) {
        return user;
      } else {
        return;
      }
    } catch (err) {
      console.log("err: ", err);
    }
  }
}
module.exports = Users;
