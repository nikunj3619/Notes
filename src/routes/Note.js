const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get('/list', async (req, res)=>{
    console.log("req recd")
    var notes = await Note.find();
    res.json(notes);
});

router.post('/add', async (req, res)=>{
    var newNote = await Note.create({
        id: req.body.id,
        userid: req.body.userid,
        title : req.body.title,
        content : req.body.content
    });
    res.json(newNote);
});

router.post('/delete', async (req, res) => {
    var note = await Note.findOneAndDelete({title: req.body.title});
    res.json(note);
})

module.exports = router;