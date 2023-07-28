// const { Json } = require("sequelize/types/utils");
const { registerHelper } = require("hbs");
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
            }).then(() => response.redirect("cabinet"));
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
                request.session.user = user.get({plain: true});
                response.redirect("cabinet")
            } else {
                response.render("signin.hbs", {message: "нееверный пароль"})
            }
        } else {
            response.render("signin.hbs", {message: "такого пользователя не существует"})
        }
    })
}

exports.cabinet = (request, response) => {
    let user = request.session.user;
    if (!user) {
        response.redirect("signin");
    } else {
        response.render("cabinet.hbs", {
            name: user.name, 
            login: user.login, 
            password: user.password
        });
    }
}

exports.settings = (request, response) => {
    response.end("Settings");
}