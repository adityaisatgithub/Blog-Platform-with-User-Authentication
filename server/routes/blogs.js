const express = require('express');
const Blog = require('../models/Blog'); // Assuming you have a Blog model

const router = express.Router();

// Create a new blog post
router.post('/', async (req, res) => {
    try {
        const { title, content } = req.body;
        const blog = new Blog({ title, content });
        await blog.save();
        res.status(201).send('Blog post created successfully');
    } catch (err) {
        res.status(500).send('Error creating blog post');
    }
});

// Fetch all blog posts
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).send('Error fetching blog posts');
    }
});

module.exports = router;
