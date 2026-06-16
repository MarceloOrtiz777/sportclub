import { useState } from "react";
import { register } from "../services/authService";

function Register() {
const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [password2, setPassword2] = useState("");
const [errores, setErrores] = useState({});
const [success, setSuccess] = useState(false);

function validar() {
    const nuevosErrores = {};

    if (!nombre) nuevosErrores.nombre = "El nombre es obligatorio";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    nuevosErrores.email = "Ingresa un correo válido";
    }
    if (password.length < 8) {
    nuevosErrores.password = "La contraseña debe tener al menos 8 caracteres";
    } else if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
    nuevosErrores.password = "La contraseña debe tener letras y números";
    }
    if (password !== password2) {
    nuevosErrores.password2 = "Las contraseñas no coinciden";
    }

    return nuevosErrores;
}

async function handleRegister() {
    const erroresEncontrados = validar();
    if (Object.keys(erroresEncontrados).length > 0) {
    setErrores(erroresEncontrados);
    return;
    }

    setErrores({});

    try {
    const data = await register(nombre, email, password);
    if (data.ok) {
        setSuccess(true);
        setTimeout(() => { window.location.href = "/login"; }, 2000);
    } else {
        setErrores({ general: data.message || "Error al registrar usuario" });
    }
    } catch (e) {
    setErrores({ general: "Error al conectar con el servidor" });
    }
}

return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="card p-4 shadow" style={{ width: "440px" }}>
        <h2 className="text-center mb-1 fw-bold">Crear cuenta</h2>
        <p className="text-center text-muted mb-4">Completa tus datos para registrarte</p>

        <div className="mb-3">
        <label className="form-label fw-semibold">Nombre completo</label>
        <input
            type="text"
            className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
            placeholder="Tu nombre completo"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
        />
        {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
        </div>

        <div className="mb-3">
        <label className="form-label fw-semibold">Correo electrónico</label>
        <input
            type="email"
            className={`form-control ${errores.email ? "is-invalid" : ""}`}
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        {errores.email && <div className="invalid-feedback">{errores.email}</div>}
        </div>

        <div className="mb-3">
        <label className="form-label fw-semibold">Contraseña</label>
        <input
            type="password"
            className={`form-control ${errores.password ? "is-invalid" : ""}`}
            placeholder="Mínimo 8 caracteres"
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        {errores.password && <div className="invalid-feedback">{errores.password}</div>}
        </div>

        <div className="mb-3">
        <label className="form-label fw-semibold">Confirmar contraseña</label>
        <input
            type="password"
            className={`form-control ${errores.password2 ? "is-invalid" : ""}`}
            placeholder="Repite tu contraseña"
            value={password2}
            onChange={e => setPassword2(e.target.value)}
        />
        {errores.password2 && <div className="invalid-feedback">{errores.password2}</div>}
        </div>

        {errores.general && (
        <p className="text-danger text-center fw-semibold">{errores.general}</p>
        )}

        {success && (
        <p className="text-success text-center fw-semibold">✅ Cuenta creada. Redirigiendo...</p>
        )}

        <button className="btn btn-warning w-100 fw-bold mb-3" onClick={handleRegister}>
        Crear mi cuenta
        </button>

        <div className="text-center">
        <a href="/login" className="text-muted small">¿Ya tienes cuenta? <span className="text-dark fw-bold">Inicia sesión</span></a>
        </div>
    </div>
    </div>
);
}

export default Register;