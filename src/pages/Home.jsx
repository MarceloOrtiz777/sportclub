import { Link } from "react-router-dom";

function Home() {
return (
    <div className="min-vh-100 d-flex flex-column bg-light">
    
      {/* Navbar de la Landing */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
            <span style={{ color: "#7C2D12" }}>🏋️‍♂️</span> SportClub
        </Link>
        <div>
            <Link to="/login" className="btn btn-outline-light me-2 btn-sm px-3">
            Iniciar Sesión
            </Link>
            <Link to="/registro" className="btn btn-danger btn-sm px-3" style={{ backgroundColor: "#7C2D12", border: "none" }}>
            Registrarse
            </Link>
        </div>
        </div>
    </nav>

      {/* Sección Hero Principal */}
    <div className="flex-grow-1 d-flex align-items-center justify-content-center text-center px-3 my-5">
        <div className="card shadow-lg p-5 border-0 bg-white" style={{ maxWidth: "700px", borderRadius: "16px" }}>
        <h1 className="display-4 fw-extrabold text-dark mb-3" style={{ tracking: "-0.05em" }}>
            Bienvenido a <span style={{ color: "#7C2D12", fontWeight: "800" }}>SportClub</span>
        </h1>
        <p className="lead text-muted mb-4">
            La plataforma integral definitiva para la gestión de entrenamientos, 
            control de usuarios y administración de deportes del club.
        </p>
        
        <div className="d-sm-flex justify-content-center gap-3">
            <Link to="/login" className="btn btn-primary btn-lg px-4 mb-2 mb-sm-0 shadow-sm" style={{ backgroundColor: "#1A56A0", border: "none" }}>
            Acceder al Panel
            </Link>
            <Link to="/registro" className="btn btn-outline-secondary btn-lg px-4 shadow-sm">
            Crear una Cuenta
            </Link>
        </div>
        </div>
    </div>

      {/* Footer Simple */}
    <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
        <small className="text-muted">© 2026 SportClub — Sistema de Gestión SPA. Todos los derechos reservados.</small>
        </div>
    </footer>

    </div>
);
}

export default Home;