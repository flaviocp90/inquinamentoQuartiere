const db = require("../models");

// image upload
const multer = require("multer");
const path = require("path");

// main model

const Image = db.image;

// get all image
const allImage = async (req, res) => {
  let image = await Image.findAll({})
  res.status(200).send(image)
}


// Upload Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'Images')
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif/
      const mimeType = fileTypes.test(file.mimetype)  
      const extname = fileTypes.test(path.extname(file.originalname))

      if(mimeType && extname) {
          return cb(null, true)
      }
      cb('Give proper files formate to upload')
  }
}).single('image')


// Add image to table

const addImage = async (req, res) => {
  let data = {
    image: req.file.path
  }
  const image = await Image.create(data)
  res.status(200).send(image)
}

// delete image

const deleteImage = async (req, res) => {
  let id = req.params.id
  await Image.destroy({ where: { id: id } })
  res.status(200).send('Image is deleted') 
}


module.exports = {
    upload,
    allImage,
    addImage,
    deleteImage
}
