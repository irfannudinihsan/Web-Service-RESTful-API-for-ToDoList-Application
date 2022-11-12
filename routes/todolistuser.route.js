const express = require("express");
const todolistuserRouter = express.Router();

const {
    getAllTodolistuser,
    getTodolistuserByID,
    addTodolistuser,
    updateTodolistuser,
    deleteTodolistuser,
    deleteAllTodolistuser,
} = require("../controllers/todolistuser.controller");


todolistuserRouter.get("/", getAllTodolistuser);
todolistuserRouter.get("/:id", getTodolistuserByID);
todolistuserRouter.post("/", addTodolistuser);
todolistuserRouter.put("/:id", updateTodolistuser);
todolistuserRouter.delete("/:id", deleteTodolistuser);
todolistuserRouter.delete("/", deleteAllTodolistuser);

module.exports = todolistuserRouter;