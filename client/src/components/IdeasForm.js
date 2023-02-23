import { useState } from "react"

import { useIdeaContext } from "../hooks/useIdeaContext"

const IdeasForm = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [team, setTeam] = useState('')
    const [error, setError] = useState(null)
    const { dispatch } = useIdeaContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const idea = { name, description, team }
        const res = await fetch('/api/v1/ideas', {
            method: 'POST',
            body: JSON.stringify(idea),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const json = await res.json()

        if (!res.ok) {
            setError(json.error)
        }
        if (res.ok) {
            setName('')
            setDescription('')
            setTeam('')
            setError('')
            dispatch({
                type: 'POST_IDEA',
                payload: json
            })
        }
    }

    return (
        <div>
            <h2 className="ideas-heading">Зарегистрировать идею</h2>
            <form onSubmit={handleSubmit} className='form'>
                <input
                    required={true}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Название проекта"
                />
                <textarea
                    required={true}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="Описание проекта"
                >

                </textarea>
                <input
                    required={true}
                    type="number"
                    onChange={(e) => setTeam(e.target.value)}
                    value={team}
                    placeholder="Размер команды"
                />
                <button type="submit">Добавить идею</button>
                <p>{error}</p>
            </form>
        </div>
    )
}

export default IdeasForm