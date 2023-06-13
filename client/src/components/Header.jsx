import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { UserStateContext } from "../contexts/contexts"

import { FiMenu } from "react-icons/fi"
import { TfiClose } from "react-icons/tfi"

const Header = () => {

    const { user } = useContext(UserStateContext)
    const [menu, changeMenu] = useState(true)
    const path = location.pathname

    const NavItem = ({ text, link }) => (
        <Link
            to={link}
            className={link == path
                ? "border-b-[2px] border-[#C292FF] pb-1"
                : ""
            }
            onClick={toggle}
        >
            {text}
        </Link>
    )

    const handleLogout = () => {
        localStorage.clear()
        location.reload()
    }

    const toggle = () => changeMenu(!menu)

    return (
        <header className="shadow shadow-[#00000071]">
            <div className="mx-auto h-10 text-[25px] max-w-xs flex justify-between items-center">
                <h2>Project<span className="text-detail">Hub</span></h2>
                <div onClick={toggle}>{menu
                    ? <FiMenu className="text-white text-[25px]" />
                    : <TfiClose className="text-white text-[20px]" />
                }</div>
            </div>
            <div className={`${menu ? "hidden" : "block"} absolute z-10 bg-main flex flex-col w-full h-full items-center text-[18px] space-y-5`}>
                <div className="flex flex-col items-center my-10 space-y-2">
                    <h3 className="text-[20px] mb-2 font-bold">{user.name} {user.surname}</h3>
                    <NavItem text="Профиль" link="/main/profile" />
                    <NavItem text="Изменить профиль" link="/main/settings" />
                    <a href="/login" onClick={handleLogout}>
                        Выйти
                    </a>
                </div>
                <NavItem text="Главная" link="/main" />
                <NavItem text="Создать проект" link="/main/create" />
                <NavItem text="Найти проект" link="/main/find" />
                <NavItem text="Открыть трекер" link="/main/tracker" />
            </div>
        </header>
    )
}

export default Header