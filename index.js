const express = require("express");
const mysql = require("mysql2");
const seq = require("sequelize");
const userRouter = require("./routers/user_router");
const app = express();
const urlencodedParser = express.urlencoded({extended: false});

app.set("view engine", "hbs");

app.use(urlencodedParser);

app.use("/static", express.static(__dirname + "/public"));

app.use("/users", userRouter.userRouter)

app.listen(3000);