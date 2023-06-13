import { useState, useContext } from "react"
import { styles } from "../utils/styles"
import Notification from "../components/Notification"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { UserStateContext } from "../contexts/contexts"

const baseUrl = "/api/projects"

const CreateProject = () => {
    const [name, setName] = useState("")
    const [smdescription, setSmdescription] = useState("")
    const [industry, setIndustry] = useState("default")
    const [client, setClient] = useState("default")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(null)

    const { user } = useContext(UserStateContext)

    const navigate = useNavigate()
    const headers = "text-[20px] font-bold mb-2"
    const tokenHeader = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(client)
        if (industry == "default" || client == "default") {
            setError({ error: "Отрасль или клиент не выбраны" })
            setTimeout(() => setError(null), 4000)
            return
        }

        if (name.length < 2 || smdescription.length < 10 || description.length < 10) {
            setError({ error: "Информация о проекте заполнена в неверном формате" })
            setTimeout(() => setError(null), 4000)
            return
        }

        axios
            .post(baseUrl, {
                name,
                smdescription,
                industry,
                client,
                description
            }, tokenHeader)
            .then(() => {
                navigate("/main/tracker")
            })
            .catch(error => {
                setError(error.response.data)
                setTimeout(() => setError(null), 4000)
            })
    }

    return (
        <>
            <div className="h-9 mt-[1px]">
                {error && <Notification message={error} />}
            </div>
            <h2 className="text-[28px] text-center mt-[40px] font-bold mb-8">Новый проект</h2>
            <form onSubmit={handleSubmit} className=" max-w-xs mx-auto">
                <label>
                    <h3 className={headers}>Название проекта</h3>
                    <input
                        className={`${styles.input} w-[320px]`}
                        type="text"
                        value={name}
                        placeholder="Укажите название (> 2 букв)"
                        onChange={({ target }) => setName(target.value)}
                        required
                    />
                </label>
                <label>
                    <h3 className={headers}>Краткое описание</h3>
                    <textarea
                        className={`${styles.input} ${styles.textarea}`}
                        type="text"
                        value={smdescription}
                        placeholder="Кратко опиши идею (>10 букв)"
                        onChange={({ target }) => {
                            setSmdescription(target.value)
                        }}
                        required
                    />
                </label>
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
                <label >
                    <h3 className={headers}>Кто твой клиент</h3>
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
                <label>
                    <h3 className={headers}>Описание проекта</h3>
                    <textarea
                        className={`${styles.input} ${styles.textarea}`}
                        type="text"
                        value={description}
                        placeholder="Расскажи детали проекта (>10 букв)"
                        onChange={({ target }) => {
                            setDescription(target.value)
                        }}
                        required
                    />
                </label>
                <button
                    type="submit"
                    className={`${styles.button} block my-5`}
                >Создать проект</button>
            </form>
        </>
    )
}

export default CreateProject