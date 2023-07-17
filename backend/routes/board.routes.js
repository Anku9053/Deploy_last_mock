const express = require('express');
const router = express.Router();
const Board = require('../modals/board.model');


router.get('/', async (req, res) => {
  try {
    const boards = await Board.find().populate('tasks');
    res.json(boards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/create', async (req, res) => {
  const board = new Board({ name: req.body.name });
  try {
    const newboard = await board.save();
    res.status(201).json(newboard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
