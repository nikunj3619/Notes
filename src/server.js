const express = require('express');
const app = express();
const NoteRouter = require('./routes/Note')
require('dotenv').config();


app.use(express.json())

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODBURI)
.then(function(){
    app.get('/', (req, res)=>{
        res.send("This is the Home Page");
    });
  
    app.use('/notes', NoteRouter);
})

const PORT = process.env.PORT || 5000

app.listen(PORT, function() {
    console.log("App is running on", PORT);
});