import { Routes, Route, useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { UserStateContext } from "../contexts/contexts"

import Header from "../components/Header"
import NotFound from "../components/NotFound"

import MainPage from "./MainPage"
import UserProfile from "./UserProfile"
import CreateProject from "./CreateProject"
import FindProject from "./FindProject"
import TrackProject from "./TrackProject"
import ProjectInfo from "./ProjectInfo"

const AppPages = () => {
    const navigate = useNavigate()
    const { user } = useContext(UserStateContext)
    useEffect(() => {
        if (!user)
            navigate("/login")
    }, [user])

    return user && <>
        <Header />
        <Routes>
            <Route
                path="/"
                element={<MainPage />}
            />
            <Route
                path="/profile"
                element={<UserProfile />}
            />
            <Route
                path="/find/info"
                element={<ProjectInfo />}
            />
            <Route
                path="/settings"
                element={<UserProfile />}
            />
            <Route
                path="/create"
                element={<CreateProject />}
            />
            <Route
                path="/find"
                element={<FindProject />}
            />
            <Route
                path="/tracker"
                element={<TrackProject />}
            />
            <Route
                path="/*"
                element={<NotFound />}
            />
        </Routes>
    </>

}

export default AppPages