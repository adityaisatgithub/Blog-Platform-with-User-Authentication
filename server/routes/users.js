const express = require('express');
const passport = require('passport');
const User = require('../models/User');

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (err) {
        res.status(500).send('Error registering user');
    }
});

// Login route
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send('Logged in successfully');
});

module.exports = router;
