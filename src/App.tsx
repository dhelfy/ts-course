import { Routes, Route } from "react-router-dom"
import { UsersPage } from "./pages/UsersPage.tsx"
import { TodosPage } from "./pages/TodosPage.tsx"
import { UserItemPage } from "./pages/UserItemPage.tsx"
import { NavBar } from "./components/NavBar/NavBar.tsx"
import { AboutPage } from "./pages/AboutPage.tsx"

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route index element={<AboutPage />}/>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users/:id" element={<UserItemPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="*" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App