const User = require("../models/user");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.find({}, "-_v -password");

      res.status(200).json({
        message: "success get all data",
        data: users,
      });
    } catch (error) {
      res.status(404).json({
        message: "data not found",
        error: error.message,
      });
    }
  },

  getUserByID: async (req, res) => {
    try {
      const users = await User.find({ _id: req.params.id });

      res.json({
        data: users,
      });
    } catch (error) {
      res.status(404).json({
        message: "User not found",
        error: error.message,
      });
    }
  },

  updateUserByID: async (req, res) => {
    try {
      const data = req.body;
      const users = await User.findOne({ _id: req.params.id });

      if (users) {
        await User.updateOne({
          name: data.name,
          email: data.email,
          password: data.password,
        });

        await users.save();

        res.status(201).json({
          message: "data user has been update",
        });
      }
    } catch (error) {
      res.status(401).json({
        message: " data cannot be updated",
        error: error.message,
      });
    }
  },

  deleteUserByID: async (req, res) => {
    try {
      const users = await User.findOneAndDelete({ _id: req.params.id });

      res.status(201).json({
        data: users,
        message: "success delete data user",
      });
    } catch (error) {
      res.status(401).json({
        message: " failed delete user",
        error: error.message,
      });
    }
  },
};
