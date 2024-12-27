const express = require('express');
const app = express();
const NoteRouter = require('./routes/Note')

app.use(express.json())

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://nikunj:Nikunj%40123@cluster0.cgzt1.mongodb.net/notesapp?retryWrites=true&w=majority&appName=Cluster0")
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