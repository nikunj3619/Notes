const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.post('/list', async (req, res)=>{
    var notes = await Note.find({userid: req.body.userid});
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
    var note = await Note.findOneAndDelete({id: req.body.id});
    res.json(note)
})

module.exports = router;