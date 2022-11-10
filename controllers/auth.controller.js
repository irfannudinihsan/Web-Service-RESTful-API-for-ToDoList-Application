const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  registerAuth: async (req, res) => {
    const data = req.body;

    passwordHash = bcrypt.hashSync(req.body.password, 8);
    data.password = passwordHash;
    const user = await new User(data);
    user.save();

    res.json({
      message: "data done created",
    });
  },

  loginAuth: async (req, res) => {
   const data = req.body;
    const user = await User.findOne({ email: data.email });

        const cekPassword = bcrypt.compareSync(data.password, user.password);

        if(cekPassword) {

            const token = jwt.sign(
                {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
                "asdfiuiu",
                { expiresIn: "1d" }
              );
        
              res.json({
                message: "Login success",
                token: token,
              });
    }
  },
};
