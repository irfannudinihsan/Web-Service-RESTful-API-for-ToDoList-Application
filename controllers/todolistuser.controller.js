const Todolistuser = require("../models/todolistuser");

module.exports = {
  getAllTodolistuser: async (req, res) => {
    try {
      const todolistusers = await Todolistuser.find().populate("user");
      res.status(200).json({
        message: "get all todolist user",
        data: todolistusers,
      });
    } catch (error) {
      res.status(404).json({
        message: "data all todolist not found",
        error: error.message,
      });
    }
  },
  getTodolistuserByID: async (req, res) => {
    try {
      const todolistuser = await Todolistuser.find({ _id: req.params.id });

      res.status(200).json({
        message: "get all todolist user",
        data: todolistuser,
      });
    } catch (error) {
      res.status(401).json({
        message: "data todolist not found",
        error: error.message,
      });
    }
  },
  addTodolistuser: async (req, res) => {
    try {
      const data = req.body;
      const todolistuser = await new Todolistuser(data);
      todolistuser.save();

      res.status(201).json({
        message: "data berhasil ditambahkan",
      });
    } catch (error) {
      res.status(404).json({
        message: "failed to create todolist",
        error: message.error,
      });
    }
  },
  updateTodolistuser: async (req, res) => {
    try {
      const data = req.body;

      const todolistuser = await Todolistuser.findOne({ _id: req.params.id });

      if (todolistuser) {
        await Todolistuser.updateOne({
          title: data.title,
          content: data.content,
        });

        await todolistuser.save();

        res.status(201).json({
          message: " data todolist has been update ",
        });
      }
    } catch (error) {
      res.status(401).json({
        message: "data cannot be updated",
      });
    }
  },

  deleteTodolistuser: async (req, res) => {},
  deleteAllTodolistuser: async (req, res) => {},
};
