const Sequelize = require("sequelize");
const sequelize = new Sequelize("a0221501_nikita", "a0221501_nikita", "WN94hLNM", {
  dialect: "mysql",
  host: "141.8.193.8"
});

const User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING, 
        allowNull: false 
    }
})

exports.User = User;

sequelize.sync({alter: true})