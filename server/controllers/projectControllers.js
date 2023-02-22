const Project = require('../models/projectModel')
const mongoose = require('mongoose')

// get all projects
const getProjects = async (req, res) => {
    const projects = await Project.find({ })

    res.status(200).json(projects)
}

// post a new project
const postProject = async (req, res) => {
    const { name, description, team } = req.body
    try {
        const project = await Project.create({ name, description, team })
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({ 
            error: error.message
        })
    }
}

// get project by id
const getProject = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).json({
            error: 'Incorrect project id provided'
        })

    const project = await Project.findById(id)
    if (!project) return res.status(404).json({
        error: 'Project not found'
    })
    res.status(200).json(project)
}

// delete project by id
const deleteProject = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).json({
            error: 'Incorrect project id provided'
        })

    const project = await Project.deleteOne({ _id: id })
    if (!project) return res.status(404).json({
        error: 'Project not found'
    })
    res.status(200).json(project)
}

module.exports = {
    getProjects,
    postProject,
    getProject,
    deleteProject,
}