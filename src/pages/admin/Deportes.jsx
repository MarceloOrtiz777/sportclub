import { useState, useEffect } from "react";
import { sportsService } from "../../services/sportsService";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

function Deportes() {
const [deportes, setDeportes] = useState([]);
const [loading, setLoading] = useState(false);

  // Estados para Modales
const [showModal, setShowModal] = useState(false);
const [editandoId, setEditandoId] = useState(null);

  // Formulario y Errores de Validación
const [form, setForm] = useState({ name: "", objective: "", duration: "", status: true });
const [errores, setErrores] = useState({});

useEffect(() => {
    cargarDeportes();
}, []);

const cargarDeportes = async () => {
    setLoading(false);
    try {
    const data = await sportsService.getAll();
    if (data.ok) setDeportes(data.data);
    } catch (error) {
    Swal.fire("Error", "No se pudo conectar con el servidor", "error");
    }
};

  // Formateador de Fecha Obligatorio: "15 de Julio de 2026"
const formatFechaLarga = (fechaStr) => {
    if (!fechaStr) return "–";
    const fecha = new Date(fechaStr);
    return fecha.toLocaleDateString("es-CL", {
    day: "2-digit",
    month: "long",
    year: "numeric"
    }).replace(/de\s/g, "de "); // Asegura espaciado nativo limpio
};

  // Validaciones obligatorias antes de enviar
const validarFormulario = () => {
    const e = {};
    if (!form.name.trim()) e.name = "El nombre es obligatorio";
    if (!form.objective.trim()) e.objective = "El objetivo es obligatorio";
    if (!form.duration || parseInt(form.duration) <= 0) e.duration = "La duración debe ser un número mayor a 0";
    setErrores(e);
    return Object.keys(e).length === 0;
};

const handleAbrirCrear = () => {
    setEditandoId(null);
    setForm({ name: "", objective: "", duration: "", status: true });
    setErrores({});
    setShowModal(true);
};

const handleAbrirEditar = (deporte) => {
    setEditandoId(deporte.id);
    setForm({
    name: deporte.name,
    objective: deporte.objective,
    duration: deporte.duration,
    status: deporte.status
    });
    setErrores({});
    setShowModal(true);
};

const handleGuardar = async (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    try {
    let res;
    if (editandoId) {
        res = await sportsService.update(editandoId, {
        name: form.name,
        objective: form.objective,
        duration: parseInt(form.duration),
        status: form.status
        });
    } else {
        res = await sportsService.create({
        name: form.name,
        objective: form.objective,
        duration: parseInt(form.duration),
        status: form.status
        });
    }

    if (res.ok) {
        setShowModal(false);
        Swal.fire("¡Éxito!", res.message, "success");
        cargarDeportes(); // Actualización automática
    } else {
        Swal.fire("Error", res.message || "Error al procesar", "error");
    }
    } catch (error) {
    Swal.fire("Error", "Error en el servidor al guardar", "error");
    }
};

const handleEliminar = async (id) => {
    // Confirmación obligatoria usando SweetAlert2
    Swal.fire({
    title: "¿Está seguro de eliminar este deporte?",
    text: "Esta acción no se puede deshacer",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#7C2D12",
    cancelButtonColor: "#6B7280",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar"
    }).then(async (result) => {
    if (result.isConfirmed) {
        try {
        const res = await sportsService.delete(id);
        if (res.ok) {
            Swal.fire("Eliminado", "Deporte eliminado correctamente.", "success");
            cargarDeportes(); // Actualización automática
        } else {
            Swal.fire("Error", res.message, "error");
        }
        } catch (error) {
        Swal.fire("Error", "No se pudo eliminar el deporte", "error");
        }
    }
    });
};

const handleToggleStatus = async (id, currentStatus) => {
    try {
    const nuevoEstado = !currentStatus;
    const res = await sportsService.updateStatus(id, nuevoEstado);
    if (res.ok) {
        cargarDeportes(); // Actualización automática en pantalla
    } else {
        Swal.fire("Error", "No se pudo cambiar el estado", "error");
    }
    } catch (error) {
    Swal.fire("Error", "Error de red al cambiar estado", "error");
    }
};

return (
    <div style={{ padding: "32px", background: "#fff5f5", minHeight: "100vh" }}>
    
      {/* Encabezado */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
        <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "700", margin: 0 }}>Gestión de Deportes</h1>
        <p style={{ color: "#6B7280", fontSize: "0.82rem", margin: 0 }}>Módulo administrativo de disciplinas · SportClub</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
        <button className="btn btn-outline-secondary" onClick={cargarDeportes}>
            🔄 Refrescar
        </button>
        <button className="btn btn-danger" style={{ background: "#7C2D12" }} onClick={handleAbrirCrear}>
            + Nuevo Deporte
        </button>
        </div>
    </div>

      {/* Tabla de Listado */}
    <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px" }}>
        <table className="table table-bordered align-middle">
        <thead style={{ background: "#7C2D12" }}>
            <tr>
            <th style={{ color: "white" }}>Nombre</th>
            <th style={{ color: "white" }}>Objetivo</th>
            <th style={{ color: "white" }}>Duración (min)</th>
            <th style={{ color: "white" }}>Fecha de Creación</th>
            <th style={{ color: "white" }}>Estado</th>
            <th style={{ color: "white" }}>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {deportes.length === 0 ? (
            <tr>
                <td colSpan="6" className="text-center text-muted py-4">No hay deportes registrados.</td>
            </tr>
            ) : (
            deportes.map((d) => (
                <tr key={d.id}>
                <td className="fw-bold">{d.name}</td>
                <td>{d.objective}</td>
                <td>{d.duration} min</td>
                <td>{formatFechaLarga(d.created_at)}</td>
                <td>
                    {/* Switch React-Bootstrap */}
                    <Form.Check 
                    type="switch"
                    id={`status-switch-${d.id}`}
                    label={d.status ? "Activo [ON]" : "Inactivo [OFF]"}
                    checked={d.status}
                    onChange={() => handleToggleStatus(d.id, d.status)}
                    />
                </td>
                <td>
                    <div style={{ display: "flex", gap: "6px" }}>
                    <button className="btn btn-primary btn-sm" onClick={() => handleAbrirEditar(d)}>Editar</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleEliminar(d.id)}>Eliminar</button>
                    </div>
                </td>
                </tr>
            ))
            )}
        </tbody>
        </table>
    </div>

      {/* MODAL REACT-BOOTSTRAP (CREAR / EDITAR) */}
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
        <Modal.Title>{editandoId ? "Editar Deporte" : "Nuevo Deporte"}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleGuardar}>
        <Modal.Body>
            <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Nombre del Deporte</Form.Label>
            <Form.Control 
                type="text"
                className={errores.name ? "is-invalid" : ""}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errores.name && <div className="invalid-feedback">{errores.name}</div>}
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Objetivo</Form.Label>
            <Form.Control 
                as="textarea"
                rows={3}
                className={errores.objective ? "is-invalid" : ""}
                value={form.objective}
                onChange={(e) => setForm({ ...form, objective: e.target.value })}
            />
            {errores.objective && <div className="invalid-feedback">{errores.objective}</div>}
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Duración (minutos)</Form.Label>
            <Form.Control 
                type="number"
                className={errores.duration ? "is-invalid" : ""}
                value={form.duration}
                onChange={(e) => setForm({ ...form, duration: e.target.value })}
            />
            {errores.duration && <div className="invalid-feedback">{errores.duration}</div>}
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
            <Button variant="success" type="submit">Guardar Deporte</Button>
        </Modal.Footer>
        </Form>
    </Modal>

    </div>
);
}

export default Deportes;