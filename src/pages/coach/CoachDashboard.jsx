function CoachDashboard() {
return (
    <div style={{ padding: "32px", background: "#c5b7b7", minHeight: "100vh" }}>

    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
        <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "700", margin: 0 }}>Panel del Coach</h1>
        <p style={{ color: "#6B7280", fontSize: "0.82rem", margin: 0 }}>Rodrigo Soto · Crossfit y Funcional</p>
        </div>
        <a href="#" style={{ background: "transparent", border: "2px solid #166534", color: "#166534", padding: "9px 20px", borderRadius: "8px", fontWeight: "600", fontSize: "0.85rem", textDecoration: "none" }}>
        Editar perfil
        </a>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>

        <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "14px" }}>Lista de alumnos</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
            <tr style={{ background: "#166534" }}>
                <th style={{ padding: "11px 14px", textAlign: "left", fontSize: "0.78rem", color: "white", textTransform: "uppercase" }}>Nombre</th>
                <th style={{ padding: "11px 14px", textAlign: "left", fontSize: "0.78rem", color: "white", textTransform: "uppercase" }}>Correo</th>
                <th style={{ padding: "11px 14px", textAlign: "left", fontSize: "0.78rem", color: "white", textTransform: "uppercase" }}>Disciplina</th>
            </tr>
            </thead>
            <tbody>
            {[
                { nombre: "Carlos Muñoz", correo: "cmunoz@correo.com", disciplina: "Crossfit" },
                { nombre: "Valentina Rojas", correo: "vrojas@correo.com", disciplina: "Funcional" },
                { nombre: "Martín Álvarez", correo: "malvarez@correo.com", disciplina: "Crossfit" },
                { nombre: "Sofía Guerrero", correo: "sguerrero@correo.com", disciplina: "Funcional" },
                { nombre: "Juan Paredes", correo: "jparedes@correo.com", disciplina: "Crossfit" },
            ].map((a, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #E5E7EB" }}>
                <td style={{ padding: "11px 14px", fontSize: "0.88rem" }}>{a.nombre}</td>
                <td style={{ padding: "11px 14px", fontSize: "0.88rem" }}>{a.correo}</td>
                <td style={{ padding: "11px 14px", fontSize: "0.88rem" }}>{a.disciplina}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>

        <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "14px" }}>Clases asignadas</h2>
        {[
            { nombre: "Crossfit Matutino", horario: "Lun / Mié / Vie – 07:00 hrs · Sala A" },
            { nombre: "Crossfit Vespertino", horario: "Lun / Mié / Vie – 18:00 hrs · Sala A" },
            { nombre: "Entrenamiento Funcional", horario: "Mar / Jue – 19:00 hrs · Sala B" },
        ].map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #E5E7EB" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#166534", flexShrink: 0 }}></div>
            <div>
                <div style={{ fontWeight: "600", fontSize: "0.88rem" }}>{c.nombre}</div>
                <div style={{ fontSize: "0.78rem", color: "#6B7280" }}>{c.horario}</div>
            </div>
            </div>
        ))}
        </div>
    </div>

    <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "14px" }}>Mis horarios de la semana</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div>
            {[
            { dia: "Lunes – 07:00 hrs", clase: "Crossfit Matutino · Sala A" },
            { dia: "Lunes – 18:00 hrs", clase: "Crossfit Vespertino · Sala A" },
            { dia: "Martes – 19:00 hrs", clase: "Funcional · Sala B" },
            ].map((h, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #E5E7EB" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#166534", flexShrink: 0 }}></div>
                <div>
                <div style={{ fontWeight: "600", fontSize: "0.88rem" }}>{h.dia}</div>
                <div style={{ fontSize: "0.78rem", color: "#6B7280" }}>{h.clase}</div>
                </div>
            </div>
            ))}
        </div>
        <div>
            {[
            { dia: "Miércoles – 07:00 hrs", clase: "Crossfit Matutino · Sala A" },
            { dia: "Jueves – 19:00 hrs", clase: "Funcional · Sala B" },
            { dia: "Viernes – 18:00 hrs", clase: "Crossfit Vespertino · Sala A" },
            ].map((h, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #E5E7EB" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#166534", flexShrink: 0 }}></div>
                <div>
                <div style={{ fontWeight: "600", fontSize: "0.88rem" }}>{h.dia}</div>
                <div style={{ fontSize: "0.78rem", color: "#6B7280" }}>{h.clase}</div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>

    </div>
)
}

export default CoachDashboard