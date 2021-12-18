const placeController = require('../controllers/placeController');
const imageController = require('../controllers/imageController');

// router
const router = require('express').Router()

// use image routers
router.post('/addImage/:id', imageController.upload, imageController.addImage);
router.get('/images', imageController.allImage)
router.delete('/deleteImage/:id', imageController.deleteImage)

// use place routers
router.post('/addPlace', placeController.addPlace)  
router.get('/allPlace', placeController.getAllPlace)  
router.put('/updatePlace/:id', placeController.updatePlace) 
router.get('/place/:id', placeController.getOnePlace)  
router.delete('/deletePlace/:id', placeController.deletePlace) 

router.get('/getPlaceImage/:id', placeController.getPlaceImage)

module.exports = router
