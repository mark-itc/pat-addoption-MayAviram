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
    try {
      let token = req.cookies.token;
      if (token) {
        token = token.split(" ")[1];
        jwt.verify(token, process.env.AUTH_SECRET_KEY, (err, decoded) => {
          if (decoded) {
            req.user = decoded;
            next();
          } else {
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
    } catch (err) {
      console.log(err);
    }
  }

  static checkAdmin(req, res, next) {
    try {
      if (req.user && req.user.user.role === "admin") {
        next();
      } else {
        return res
          .status(400)
          .send({ success: false, message: "this user isnt allowed" });
      }
    } catch (err) {
      console.log(err);
      return res
        .status(400)
        .send({ success: false, message: "admin authentication is failed" });
    }
  }
}

module.exports = Auth;
