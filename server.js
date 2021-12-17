const express = require('express');

const app = express();

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// test api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from api' })
})

// routers
const router = require('./routes/placeRouter')
app.use('/api/places', router)

// Images folder 
app.use('/Images', express.static('./Images'))

// port
const PORT = process.env.PORT|| 8080

//server
app.listen(PORT, () => {
    console.log(`Server is running on port${PORT}`)
})
