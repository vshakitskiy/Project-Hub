import { styles } from "../utils/styles"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import ProjectCard from "../components/ProjectCard"

const baseUrl = "/api/projects"
const headers = "text-[20px] font-bold mb-2"

const FindProject = () => {
    const navigate = useNavigate()

    const [projects, setProject] = useState(null)

    const [search, setSearch] = useState("")
    const [industry, setIndustry] = useState("default")
    const [client, setClient] = useState("default")

    const [filtered, setFiltered] = useState(null)

    useEffect(() => {
        axios
            .get(baseUrl)
            .then(res => {
                setProject(res.data)
                setFiltered(res.data)
            })
    }, [])

    useEffect(() => {
        if (!projects) return

        setFiltered(projects.filter(element => {
            if (!element.name.toLowerCase().includes(search)) return
            if (element.industry != industry && industry != "default") return
            if (element.client != client && client != "default") return
            return element
        }))
    }, [industry, client, search])

    const handleLocation = (data) => {
        navigate("/main/find/info", { state: data })
    }

    return (filtered && <>
        <div className="mx-auto max-w-xs">
            <h2 className="text-[28px] text-center mt-[40px] font-bold mb-8">Найти проект</h2>

            <input
                className={`${styles.input} w-[300px] block mx-auto`}
                type="text"
                value={search}
                placeholder="Введите название проекта"
                onChange={({ target }) => setSearch(target.value)}
            />
            <label >
                <h3 className={headers}>Отрасль</h3>
                <select
                    className="select w-[250px] bg-main focus:outline-none border border-gray-500 focus:border-[#C292FF] p-2 rounded-sm mb-6 ml-3"
                    onChange={({ target }) => setIndustry(target.value)}
                >
                    <option value="default">Выбери вариант</option>
                    <option value="IThub Club">IThub Club</option>
                    <option value="Ed Tech">Ed Tech</option>
                    <option value="Social Projects">Social Projects</option>
                    <option value="IT">IT</option>
                    <option value="Game">Game</option>
                    <option value="Business">Business</option>
                    <option value="Chat Bots/Apps">Chat Bots/Apps</option>
                    <option value="HR">HR</option>
                </select>
            </label>
            <label>
                <h3 className={headers}>Клиент</h3>
                <select
                    className="select w-[250px] bg-main focus:outline-none border border-gray-500 focus:border-[#C292FF] p-2 rounded-sm mb-6 ml-3"
                    onChange={({ target }) => setClient(target.value)}
                >
                    <option value="default">Выбери вариант</option>
                    <option value="B2B">B2B</option>
                    <option value="B2C">B2C</option>
                    <option value="B2G">B2G</option>
                </select>
            </label>
        </div>
        <div className="mt-4">
            <h2 className={`${headers} ml-2 text-[23px]`}>Список проектов</h2>
            {filtered.map(project =>
                <ProjectCard
                    key={project.id}
                    project={project}
                    handleFunc={handleLocation}
                />
            )}
        </div>
    </>
    )
}

export default FindProject