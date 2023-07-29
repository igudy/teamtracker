import Login from "./pages/Login"
import Register from "./pages/Register"
import EmployeeBlog from "./pages/EmployeeBlog"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employee-blog" element={<EmployeeBlog />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
