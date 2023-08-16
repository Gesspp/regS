const express = require("express");
const controller = require("../controllers/user_controller")
const userRouter = express.Router();

userRouter.get("/signin", controller.signin)
userRouter.post("/signin", controller.login)
userRouter.get("/signup", controller.signup)
userRouter.post("/signup", controller.addUser)
userRouter.get("/cabinet", controller.cabinet)
userRouter.get("/settings", controller.settings)
userRouter.get("/logout", controller.logout)

exports.userRouter = userRouter;
