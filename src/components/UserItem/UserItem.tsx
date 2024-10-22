import { FC } from "react"
import { IUser } from "../../types/types"
import styles from "./UserItem.module.css"

interface UserItemProps {
    user: IUser;
}

export let UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div className={styles.userItem}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.name} lives in {user.address.city}</p>
        </div>
    )
}