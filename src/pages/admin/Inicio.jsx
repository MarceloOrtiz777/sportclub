function Inicio() {
return (
    <div style={{ padding: "32px", background: "#fff5f5", minHeight: "100vh" }}>
    <h1 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "8px" }}>Bienvenido, Admin</h1>
    <p style={{ color: "#6B7280", marginBottom: "28px" }}>Panel de control del sistema SportClub</p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
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
    </div>
);
}

export default Inicio;