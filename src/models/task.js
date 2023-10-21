const Sequelize = require('sequelize');
const { Model } = Sequelize;
const { sequelize } = require('../config/sequelize');

class Task extends Model {}

Task.init(
    {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false    
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        forengKey: true,
      }
},
{
    sequelize,
    modelName: 'task',
    timestamps: true
}
);

module.exports = Task;
