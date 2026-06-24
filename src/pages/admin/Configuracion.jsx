function Configuracion() {
return (
    <div style={{ padding: "32px", background: "#fff5f5", minHeight: "100vh" }}>
    <h1 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "8px" }}>Configuración</h1>
    <p style={{ color: "#6B7280", marginBottom: "28px" }}>Configuración general del sistema</p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {[
        { icon: "🏢", title: "Información del Club", desc: "Nombre, dirección, contacto y horarios" },
        { icon: "👥", title: "Gestión de Roles", desc: "Asignar o modificar roles de usuarios" },
        { icon: "📋", title: "Gestión de Clases", desc: "Crear, editar o eliminar clases y horarios" },
        { icon: "🔔", title: "Notificaciones", desc: "Configurar alertas y comunicaciones" },
        { icon: "💳", title: "Pagos y Membresías", desc: "Planes, precios y estados de pago" },
        { icon: "🗄️", title: "Respaldo de Datos", desc: "Exportar reportes y copias de seguridad" },
        ].map((c, i) => (
        <div key={i} style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div style={{ fontSize: "2rem" }}>{c.icon}</div>
            <div>
            <div style={{ fontWeight: "700", fontSize: "0.95rem", marginBottom: "4px" }}>{c.title}</div>
            <div style={{ fontSize: "0.82rem", color: "#6B7280" }}>{c.desc}</div>
            </div>
        </div>
        ))}
    </div>
    </div>
);
}

export default Configuracion;