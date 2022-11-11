const express = require("express");
const router = express.Router();

const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const todolistuserRouter = require("./todolistuser.route");

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/todolistuser", todolistuserRouter);
module.exports = router;
