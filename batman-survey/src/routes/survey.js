const express = require('express');
const router = express.Router();
const Response = require('../models/response');

// GET route for the survey form
router.get('/', (req, res) => {
    res.send('Survey form will be here');
});

// POST route to submit survey responses
router.post('/', (req, res) => {
    const newResponse = new Response(req.body);
    // Here you would typically save the response to a database
    res.status(201).send('Response submitted successfully');
});

module.exports = router;