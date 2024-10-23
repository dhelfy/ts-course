import { useEffect, useState } from "react"
import { List } from "./components/List/List.tsx"
import { ITodo, IUser } from "./types/types.ts"
import axios from "axios"
import { UserItem } from "./components/UserItem/UserItem.tsx"
import { ToDoItem } from "./components/ToDoItem/ToDoItem.tsx"
import { EventsExample } from "./components/EventsExample/EventsExample.tsx"

function App() {
  let [users, setUsers] = useState<IUser[]>([])
  let [todos, setTodos] = useState<ITodo[]>([])

  async function fetchUser() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUser()
    fetchTodos()
  }, [])

  return (
    <>
      <EventsExample />
      <h1 style={{ marginBottom: '25px' }}>Users</h1>
      <List items={users} renderItem={(user) => <UserItem user={user} key={user.id} />} />
      <List items={todos} renderItem={(todo) => <ToDoItem todo={todo} key={todo.id} />} />
    </>
  )
}

export default App