import { useState, useEffect } from "react";

const API = "http://localhost:3000";

function getToken() {
return localStorage.getItem("token");
}

function AdminDashboard() {
const [usuarios, setUsuarios] = useState([]);
const [showModal, setShowModal] = useState(false);
const [editando, setEditando] = useState(null);
const [feedback, setFeedback] = useState({ msg: "", tipo: "" });

const [form, setForm] = useState({
    full_name: "", email: "", password: "", confirm: "", role: "user"
});
const [errores, setErrores] = useState({});

useEffect(() => {
    cargarUsuarios();
}, []);

async function cargarUsuarios() {
    try {
    const res = await fetch(`${API}/api/users`, {
        headers: { Authorization: `Bearer ${getToken()}` }
    });
    const data = await res.json();
    if (data.ok) setUsuarios(data.data);
    } catch (e) {
    mostrarFeedback("Error al cargar usuarios", "danger");
    }
}

function mostrarFeedback(msg, tipo) {
    setFeedback({ msg, tipo });
    setTimeout(() => setFeedback({ msg: "", tipo: "" }), 3000);
}

function abrirModalCrear() {
    setEditando(null);
    setForm({ full_name: "", email: "", password: "", confirm: "", role: "user" });
    setErrores({});
    setShowModal(true);
}

async function abrirModalEditar(id) {
    try {
    const res = await fetch(`${API}/api/users/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
    });
    const data = await res.json();
    const u = data.data;
    setEditando(id);
    setForm({ full_name: u.full_name, email: u.email, password: "", confirm: "", role: u.role });
    setErrores({});
    setShowModal(true);
    } catch (e) {
    mostrarFeedback("Error al cargar usuario", "danger");
    }
}

function validar() {
    const e = {};
    if (!form.full_name) e.full_name = "El nombre es obligatorio";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email inválido";
    if (!editando && form.password.length < 8) e.password = "Mínimo 8 caracteres";
    if (!editando && form.password !== form.confirm) e.confirm = "Las contraseñas no coinciden";
    return e;
}

async function guardarUsuario() {
    const e = validar();
    if (Object.keys(e).length > 0) { setErrores(e); return; }
    setErrores({});

    try {
    let res;
    if (editando) {
        res = await fetch(`${API}/api/users/${editando}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify({ full_name: form.full_name, email: form.email, role: form.role })
        });
    } else {
        res = await fetch(`${API}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify({ full_name: form.full_name, email: form.email, password: form.password, role: form.role, must_change_password: false })
        });
    }
    const data = await res.json();
    if (data.ok) {
        setShowModal(false);
        mostrarFeedback(editando ? "Usuario actualizado" : "Usuario creado", "success");
        cargarUsuarios();
    } else {
        mostrarFeedback(data.message || "Error al guardar", "danger");
    }
    } catch (e) {
    mostrarFeedback("Error al conectar con el servidor", "danger");
    }
}

async function eliminarUsuario(id) {
    if (!window.confirm("¿Eliminar este usuario?")) return;
    try {
    const res = await fetch(`${API}/api/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${getToken()}` }
    });
    const data = await res.json();
    if (data.ok) {
        mostrarFeedback("Usuario eliminado", "success");
        cargarUsuarios();
    } else {
        mostrarFeedback(data.message || "Error al eliminar", "danger");
    }
    } catch (e) {
    mostrarFeedback("Error al conectar con el servidor", "danger");
    }
}

function formatFecha(fecha) {
    if (!fecha) return "–";
    return new Date(fecha).toLocaleDateString("es-CL");
}

function badgeRol(rol) {
    const colores = { admin: "danger", coach: "primary", user: "success" };
    return <span className={`badge bg-${colores[rol] || "secondary"}`}>{rol}</span>;
}

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

    {feedback.msg && (
        <div className={`alert alert-${feedback.tipo}`}>{feedback.msg}</div>
    )}

    <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <div>
            <h2 style={{ fontSize: "1rem", fontWeight: "700", margin: 0 }}>Gestión de usuarios</h2>
            <p style={{ fontSize: "0.82rem", color: "#6B7280", margin: 0 }}>Administra los usuarios del sistema</p>
        </div>
        <button className="btn btn-success" onClick={abrirModalCrear}>+ Nuevo Usuario</button>
        </div>

        <table className="table table-bordered">
        <thead style={{ background: "#7C2D12" }}>
            <tr>
            <th style={{ color: "white" }}>ID</th>
            <th style={{ color: "white" }}>Nombre</th>
            <th style={{ color: "white" }}>Email</th>
            <th style={{ color: "white" }}>Rol</th>
            <th style={{ color: "white" }}>Fecha registro</th>
            <th style={{ color: "white" }}>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {usuarios.map(u => (
            <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.full_name}</td>
                <td>{u.email}</td>
                <td>{badgeRol(u.role)}</td>
                <td>{formatFecha(u.created_at)}</td>
                <td style={{ display: "flex", gap: "6px" }}>
                <button className="btn btn-primary btn-sm" onClick={() => abrirModalEditar(u.id)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => eliminarUsuario(u.id)}>Eliminar</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>

      {/* MODAL */}
    {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
        <div style={{ background: "white", borderRadius: "12px", padding: "32px", width: "100%", maxWidth: "480px" }}>
            <h3 style={{ marginBottom: "20px" }}>{editando ? "Editar Usuario" : "Nuevo Usuario"}</h3>

            <div className="mb-3">
            <label className="form-label fw-semibold">Nombre completo</label>
            <input className={`form-control ${errores.full_name ? "is-invalid" : ""}`} value={form.full_name} onChange={e => setForm({ ...form, full_name: e.target.value })} />
            {errores.full_name && <div className="invalid-feedback">{errores.full_name}</div>}
            </div>

            <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input className={`form-control ${errores.email ? "is-invalid" : ""}`} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            {errores.email && <div className="invalid-feedback">{errores.email}</div>}
            </div>

            <div className="mb-3">
            <label className="form-label fw-semibold">Rol</label>
            <select className="form-select" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}>
                <option value="user">Usuario</option>
                <option value="coach">Coach</option>
                <option value="admin">Admin</option>
            </select>
            </div>

            {!editando && (
            <>
                <div className="mb-3">
                <label className="form-label fw-semibold">Contraseña</label>
                <input type="password" className={`form-control ${errores.password ? "is-invalid" : ""}`} value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
                {errores.password && <div className="invalid-feedback">{errores.password}</div>}
                </div>
                <div className="mb-3">
                <label className="form-label fw-semibold">Confirmar contraseña</label>
                <input type="password" className={`form-control ${errores.confirm ? "is-invalid" : ""}`} value={form.confirm} onChange={e => setForm({ ...form, confirm: e.target.value })} />
                {errores.confirm && <div className="invalid-feedback">{errores.confirm}</div>}
                </div>
            </>
            )}

            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", marginTop: "8px" }}>
            <button className="btn btn-danger" onClick={() => setShowModal(false)}>Cancelar</button>
            <button className="btn btn-success" onClick={guardarUsuario}>Guardar</button>
            </div>
        </div>
        </div>
    )}

    </div>
);
}

export default AdminDashboard;