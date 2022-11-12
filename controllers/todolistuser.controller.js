const Todolistuser = require("../models/todolistuser");
const jwt = require("jsonwebtoken");

module.exports = {
  getAllTodolistuser: async (req, res) => {
    try {
      // const auth = req.headers.authorization;
      // const token = auth.split(" ")[1];

      // const verified = jwt.verify(token, "secret");

      const todolistusers = await Todolistuser.find({
        _id: req.params.id,
      }).populate("user", "name");

      // console.log(todolistusers);
      res.status(201).json({
        message: "can token from user",
        data: todolistusers,
      });
    } catch (error) {
      res.status(404).json({
        message: "data all todolist not found",
        error: error.message,
      });
    }

    // try {
    //
    //   res.status(200).json({
    //     message: "get all todolist user",
    //     data: todolistusers,
    //   });
    // } catch (error) {
    //   res.status(404).json({
    //     message: "data all todolist not found",
    //     error: error.message,
    //   });
    // }
  },
  getTodolistuserByID: async (req, res) => {
    try {
      
      const todolistuser = await Todolistuser.findById({ _id: req.params.id });

      // const auth = req.headers.authorization;
      // const token = auth.split(" ")[1];

      // console.log(token)

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

  deleteTodolistuser: async (req, res) => {
    try {
      const todolistuser = await Todolistuser.findOneAndDelete({
        _id: req.params.id,
      });

      res.status(201).json({
        data: todolistuser,
        message: "success delete data todolistuser",
      });
    } catch (error) {
      res.status(500).json({
        message: "failed delete todolistuser",
        error: error.message,
      });
    }
  },
  deleteAllTodolistuser: async (req, res) => {
    try {
      const todolistusers = await Todolistuser.deleteMany({});
      res.status(201).json({
        data: todolistusers,
        message: "success delete all todolistuser",
      });
    } catch (error) {
      res.status(401).json({
        message: "failed delete all todolistuser",
        error: error.message,
      });
    }
  },
};
