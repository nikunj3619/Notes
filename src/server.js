const express = require('express');
const app = express();
const NoteRouter = require('./routes/Note');
const cors = require('cors'); // Import the CORS package
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors()); // Use CORS middleware globally

// MongoDB Connection
const mongoose = require('mongoose');
mongoose
    .connect(process.env.MONGODBURI)
    .then(function () {
        console.log('Connected to MongoDB');
        
        // Routes
        app.get('/', (req, res) => {
            res.send('This is the Home Page');
        });

        app.use('/notes', NoteRouter);
    })
    .catch((err) => console.error('MongoDB connection error:', err));

// Server Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log('App is running on port', PORT);
});
