module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('image', {
        image: {
            type: DataTypes.STRING
        }
    })

    return Image
}