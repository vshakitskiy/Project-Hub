const express = require('express')
const router = express.Router()
const { 
    getProjects,
    postProject,
    getProject,
    deleteProject,
} = require('../controllers/projectControllers')

// GET: all projets
router.get('/', getProjects)

// POST: new project
router.post('/', postProject)

// GET[:id]: project by id
router.get('/:id', getProject)

// DELETE[:id]: project by id
router.delete('/:id', deleteProject)

module.exports = router