import { useEffect, useContext } from "react"
import { UserStateContext } from "../contexts/contexts"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    console.log("::", location.pathname)
    const navigate = useNavigate()
    const { user } = useContext(UserStateContext)

    useEffect(() => {
        navigate(
            user
                ? "/main"
                : "/login"
        )
    }, [user])

    return (<></>)
}

export default NotFound