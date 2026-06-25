# SportClub – Sistema Web de Gestión

## Nombre del proyecto
SportClub – Sistema de gestión de usuarios y reservas para club deportivo.

## Integrantes
- Marcelo Ortiz

## Tecnologías utilizadas
- React + Vite
- React Router DOM
- Bootstrap 5
- JavaScript (ES6+)
- Node.js (backend)
- Express
- JSON como base de datos

## Cómo instalar dependencias

### Frontend
```bash
cd sportclub-react
npm install
```

### Backend
```bash
cd FrontEnd-Backend-ClubDeportivo-main
npm install
```

## Cómo ejecutar el frontend
```bash
cd sportclub-react
npm run dev
```
Luego abre http://localhost:5173/login en el navegador.

## Cómo ejecutar el backend
```bash
cd FrontEnd-Backend-ClubDeportivo-main
npm run dev
```
El backend corre en http://localhost:3000

## Credenciales de prueba
- **Admin:** admin1@demo.cl / 12345678
- **Coach:** coach1@demo.cl / 12345678
- **Usuario:** user1@demo.cl / 12345678

## Funcionalidades implementadas
- Login con autenticación JWT
- Registro de usuarios
- Redirección según rol (user, coach, admin)
- Dashboard por rol con layouts diferenciados
- CRUD completo de usuarios (solo admin)
- Rutas protegidas por rol