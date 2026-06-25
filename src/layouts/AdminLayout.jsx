import { Link, Outlet } from "react-router-dom"

function AdminLayout() {
return (
    <div style={{ display: "flex", minHeight: "100vh", width: "100%", margin: 0, padding: 0, overflow: "hidden" }}>
    <aside style={{ width: "230px", minWidth: "230px", background: "#7C2D12", display: "flex", flexDirection: "column", height: "100vh", position: "sticky", top: 0 }}>
        <div style={{ padding: "24px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <span style={{ fontSize: "1rem", fontWeight: "700", color: "white" }}>SportClub</span>
        </div>
        <nav style={{ flex: 1, padding: "20px 12px" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
            <li><Link to="/admin/inicio" style={{ display: "block", padding: "10px 12px", borderRadius: "8px", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.88rem" }}>Inicio</Link></li>
            <li><Link to="/admin/dashboard" style={{ display: "block", padding: "10px 12px", borderRadius: "8px", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.88rem" }}>Usuarios</Link></li>
            <li><Link to="/admin/reportes" style={{ display: "block", padding: "10px 12px", borderRadius: "8px", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.88rem" }}>Reportes</Link></li>
            <li><Link to="/admin/configuracion" style={{ display: "block", padding: "10px 12px", borderRadius: "8px", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.88rem" }}>Configuración</Link></li>
            <li><Link to="/admin/deportes" style={{ display: "block", padding: "10px 12px", borderRadius: "8px", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.88rem" }}>Gestión Deportes</Link></li>
        </ul>
        </nav>
        <div style={{ padding: "16px 12px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ padding: "10px 12px", background: "rgba(255,255,255,0.08)", borderRadius: "8px", marginBottom: "8px" }}>
            <div style={{ fontSize: "0.82rem", fontWeight: "600", color: "white" }}>Admin SportClub</div>
            <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.45)" }}>Administrador</div>
        </div>
        <Link to="/login" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "9px", borderRadius: "8px", background: "rgba(220,38,38,0.12)", color: "#fca5a5", fontSize: "0.82rem", fontWeight: "600", textDecoration: "none" }}>
            Cerrar sesión
        </Link>
        </div>
    </aside>
    <main style={{ flex: 1, overflowY: "auto" }}>
        <Outlet />
    </main>
    </div>
)
}

export default AdminLayout