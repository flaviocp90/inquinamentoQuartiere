const dbConfig = require('../config/dbConfig');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Connected')
})
.catch(err => {
    console.log('Error' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.place = require('./placeModel')(sequelize, DataTypes)
db.image = require('./imageModel')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('re-sync done')
})

// one to many relation
db.place.hasMany(db.image, {
    foreignKey: 'place_id',
    as: 'image'
})

db.image.belongsTo(db.place, {
    foreignKey: 'place_id',
    as: 'place'
})

module.exports = db