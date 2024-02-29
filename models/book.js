const mongoose = require('mongoose')
const { Schema } = mongoose

//SCHEMA
const bookSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

//MODEL
const Book = mongoose.model('Book', bookSchema)

module.exports = Book