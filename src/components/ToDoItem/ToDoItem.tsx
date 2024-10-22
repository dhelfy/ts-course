import { FC } from "react"
import { ITodo } from "../../types/types"
import styles from "./ToDoItem.module.css"

interface ToDoItemProps {
    todo: ITodo;
}

export let ToDoItem: FC<ToDoItemProps> = ({todo}) => {
    return (
        <div className={styles.toDoItem}>
            <input type="checkbox" checked={todo.completed}/>
            {todo.id} {todo.title}
        </div>
    )
}