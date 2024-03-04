const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('dba','root','Pintu@1998',{
    dialect:'mysql',
    host:'localhost'
})

module.exports= sequelize 