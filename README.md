# 🌐 API Sistema de Ventas de Hosting

API RESTful desarrollada con **NestJS** y **TypeScript** para la gestión de ventas de servicios de hosting.

## 📋 Descripción

Este proyecto es el backend de un sistema de ventas de hosting que permite gestionar:
- 👥 **Usuarios** - Registro y autenticación de clientes
- 📦 **Planes** - Gestión de planes de hosting disponibles
- 🛒 **Ventas** - Procesamiento de órdenes de compra
- 💳 **Pagos** - Registro y seguimiento de pagos

## 🛠️ Tecnologías

- **Node.js** v18+
- **NestJS** v11
- **TypeScript**
- **PostgreSQL** (Supabase)
- **TypeORM**

## 📁 Estructura del Proyecto

```
src/
├── common/           # Utilidades compartidas
├── config/           # Configuraciones (DB, JWT, Supabase)
├── modules/          # Módulos de la aplicación
│   ├── auth/         # Autenticación
│   ├── users/        # Gestión de usuarios
│   ├── plans/        # Planes de hosting
│   ├── orders/       # Ventas/Órdenes
│   └── payments/     # Pagos
└── main.ts           # Punto de entrada
```

## 🚀 Instalación

### Prerrequisitos
- Node.js v18 o superior
- npm o yarn
- Cuenta en Supabase (para base de datos PostgreSQL)

### Pasos

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd api-hosting
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```
Editar el archivo `.env` con tus credenciales de Supabase.

4. **Ejecutar en modo desarrollo**
```bash
npm run start:dev
```

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run start` | Iniciar en modo producción |
| `npm run start:dev` | Iniciar en modo desarrollo (watch) |
| `npm run start:prod` | Iniciar build de producción |
| `npm run build` | Compilar el proyecto |
| `npm run test` | Ejecutar tests unitarios |
| `npm run test:e2e` | Ejecutar tests end-to-end |
| `npm run lint` | Ejecutar linter |

## ⚙️ Variables de Entorno

| Variable | Descripción |
|----------|-------------|
| `PORT` | Puerto del servidor (default: 3000) |
| `NODE_ENV` | Entorno (development/production) |
| `DB_HOST` | Host de la base de datos |
| `DB_PORT` | Puerto de la base de datos |
| `DB_USERNAME` | Usuario de la base de datos |
| `DB_PASSWORD` | Contraseña de la base de datos |
| `DB_DATABASE` | Nombre de la base de datos |
| `SUPABASE_URL` | URL del proyecto Supabase |
| `SUPABASE_ANON_KEY` | Clave anónima de Supabase |
| `JWT_SECRET` | Secreto para tokens JWT |
| `JWT_EXPIRES_IN` | Tiempo de expiración del JWT |

## 📊 Base de Datos

El sistema utiliza las siguientes tablas:

- **usuarios** - Información de clientes
- **planes** - Planes de hosting disponibles
- **ventas** - Registro de ventas
- **pagos** - Registro de pagos

## 👨‍💻 Desarrollo

Este proyecto fue desarrollado como parte del curso de **Ingeniería de Software I**.

## 📄 Licencia

Este proyecto es de uso académico.
