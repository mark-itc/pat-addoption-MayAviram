const { MongoClient } = require(`mongodb`);
const Users = require("./UsersDAO");
const Pets = require("./PetsDAO");

let db;

async function connectDB() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db(process.env.DB);
    await Users.connectUserCollection(db);
    await Pets.connectPetsCollection(db);
    console.log("connection SUCCESS");
  } catch (err) {
    console.log("connection failed");
    process.exit(1);
  }
}

module.exports = {
  connectDB,
};
