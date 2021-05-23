const express = require('express');
const router = express.Router();
const { Genre } = require('../models/genre.model');

router.route('/')
  .get(async (req, res) => {
    try {
      const genres = await Genre.find({});
      res.json({ success: true, genres })
    } catch (error) {
      res.json({ success: false, message: 'Error retrieving Genres', errorMessage: error.message })
    }
  })
  .post(async (req, res) => {
    try {
      const genre = req.body;
      const newGenre = new Genre(genre);
      const savedGenre = await newGenre.save();
      res.json({ success: true, genre: savedGenre });
    } catch(error) {
      res.json({ success: false, message: 'Error adding new genre', errorMessage: error.message })
    }
   })

module.exports = router;