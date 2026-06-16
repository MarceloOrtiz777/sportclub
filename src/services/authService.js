const API = "http://localhost:3000";

export async function login(email, password) {
const response = await fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
});
return await response.json();
}

export async function register(nombre, email, password) {
const response = await fetch(`${API}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    full_name: nombre,
    email: email,
    password: password,
    role: "user",
    must_change_password: false,
    metadata: { sports: [] }
    })
});
return await response.json();
}