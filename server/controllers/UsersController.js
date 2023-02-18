const Auth = require("../authentication");
const UsersDAO = require("../DB/UsersDAO");

class UsersController {
  static async login(req, res) {
    try {
      const user = await UsersDAO.getUserByEmail(req.body.email);
      if (user) {
        const comparePassword = await Auth.comparePassword(
          req.body.password,
          user.password
        );
        if (comparePassword) {
          const token = Auth.createToken(user);
          res.set("Authorization", `Bearer ${token}`);
          res.status(200).send({
            success: true,
            message: "You've logged in successfully",
            // token: token,
            user: {
              _id: user._id,
              email: user.email,
              firstName: user.firstName,
              role: user.role,
              pets: user.pets,
            },
          });
        } else {
          res
            .status(400)
            .send({ success: false, message: "password is wrong" });
        }
      } else {
        res.status(404).send({ success: false, message: "user dont exist" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async signUp(req, res) {
    try {
      const user = await UsersDAO.getUserByEmail(req.body.email);

      if (!user) {
        const newUser = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          password: await Auth.hashPassword(req.body.password),
          role: "user",
          pets: {
            saved: [],
            owned: [],
          },
        };
        const addUser = UsersDAO.addUser(newUser);
        if (addUser) {
          const token = Auth.createToken(newUser);
          // res.status(200).send({
          //   success: true,
          //   message: "You've registered and logged in successfully",
          //   token: token,
          //   user: {
          //     _id: newUser._id,
          //     firstName: newUser.firstName,
          //     role: newUser.role,
          //   },
          // });
          res.set("Authorization", `Bearer ${token}`);
          res.status(200).send({
            success: true,
            message: "You've logged in successfully",
            // token: token,
            user: {
              _id: user._id,
              email: user.email,
              firstName: user.firstName,
              role: user.role,
              pets: {
                saved: [],
                owned: [],
              },
            },
          });
        } else {
          res
            .status(400)
            .send({ success: false, message: "registered failed" });
        }
      } else {
        res.status(400).send({ success: false, message: "user already exist" });
      }
    } catch (err) {
      console.log("err", err);
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await UsersDAO.getUserById(req.params.id);
      if (user) {
        res.status(200).send({ success: true, message: "success", user: user });
      } else {
        res
          .status(400)
          .send({ success: false, message: "this user not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UsersController;
