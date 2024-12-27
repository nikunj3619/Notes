const mongoose = require('mongoose');
const { type } = require('os');

const NoteSchema = mongoose.Schema({
    id:{
        type: String
    },
    userid:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    content: {
        type: String
    },
    dateadded:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Note", NoteSchema);