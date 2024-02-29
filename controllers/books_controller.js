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

//show
books.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(foundBook => {
            res.status(200).json(foundBook)
        })
        .catch(err => {
            res.status(400).json({ 
                message: 'something went wrong, could not find book'
            })
        })
})

//update
books.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedBook => {
            res.status(200).json(updatedBook)
        })
        .catch(err => {
            res.status(400).json({ 
                message: 'something went wrong, could not update book'
            })
        })
})

//delete
books.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(deletedBook => {
            res.status(200).json({
                message: 'book deleted'
            })
        })
        .catch(err => {
            res.status(400).json({ 
                message: 'something went wrong, could not delete book'
            })
        })
})

//export
module.exports = books