import { FC } from "react";
import { IUser } from "../../types/types";
import { UserItem } from "../UserItem/UserItem";
import styles from "./UserList.module.css"

interface UserListProps {
    users: IUser[];
}

export let UserList: FC<UserListProps> = ({ users }) => {
    let usersElems = users.map((user) => {
        return (
            <UserItem user={user} key={user.id}/>
        )
    })

    return (
        <div className={styles.userList}>
            {usersElems}
        </div>
    )
}