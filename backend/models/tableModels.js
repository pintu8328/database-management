const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Field = sequelize.define('Field', {
    fieldName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataType: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Field;
