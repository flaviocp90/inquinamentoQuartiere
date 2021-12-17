module.exports = (sequelize, DataTypes) => {
    const Place = sequelize.define('place', {
        Name: {
            type: DataTypes.STRING
        },
        Andress: {
            type: DataTypes.STRING
        },
        Note: {
            type: DataTypes.STRING
        }

    })

    return Place
}