const express = require("express");
const cors = require("cors");
const userrouter = require("./routes/user_router.js");
const petrouter = require("./routes/pet_router.js");
const signuprouter = require("./routes/signup_router.js");
const loginrouter = require("./routes/login_router.js");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use("/user", userrouter);
app.use("/pet", petrouter);
app.use("/signup", signuprouter);
app.use("/login", loginrouter);

app.listen(port, () => {
  console.log("server is running");
});
