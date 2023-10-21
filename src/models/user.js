const Sequelize = require('sequelize');
const { Model } = Sequelize;
const { sequelize } = require('../config/sequelize');

class User extends Model {}

User.init({ 
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
    },
    firstName: {
        type: Sequelize.STRING(50),
        allowNull: false, 
    },
    lastName: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true, 
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
    },
    role:{
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: 'USER_ROLE',
    }
}, {
    sequelize, 
    modelName: 'user', 
    timestamps: true, 
});

module.exports = User;

