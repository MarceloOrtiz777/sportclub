function UserDashboard() {
return (
    <div style={{ padding: "32px", background: "#c5b7b7", minHeight: "100vh" }}>

    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
        <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "700", margin: 0 }}>¡Hola, Marcelo!</h1>
        <p style={{ color: "#6B7280", fontSize: "0.82rem", margin: 0 }}>Bienvenido a tu panel personal</p>
        </div>
        <a href="/perfil" style={{ background: "transparent", border: "2px solid #2E1A47", color: "#2E1A47", padding: "9px 20px", borderRadius: "8px", fontWeight: "600", fontSize: "0.85rem", textDecoration: "none" }}>
        Editar perfil
        </a>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>

        <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "14px" }}>Información del usuario</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #E5E7EB" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F2B705", flexShrink: 0 }}></div>
            <div><strong>Nombre:</strong> Marcelo Muñoz</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #E5E7EB" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F2B705", flexShrink: 0 }}></div>
            <div><strong>Correo:</strong> marcelo.munoz@correo.com</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #E5E7EB" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F2B705", flexShrink: 0 }}></div>
            <div><strong>Deporte favorito:</strong> Crossfit</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F2B705", flexShrink: 0 }}></div>
            <div><strong>Miembro desde:</strong> Enero 2025</div>
            </div>
        </div>
        </div>

        <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "14px" }}>Mis reservas</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
            {[
            { nombre: "Clase de Crossfit", tiempo: "Lunes – 18:00 hrs · Sala A" },
            { nombre: "Yoga Matutino", tiempo: "Martes – 08:00 hrs · Sala B" },
            { nombre: "Funcional Intenso", tiempo: "Jueves – 19:00 hrs · Sala A" },
            { nombre: "Spinning", tiempo: "Viernes – 17:30 hrs · Sala C" },
            ].map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #E5E7EB" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F2B705", flexShrink: 0 }}></div>
                <div>
                <div style={{ fontWeight: "600", fontSize: "0.88rem" }}>{r.nombre}</div>
                <div style={{ fontSize: "0.78rem", color: "#6B7280" }}>{r.tiempo}</div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>

    <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "14px" }}>Clases disponibles</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
        {[
            { nombre: "Crossfit", horario: "Lun / Mié / Vie · 07:00 y 18:00 hrs" },
            { nombre: "Yoga", horario: "Mar / Jue · 08:00 y 19:00 hrs" },
            { nombre: "Spinning", horario: "Lun / Mié · 06:30 y 17:30 hrs" },
        ].map((c, i) => (
            <div key={i} style={{ background: "#F7F5FB", borderRadius: "10px", border: "1px solid #E5E7EB", padding: "18px" }}>
            <div style={{ fontWeight: "700", fontSize: "0.92rem", marginBottom: "4px" }}>{c.nombre}</div>
            <div style={{ fontSize: "0.8rem", color: "#6B7280" }}>{c.horario}</div>
            </div>
        ))}
        </div>
    </div>

    <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "14px" }}>Mi perfil</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #E5E7EB" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F2B705", flexShrink: 0 }}></div>
            <div><strong>Nombre:</strong> Marcelo Muñoz</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #E5E7EB" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F2B705", flexShrink: 0 }}></div>
            <div><strong>Correo:</strong> marcelo.munoz@correo.com</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F2B705", flexShrink: 0 }}></div>
            <div><strong>Objetivos personales:</strong> Mejorar resistencia y bajar de peso</div>
        </div>
        </div>
    </div>

    </div>
)
}

export default UserDashboard