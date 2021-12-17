module.exports = (sequelize, DataTypes) => {
    const Place = sequelize.define('image', {
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