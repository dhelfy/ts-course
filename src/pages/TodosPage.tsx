import { useState, useEffect, FC } from "react";
import axios from "axios"
import { ITodo } from "../types/types.ts"
import { List } from "../components/List/List.tsx"
import { ToDoItem } from "../components/ToDoItem/ToDoItem.tsx"

export let TodosPage: FC = () => {
    let [todos, setTodos] = useState<ITodo[]>([])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [todos])

    return (
        <>
            <h1 className="section_heading">Todo's</h1>
            <List items={todos} renderItem={(todo) => <ToDoItem todo={todo} key={todo.id} />} />
        </>
    )
}