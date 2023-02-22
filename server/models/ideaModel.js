const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ideaSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    team: {
        type: Number,
        required: true,
    },
}, { timestamps: true })

module.exports = mongoose.model('Idea', ideaSchema)