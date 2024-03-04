const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const Field = require('../models/tableModels');

const createTable = async (req, res) => {
    const { tableName, fields } = req.body;
    try {
        await sequelize.getQueryInterface().createTable(tableName, {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            ...fields.reduce((acc, field) => {
                acc[field.fieldName] = { type: field.dataType, allowNull: true };
                return acc;
            }, {})
        });
        res.status(200).send('Table created successfully');
    } catch (err) {
        console.error('Error creating table:', err);
        res.status(500).send('Error creating table');
    }
};

module.exports = { createTable };
