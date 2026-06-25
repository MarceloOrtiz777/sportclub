import Deportes from "../pages/admin/Deportes"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import UserDashboard from "../pages/user/UserDashboard"
import CoachDashboard from "../pages/coach/CoachDashboard"
import AdminDashboard from "../pages/admin/AdminDashboard"
import Reportes from "../pages/admin/Reportes"
import Configuracion from "../pages/admin/Configuracion"
import Inicio from "../pages/admin/Inicio"
import UserLayout from "../layouts/UserLayout"
import CoachLayout from "../layouts/CoachLayout"
import AdminLayout from "../layouts/AdminLayout"

function AppRoutes() {
return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/user" element={<UserLayout />}>
        <Route path="dashboard" element={<UserDashboard />} />
        </Route>
        <Route path="/coach" element={<CoachLayout />}>
        <Route path="dashboard" element={<CoachDashboard />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="reportes" element={<Reportes />} />
        <Route path="configuracion" element={<Configuracion />} />
        <Route path="deportes" element={<Deportes />} />
        </Route>
    </Routes>
    </BrowserRouter>
)
}

export default AppRoutes