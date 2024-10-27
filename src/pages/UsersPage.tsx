import { FC, useEffect, useState } from "react";
import axios from "axios"
import { UserItem } from "../components/UserItem/UserItem.tsx"
import { List } from "../components/List/List.tsx"
import { IUser } from "../types/types.ts"

export let UsersPage: FC = () => {
    let [users, setUsers] = useState<IUser[]>([])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [users])

    return (
        <>
            <h1 className="section_heading">Users</h1>
            <List items={users} renderItem={(user) => <UserItem user={user} key={user.id} />} />
        </>
    )
}