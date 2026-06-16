function AdminDashboard() {
return (
    <div style={{ padding: "32px", background: "#fff5f5", minHeight: "100vh" }}>

    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
        <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "700", margin: 0 }}>Panel de Control</h1>
        <p style={{ color: "#6B7280", fontSize: "0.82rem", margin: 0 }}>Gestión general del sistema · SportClub</p>
        </div>
        <a href="#" style={{ background: "transparent", border: "2px solid #7C2D12", color: "#7C2D12", padding: "9px 20px", borderRadius: "8px", fontWeight: "600", fontSize: "0.85rem", textDecoration: "none" }}>
        Editar perfil
        </a>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "20px" }}>
        {[
        { valor: "524", label: "Total de usuarios" },
        { valor: "12", label: "Coaches activos" },
        { valor: "47", label: "Clases esta semana" },
        ].map((s, i) => (
        <div key={i} style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px", textAlign: "center" }}>
            <div style={{ fontSize: "2.4rem", fontWeight: "700", color: "#7C2D12" }}>{s.valor}</div>
            <div style={{ fontSize: "0.82rem", color: "#6B7280", marginTop: "4px" }}>{s.label}</div>
        </div>
        ))}
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
        <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ fontSize: "2rem" }}>🟢</div>
        <div>
            <div style={{ fontWeight: "700", fontSize: "0.95rem" }}>Usuarios activos</div>
            <div style={{ fontSize: "0.82rem", color: "#6B7280" }}>489 de 524 registrados</div>
        </div>
        </div>
        <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ fontSize: "2rem" }}>🏋️</div>
        <div>
            <div style={{ fontWeight: "700", fontSize: "0.95rem" }}>Clases del día</div>
            <div style={{ fontSize: "0.82rem", color: "#6B7280" }}>8 clases programadas hoy</div>
        </div>
        </div>
    </div>

    <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "14px" }}>Gestión de usuarios</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
            <tr style={{ background: "#7C2D12" }}>
            <th style={{ padding: "11px 14px", textAlign: "left", fontSize: "0.78rem", color: "white", textTransform: "uppercase" }}>Nombre</th>
            <th style={{ padding: "11px 14px", textAlign: "left", fontSize: "0.78rem", color: "white", textTransform: "uppercase" }}>Correo</th>
            <th style={{ padding: "11px 14px", textAlign: "left", fontSize: "0.78rem", color: "white", textTransform: "uppercase" }}>Rol</th>
            <th style={{ padding: "11px 14px", textAlign: "left", fontSize: "0.78rem", color: "white", textTransform: "uppercase" }}>Estado</th>
            </tr>
        </thead>
        <tbody>
            {[
            { nombre: "Admin SportClub", correo: "admin@sportclub.cl", rol: "Admin", estado: "Activo" },
            { nombre: "Rodrigo Soto", correo: "rsoto@sportclub.cl", rol: "Coach", estado: "Activo" },
            { nombre: "Ana Pérez", correo: "aperez@sportclub.cl", rol: "Coach", estado: "Activo" },
            { nombre: "Carlos Muñoz", correo: "cmunoz@correo.com", rol: "Usuario", estado: "Activo" },
            { nombre: "Valentina Rojas", correo: "vrojas@correo.com", rol: "Usuario", estado: "Activo" },
            { nombre: "Martín Álvarez", correo: "malvarez@correo.com", rol: "Usuario", estado: "Inactivo" },
            ].map((u, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #E5E7EB" }}>
                <td style={{ padding: "11px 14px", fontSize: "0.88rem" }}>{u.nombre}</td>
                <td style={{ padding: "11px 14px", fontSize: "0.88rem" }}>{u.correo}</td>
                <td style={{ padding: "11px 14px", fontSize: "0.88rem" }}>{u.rol}</td>
                <td style={{ padding: "11px 14px", fontSize: "0.88rem" }}>{u.estado}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>

    </div>
)
}

export default AdminDashboard