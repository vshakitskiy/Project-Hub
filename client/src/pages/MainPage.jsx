import { useContext } from "react"

import { UserStateContext } from "../contexts/contexts"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { styles } from "../utils/styles"
import time from "../utils/time"

const MainPage = () => {
    const MainBlocks = ({ heading, text, button, link }) => <div
        className="border border-[#804DC1] p-3 max-w-[300px] mx-auto mb-6"
    >
        <h3 className="text-center text-[22px] font-bold mb-4">{heading}</h3>
        <p className="text-center max-w-[280px] mx-auto mb-8 text-gray">{text}</p>
        <button
            onClick={() => navigate(link)}
            className={`${styles.button} block mx-auto mb-4`}
        >{button}</button>
    </div>

    const { user } = useContext(UserStateContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user])

    return (
        <div className="max-w-xs mx-auto">
            <h2 className="text-[22px] font-bold max-w-[300px] ml-3 mt-5 mb-11">
                {time()}, {user.name}!
            </h2>
            <MainBlocks
                heading="Создание проекта"
                text="Появилась крутая идея к проекту? Заполни форму и начни набирать команду студентов из других групп."
                button="Создать проект"
                link="/main/create"
            />
            <MainBlocks
                heading="Поиск проекта"
                text="Хотите найти подходящий для себя проект? Рассмотрите список всех проектов и выберите интересные команды."
                button="Найти проект"
                link="/main/find"
            />
            <MainBlocks
                heading="Трекер проекта"
                text="Отслеживай прогресс своего проекта вместе со своими товарищами, обговаривайте все нужно в чате команды."
                button="Открыть трекер"
                link="/main/tracker"
            />
        </div>
    )
}

export default MainPage