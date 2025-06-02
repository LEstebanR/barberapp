# 💈 BarberApp – Gestión moderna de barberías

> Plataforma para crear perfiles públicos de barberías y administrar su presencia online.

---

## 🚀 Stack Tecnológico

Este proyecto utiliza una arquitectura moderna basada en tecnologías de frontend y backend unificadas en un entorno fullstack con JavaScript/TypeScript:

- **[Next.js](https://nextjs.org/)** – Framework React para SSR y API Routes
- **[Tailwind CSS](https://tailwindcss.com/)** – Utilidades CSS modernas
- **[shadcn/ui](https://ui.shadcn.com/)** – Componentes accesibles y bien diseñados
- **[Prisma](https://www.prisma.io/)** – ORM para base de datos relacional
- **[Bun](https://bun.sh/)** – Runtime y gestor de paquetes ultrarrápido

---

## ⚙️ Estructura del Repositorio

```
/
├── app/                # Rutas y vistas de Next.js (App Router)
├── components/         # Componentes UI reutilizables (ShadcnUI, personalizados)
├── lib/                # Utilidades (helpers, API clients, etc.)
├── prisma/             # Esquema y migraciones de base de datos
├── public/             # Archivos estáticos
├── styles/             # Estilos globales si aplica
├── .github/            # Plantillas de issues, acciones, workflows
├── README.md
```

---

## 🧬 GitFlow y Convenciones

Este proyecto sigue un flujo de desarrollo basado en ramas, enfocado en mantener un `develop` limpio y un `main` estable.

### 📌 Ramas principales

- `main`: rama estable, solo recibe merges desde `develop` cuando se lanza una versión.
- `develop`: rama de integración continua, recibe todos los PRs funcionales.

### 🌱 Ramas secundarias

Todas las ramas se crean desde `develop`, excepto `hotfix/*`.

| Tipo de rama  | Prefijo    | Ejemplo                           |
| ------------- | ---------- | --------------------------------- |
| Feature       | `feature/` | `feature/perfil-publico-barberia` |
| Bug fix       | `bugfix/`  | `bugfix/error-login-ios`          |
| Hotfix        | `hotfix/`  | `hotfix/fix-404-en-produccion`    |
| Documentación | `docs/`    | `docs/estructura-api`             |
| Configuración | `config/`  | `config/github-actions-ci`        |
| Releases      | `release/` | `release/v1.0.0`                  |

> Usa nombres en `kebab-case`, claros y descriptivos.

### 🧪 Pull Requests

- Crea un PR desde tu rama secundaria hacia `develop`.
- Usa el template de PR incluido.
- Menciona el issue correspondiente con `Closes #12` para cierre automático.
- Las ramas se eliminan automáticamente después del merge (excepto `develop` y `main`).

### 🛡️ Ramas protegidas

- `main` y `develop` son ramas protegidas.
- Solo se puede hacer merge vía PR y tras pasar las validaciones de CI.

---

## ⚙️ Scripts útiles con Bun

| Script                    | Descripción                                  |
| ------------------------- | -------------------------------------------- |
| `bun dev`                 | Inicia el entorno de desarrollo              |
| `bunx prisma migrate dev` | Aplica migraciones locales                   |
| `bunx prisma studio`      | Abre Prisma Studio para ver la base de datos |
| `bunx prettier --write .` | Formatea el código con Prettier              |
| `bunx eslint .`           | Lint del código                              |

---

## 🧹 Checklist al contribuir

- [ ] Seguir convención de nombre de rama (`feature/`, `bugfix/`, etc.)
- [ ] Incluir issue relacionado en el PR
- [ ] Usar el template de Pull Request
- [ ] Pasar el CI (lint, build, tests si aplica)
- [ ] No subir archivos `.env`, `.env.local` u otras credenciales
- [ ] Usar componentes de `shadcn/ui` cuando sea posible

---

## 📎 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Bun Docs](https://bun.sh/docs)

---

## 🧠 Futuro

Este README crecerá con instrucciones de despliegue, entorno productivo, documentación de la API y casos de uso más avanzados a medida que evolucione el producto.
