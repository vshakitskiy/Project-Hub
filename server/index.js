// dependencies
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000
const mongo = process.env.MONGO

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

// routes
const projectsRoutes = require('./routes/projects')
app.use('/api/v1/projects', projectsRoutes)

// connection
mongoose.connect(mongo)
    .then(() => {
        app.listen(port, () => {
            console.log('Connected to db. Listening on port', port)
        })
    })
    .catch(err => console.log(err))