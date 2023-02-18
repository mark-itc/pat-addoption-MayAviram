const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class Auth {
  static createToken(user) {
    const token = jwt.sign(
      {
        user,
      },
      process.env.AUTH_SECRET_KEY
    );
    return token;
  }

  static async hashPassword(plainPassword) {
    try {
      const hash = bcrypt.hashSync(plainPassword, 10);
      return hash;
    } catch (err) {
      console.log(err);
    }
  }

  static async comparePassword(plainPassword, hash) {
    try {
      return bcrypt.compareSync(plainPassword, hash);
    } catch (err) {
      console.log(err);
    }
  }

  static verify(req, res, next) {
    const token = req.headers["authorization"].split(" ")[1];
    console.log("token: ", token);
    if (token) {
      jwt.verify(token, process.env.AUTH_SECRET_KEY, (err, decoded) => {
        if (decoded) {
          req.body = decoded;
          next();
        } else {
          console.log("err: ", err);
          res
            .status(400)
            .send({ success: false, message: "authenticate fail" });
        }
      });
    } else {
      return res
        .status(400)
        .send({ success: false, message: "user isnt authenticate" });
    }
  }
}

module.exports = Auth;
