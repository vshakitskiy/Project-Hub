import { useEffect } from "react"
import Idea from "../components/Idea"
import IdeasForm from "../components/IdeasForm"

import { useIdeaContext } from "../hooks/useIdeaContext"

const Ideas = () => {
    const { ideas, dispatch } = useIdeaContext()

    useEffect(() => {
        const getIdeas = async () => {
            const res = await fetch('/api/v1/ideas')
            const json = await res.json()
             if (res.ok) dispatch({
                type: 'SET_IDEAS',
                payload: json,
             })
        }

        getIdeas()
    }, [])

    return (
        <main>
            <h2>Список идей:</h2>
            {ideas && ideas.map((idea) => (
                <Idea key={idea._id} idea={idea} />
            ))}
            <IdeasForm />
        </main>
    )
}

export default Ideas