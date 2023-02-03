const { MongoClient } = require(`mongodb`);
const client = new MongoClient("mongodb://localhost:27017");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let db = null;
let usersCollection = null;

async function connectToServer() {
  await client.connect();
  db = client.db("petAddoptionDB");
  usersCollection = db.collection("users");
}

async function hashPassword(plainPassword) {
  try {
    const hash = bcrypt.hashSync(plainPassword, 10);
    console.log("hash ", hash);
    return hash;
  } catch (err) {
    console.log(err);
  }
}

async function comparePassword(plainPassword, hash) {
  try {
    return bcrypt.compareSync(plainPassword, hash);
  } catch (err) {
    console.log(err);
  }
}

async function addNewUser(user) {
  await usersCollection.insertOne({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    password: hashPassword(user.password),
    role: "user",
  });
}

// function login(user) {
//   const token = jwt.sign(user);
// }

async function userExistByEmail(req, res, next) {
  const result = await usersCollection.findOne({
    email: req.body.email,
  });
  if (!result) {
    console.log("result: ", result);
    next();
  } else {
    res.status(400).send({ message: "user already exist" });
  }
}
async function userExistByEmailAndPassword(req, res, next) {
  console.log("req.body before: ", req.body);
  try {
    const result = await usersCollection.findOne({
      email: req.body.email,
    });
    if (result) {
      console.log("result: ", result);
      const compare = await comparePassword(req.body.password, result.password);
      console.log("compare: ", compare);
      if (compare) {
        req.body = result;
        next();
      } else {
        res.status(400).send({ message: "password is wrong" });
      }
    } else {
      res.status(404).send({ message: "user dont exist" });
    }
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  connectToServer,
  addNewUser,
  userExistByEmail,
  userExistByEmailAndPassword,
};
