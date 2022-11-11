const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  registerAuth: async (req, res) => {
    try {
      const data = req.body;

      passwordHash = bcrypt.hashSync(req.body.password, 8);
      data.password = passwordHash;
      const user = await new User(data);
      user.save();

      res.status(201).json({
        message: "data has been created",
      });
    } catch (error) {
      res.status(401).json({
        message: "failed to create user",
        error: error.message,
      });
    }
  },

  loginAuth: async (req, res) => {
    try {
      const data = await req.body;
      const user = await User.findOne({ email: data.email });
      if (user) {
        const cekPassword = bcrypt.compareSync(data.password, user.password);

        if (cekPassword) {
          const token = jwt.sign(
            {
              id: user.id,
              name: user.name,
              email: user.email,
            },
            "qwerty",
            { expiresIn: "1d" }
          );

          res.status(200).json({
            message: "Login success",
            token: token,
          });
        } else {
          res.status(401).json({
            message: "Email or Password wrong",
          });
        }
      } else {
        res.status(401).json({
          message: "Email or Password wrong",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "failed login",
        error: error.message,
      });
    }
  },
};
