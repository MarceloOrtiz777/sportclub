function Reportes() {
return (
    <div style={{ padding: "32px", background: "#fff5f5", minHeight: "100vh" }}>
    <h1 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "8px" }}>Reportes</h1>
    <p style={{ color: "#6B7280", marginBottom: "28px" }}>Estadísticas generales del sistema</p>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}>
        {[
        { valor: "524", label: "Total de usuarios" },
        { valor: "12", label: "Coaches activos" },
        { valor: "47", label: "Clases esta semana" },
        { valor: "312", label: "Reservas activas" },
        { valor: "94%", label: "Tasa de asistencia" },
        { valor: "186", label: "Clases realizadas este mes" },
        ].map((s, i) => (
        <div key={i} style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px", textAlign: "center" }}>
            <div style={{ fontSize: "2.4rem", fontWeight: "700", color: "#7C2D12" }}>{s.valor}</div>
            <div style={{ fontSize: "0.82rem", color: "#6B7280", marginTop: "4px" }}>{s.label}</div>
        </div>
        ))}
    </div>
    </div>
);
}

export default Reportes;