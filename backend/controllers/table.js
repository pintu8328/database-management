// controllers/table.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('dba', 'root', 'Pintu@1998', {
    dialect: 'mysql',
    host: 'localhost'
});

exports.insertData = async (req, res) => {
    const { tableName } = req.params;
    const { fields } = req.body;
    console.log(fields,'aaaaaa')

    try {
        const modelFields = fields.reduce((acc, field) => {
            acc[field.fieldName] = { type: field.dataType, allowNull: true };
            return acc;
        }, {});

        const Model = sequelize.define(tableName, modelFields);
        await sequelize.sync();

        await Model.create(req.body.data);
        res.status(200).send('Data inserted successfully');
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Error inserting data');
    }
};

exports.deleteData= async (req, res) => {
    const { tableName, id } = req.params;
    try {
        const table = sequelize.define(tableName, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            }
        });
        await table.destroy({
            where: {
                id: id
            }
        });
        res.status(200).send(`Data with id ${id} deleted from table ${tableName}`);
    } catch (err) {
        console.error('Error deleting data:', err);
        res.status(500).send('Error deleting data');
    }
};


