import axios from "axios"
import { FC, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { IUser } from "../types/types"

export let UserItemPage: FC = () => {

    // создаем тип для параметров
    type UserItemPageParams = {
        id: string;
    }

    // типизируем параметры
    let params = useParams<UserItemPageParams>()
    let navigate = useNavigate()
    let [user, setUser] = useState<IUser | null>()

    let goBack = () => navigate(-1)

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <>
            <h1>{user?.name}</h1>
            <p>{user?.email}</p>
            <p>{user?.name} lives in {user?.address.city}</p>
            <button onClick={goBack} className="button_white">Go back</button>
        </>
    )
}