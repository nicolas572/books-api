const express = require('express')
const mongoose = require('mongoose')
const app = express()

//middleware 
require('dotenv').config()
app.use(express.json())
const PORT = process.env.PORT || 3001

//index route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})