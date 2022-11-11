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

      res.json({
        message: "data has been created",
      });
    } catch (error) {
      console.log(error);
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

          res.json({
            message: "Login success",
            token: token,
          });
        } else {
          res.json({
            message: "Email or Password wrong",
          });
        }
      } else {
        res.json({
          message: "Email or Password wrong",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
