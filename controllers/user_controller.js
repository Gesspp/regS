// const { Json } = require("sequelize/types/utils");
const { User } = require("../models/user_model");

exports.signup = (request, response) => {
    response.render("signup.hbs")
}

exports.addUser = (request, response) => {
    const { login, name, password } = request.body
    console.log(password);
    User.findAll({where: {login}}).then(users => {
        if (users.length === 0) {
            User.create({
                login,
                name,
                password
            }).then(() => response.redirect("cabinet", {name: name, login: login, password: password}));
        } else {
            response.render("signup.hbs", {message: "такой пользователь уже существует"})
        }
    })
}

exports.signin = (request, response) => {
    response.render("signin.hbs")
}

exports.login = (request, response) => {
    const { login, password } = request.body
    
    User.findOne({where:{login}}).then(user => {
        if (user) {
            if (user.password === password) {
                console.log(password);
                response.redirect("cabinet", {name: request.body.name, login: request.body.login, password: request.body.password})
            } else {
                response.render("signin.hbs", {message: "нееверный пароль"})
            }
        } else {
            response.render("signin.hbs", {message: "такого пользователя не существует"})
        }
    })
}

exports.cabinet = (request, response) => {
    response.render("cabinet.hbs", {name: request.body.name, login: request.body.login, password: request.body.password});
}
