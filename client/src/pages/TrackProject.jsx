import { useContext, useEffect, useState } from "react"
import { styles } from "../utils/styles"
import { UserStateContext } from "../contexts/contexts"
import axios from "axios"
import ProjectHeading from "../components/ProjectHeading"
import ProjectTeam from "../components/ProjectTeam"
import { useNavigate } from "react-router-dom"

const userUrl = "/api/users"
const projectUrl = "/api/projects"

const TrackProject = () => {
    // const [reload, setReload] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [projectId, setProjectId] = useState(null)
    const [project, setProject] = useState(null)
    const [creator, setCreator] = useState(null)
    const { user } = useContext(UserStateContext)

    // const navigate = useNavigate()

    const handleSoon = () => {
        alert("Данная функция появится в полной реализации ProjectHub!")
    }

    const tokenHeader = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        axios
            .get(`${userUrl}/${user.id}`)
            .then(res => {
                if (!res.data.project) {
                    setProjectId(null)
                    setLoaded(true)
                    return
                }
                setCreator(res.data.creator)
                setProjectId(res.data.project.id)
            })
    }, [user])

    useEffect(() => {
        if (!projectId) return
        axios
            .get(`${projectUrl}/${projectId}`)
            .then(res => setProject(res.data))
        setLoaded(true)
    }, [projectId])

    const handleRemove = () => {
        axios
            .delete(`${projectUrl}/${project.id}`, tokenHeader)
        setTimeout(() => window.location.reload(), 500)
    }

    return <>
        <h2 className="text-[28px] text-center mt-[40px] font-bold mb-8">Трекер</h2>
        {!loaded
            ? <h3>Загрузка...</h3>
            : <>{project == null
                ? <h3 className="text-center mt-36 text-gray text-[22px] w-[360px] mx-auto">Вы не состоите в проекте. Создайте или присоединитесь к проекту, чтобы разблокировать секцию.</h3>
                : <div className="max-w-xs mx-auto">
                    <ProjectHeading project={project} />
                    <ProjectTeam project={project} />
                    <button

                        className={`${styles.button} block mx-auto w-[300px]`}
                        onClick={handleSoon}
                    >Открыть чат</button>
                    <button
                        className={`${styles.button} block mx-auto w-[300px]`}
                        onClick={handleSoon}
                    >Просмотреть этап</button>
                    <button
                        className={`${styles.button} block mb-2 mx-auto w-[300px]`}
                        onClick={handleRemove}
                    >
                        {creator
                            ? "Удалить проект"
                            : "Покинуть команду"
                        }
                    </button>
                </div>
            }</>
        }
    </>
}

export default TrackProject