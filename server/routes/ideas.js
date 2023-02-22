const express = require('express')
const router = express.Router()
const { 
    getIdeas,
    postIdea,
    getIdea,
    deleteIdea,
} = require('../controllers/ideasControllers')

// GET: all projets
router.get('/', getIdeas)

// POST: new project
router.post('/', postIdea)

// GET[:id]: project by id
router.get('/:id', getIdea)

// DELETE[:id]: project by id
router.delete('/:id', deleteIdea)

module.exports = router