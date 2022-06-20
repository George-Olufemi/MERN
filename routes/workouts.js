const express = require('express');
const router = express.Router();

//routes
//root route to display all workouts
router.get('/', (req, res) => {
    res.json({ message: 'GET all workouts'});
});

//GET a particular workout
router.get('/:id', (req, res) => {
    res.json({ message: 'GET a Single workout'});
});

//post a workout
router.post('/', (req, res) => {
    res.json({ message: 'POST a new Workout'});
});

//delete a workout
router.delete('/:id', (req, res) => {
    res.json({ message: 'DELETE a new Workout'});
});

//update a workout
router.patch('/:id', (req, res) => {
    res.json({ message: 'UPDATE a workout'});
});

module.exports = router