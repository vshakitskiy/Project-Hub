import { useEffect } from "react"
import Idea from "../components/Idea"
import IdeasForm from "../components/IdeasForm"
import '../styles/ideas.css'

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
            <div className="ideas-container">
                <div className="">
                    <h2 className="ideas-heading">Список идей</h2>
                    {ideas && (ideas.length === 0 ? (<h2 className="ideas-none">Нет зарегистрированных идей.</h2>) : ideas.map(idea => (
                        <Idea key={idea._id} idea={idea} />
                    )))}
                </div>
                <IdeasForm />
            </div>
        </main>
    )
}

export default Ideas