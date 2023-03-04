require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const cookieParser = require("cookie-parser");

const userrouter = require("./routes/user_router.js");
const petrouter = require("./routes/pet_router.js");
const signuprouter = require("./routes/signup_router.js");
const loginrouter = require("./routes/login_router.js");
const { connectDB } = require("./DB/petAddoptionDB");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    exposedHeaders: ["Authorization"],
    credentials: true,
  })
);
app.use(cookieParser());

if (!fs.existsSync(process.env.UPLOADS_FILES_FOLDER)) {
  fs.mkdirSync(process.env.UPLOADS_FILES_FOLDER);
}
app.use(express.urlencoded({ extended: true }));
app.use(
  "/" + process.env.UPLOADS_FILES_FOLDER,
  express.static(process.env.UPLOADS_FILES_FOLDER)
);

app.use("/user", userrouter);
app.use("/pet", petrouter);
app.use("/signup", signuprouter);
app.use("/login", loginrouter);

app.listen(port, () => {
  connectDB();
  console.log("server is running");
});
