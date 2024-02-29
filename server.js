const express = require('express')
const mongoose = require('mongoose')
const app = express()

//middleware 
require('dotenv').config()
app.use(express.json())
const PORT = process.env.PORT || 3001

//mongoose configuration
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo: ', process.env.MONGO_URI)
})

//index route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})