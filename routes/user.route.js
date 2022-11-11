const express = require("express");
const userRouter = express.Router();

const {
  getAllUser,
  getUserByID,
  updateUserByID,
  deleteUserByID,
} = require("../controllers/user.controller");

userRouter.get("/", getAllUser);
userRouter.get("/:id", getUserByID);
userRouter.put("/:id", updateUserByID);
userRouter.delete("/:id", deleteUserByID);

module.exports = userRouter;
