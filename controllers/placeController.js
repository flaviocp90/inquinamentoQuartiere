const db = require('../models');

const Place = db.place;

// create new place
const addPlace = async (req, res) => {
    let info = {
        Name: req.body.Name,
        Andress: req.body.Andress,
        Note: req.body.Note
    }
    console.log(info)
    const place = await Place.create(info)
    res.status(200).send(place)
}

// get all place
const getAllPlace = async (req, res) => {
    let places = await Place.findAll({})
    res.status(200).send(places)
}

// update place
const updatePlace = async (req, res) => {
    let id = req.params.id
    const place = await Place.update(req.body, { where: { id: id } })
    res.status(200).send(place)
}

// delete place
const deletePlace = async (req, res) => {
    let id = req.params.id
    await Place.destroy({ where: { id: id } })
    res.status(200).send('Place is deleted')
}

// get single place
const getOnePlace = async (req, res) => {
    let id = req.params.id
    let place = await Place.findOne({ where: { id: id } })
    res.status(200).send(place)
}

module.exports = {
    addPlace,
    getAllPlace,
    updatePlace,
    deletePlace,
    getOnePlace

}