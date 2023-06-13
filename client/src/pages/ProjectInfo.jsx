import { useEffect, useState, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { styles } from "../utils/styles"

import { UserStateContext } from "../contexts/contexts"

import ProjectHeading from "../components/ProjectHeading"
import ProjectTeam from "../components/ProjectTeam"

import axios from "axios"

const baseUrl = "/api/users"
const joinUrl = "/api/projects"

const ProjectInfo = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [project, setProject] = useState(null)

    const { user } = useContext(UserStateContext)
    const [join, setJoin] = useState(false)

    const tokenHeader = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        if (!location.state)
            navigate("/main/find")

        axios
            .get(`${baseUrl}/${user.id}`)
            .then(res => {
                setJoin(Boolean(res.data.project))
                setProject(location.state)
            })
    }, [])

    const handleJoin = () => {
        axios
            .put(`${joinUrl}/${project.id}`, {}, tokenHeader)
            .then(() => {
                navigate("/main/tracker")
            })
            .catch(error => console.log(error))
    }

    return project && (
        <div className="pt-3 max-w-xs mx-auto">
            <ProjectHeading project={project} />
            <ProjectTeam project={project} />
            {join
                ? <p className="text-center text-[18px] font-bold mt-6 text-gray">
                    Вы уже состоите в проекте
                </p>
                : <button
                    onClick={handleJoin}
                    disabled={join}
                    className={`${styles.button} block mb-2 mx-auto w-[300px] disabled:bg-[#4a2c72a1] disabled:text-[#ffffff85]`}
                >
                    Присоединиться
                </button>
            }
            <div>
                <h2 className="text-[20px] font-bold mt-5 mb-4">О проекте</h2>
                <div className="flex gap-16 mb-5">
                    <h3 className="ml-7 text-gray text-[19px]">Отрасль</h3>
                    <p className="text-[19px]">{project.industry}</p>
                </div>
                <div className="flex gap-16 mb-5">
                    <h3 className="ml-7 text-gray text-[19px]">Клиент</h3>
                    <p className="text-[19px]">{project.client}</p>
                </div>
                <div className="mb-5">
                    <h3 className="ml-7 text-gray text-[19px] mb-2">Описание</h3>
                    <p className="ml-7 text-[19px]">{project.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo