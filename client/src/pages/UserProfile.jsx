import { useNavigate } from "react-router-dom"
import { UserStateContext } from "../contexts/contexts"
import { useContext, useEffect, useState } from "react"
import axios from "axios"

import countTeam from "../utils/count"

const baseUrl = "/api/users"

const UserProfile = () => {

    const { user } = useContext(UserStateContext)
    const [data, setData] = useState(null)

    useEffect(() => {
        axios
            .get(`${baseUrl}/${user.id}`)
            .then(res => setData(res.data))
            .catch(error => console.log(error))
    }, [])
    console.log(data)
    return <div>{data
        ? <div className="mx-auto max-w-xs">
            <h2 className="text-[24px] ml-3 mt-[40px] font-bold mb-8">Профиль</h2>
            <p className="text-[20px] text-center font-bold">{data.surname} {data.name}</p>
            <p className="text-[18px] mt-2 text-center text-gray">Почта: {data.email}</p>
            <h2 className="text-[24px] ml-3 mt-[40px] font-bold mb-8">Проект</h2>
            {data.project
                ? <div className="max-w-[320px] block mx-auto shadow-sm p-4 shadow-[#000]">
                    <h3 className="text-[20px] font-bold mb-1 ml-3">{data.project.name}</h3>
                    <div className="flex">
                        <p className="ml-3 text-gray mr-2">{data.project.industry}</p>
                        <p className="text-gray">|</p>
                        <p className="ml-3 text-gray mb-2">{data.project.users.length} {countTeam(data.project.users.length)}</p>
                    </div>
                    <p className="ml-3 mb-3 w-[100%]">{data.project.smdescription}</p>
                </div>
                : <p className="text-[20px] mt-9 text-gray text-center">
                    Нет проекта
                </p>
            }
        </div>
        : <h3 className="text-center mt-14 text-[20px]">Загрузка...</h3>}
    </div>
}

export default UserProfile