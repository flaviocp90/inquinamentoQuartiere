const productController = require('../controllers/placeController');
const imageController = require('../controllers/imageController');

// router
const router = require('express').Router()

// use routers

router.post('/addImage', imageController.upload, imageController.addImage);
router.get('/images', imageController.allImage)

module.exports = router
