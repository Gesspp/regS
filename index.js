const express = require("express");
const mysql = require("mysql2");
const seq = require("sequelize");
const userRouter = require("./routers/user_router");
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
const session = require("express-session")
const cookieParser = require("cookie-parser")

app.set('trust proxy', 1) // trust first proxy
app.set("view engine", "hbs");

app.use(cookieParser("aaa2C44-4D44-WppQ38Siuyiuy"))

app.use(session({
    secret: 'aaa2C44-4D44-WppQ38Siuyiuy',
    saveUninitialized: true
}))


app.use(urlencodedParser);

app.use("/static", express.static(__dirname + "/public"));

app.use("/users", userRouter.userRouter)

app.listen(3001);