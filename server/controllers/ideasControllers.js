const Idea = require('../models/ideaModel')
const mongoose = require('mongoose')

// get all Ideas
const getIdeas = async (req, res) => {
    const ideas = await Idea.find({ })

    res.status(200).json(ideas)
}

// post a new idea
const postIdea = async (req, res) => {
    const { name, description, team } = req.body
    try {
        const idea = await Idea.create({ name, description, team })
        res.status(200).json(idea)
    } catch (error) {
        res.status(400).json({ 
            error: error.message
        })
    }
}

// get idea by id
const getIdea = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).json({
            error: 'Incorrect idea id provided'
        })

    const idea = await Idea.findById(id)
    if (!idea) return res.status(404).json({
        error: 'Idea not found'
    })
    res.status(200).json(idea)
}

// delete idea by id
const deleteIdea = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).json({
            error: 'Incorrect idea id provided'
        })

    const idea = await Idea.deleteOne({ _id: id })
    if (!idea) return res.status(404).json({
        error: 'Idea not found'
    })
    res.status(200).json(idea)
}

module.exports = {
    getIdeas,
    postIdea,
    getIdea,
    deleteIdea,
}