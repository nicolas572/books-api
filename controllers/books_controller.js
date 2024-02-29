const express = require('express')
const books = express.Router()
const Book = require('../models/book')

//index
books.get('/', (req, res) => {
    Book.find()
        .then(foundBooks => {
            res.status(200).json(foundBooks)
        })
        .catch(err => {
            res.status(400).json({ 
                message: 'something went wrong, could not get books'
            })
        })
})

module.exports = books