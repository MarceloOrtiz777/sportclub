import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/authService";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const navigate = useNavigate();

async function handleLogin() {
    setError("");
    try {
    const data = await login(email, password);
    if (data.ok) {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        const role = data.data.user.role;
        if (role === "user")  navigate("/user/dashboard");
        if (role === "coach") navigate("/coach/dashboard");
        if (role === "admin") navigate("/admin/dashboard");
    } else {
        setError(data.message || "Credenciales incorrectas");
    }
    } catch (e) {
    setError("Error al conectar con el servidor");
    }
}

return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-1 fw-bold">Iniciar sesión</h2>
        <p className="text-center text-muted mb-4">Ingresa tus datos para continuar</p>

        <div className="mb-3">
        <label className="form-label fw-semibold">Correo electrónico</label>
        <input
            type="email"
            className="form-control"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        </div>

        <div className="mb-3">
        <label className="form-label fw-semibold">Contraseña</label>
        <input
            type="password"
            className="form-control"
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        </div>

        {error && (
        <p className="text-danger text-center fw-semibold">{error}</p>
        )}

        <button className="btn btn-warning w-100 fw-bold mb-3" onClick={handleLogin}>
        Ingresar
        </button>

        <div className="text-center">
        <Link to="/registro" className="text-muted small">¿No tienes cuenta? <span className="text-dark fw-bold">Regístrate</span></Link>
        </div>
    </div>
    </div>
);
}

export default Login;