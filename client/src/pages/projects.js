import { useState, useEffect } from "react"
import Ideas from "../components/Ideas"
import IdeasForm from "../components/IdeasForm"

const Projects = () => {
    const [projects, setProjects] = useState(null)
    useEffect(() => {
        const getProjects = async () => {
            const res = await fetch('/api/v1/projects')
            const json = await res.json()
            if (res.ok) setProjects(json)
        }

        getProjects()
    }, [])

    return (
        <main>
            <h2>Список идей:</h2>
            {projects && projects.map((project) => (
                <Ideas key={project._id} project={project} />
            ))}
            <IdeasForm />
        </main>
    )
}

export default Projects