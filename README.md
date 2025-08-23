# 📌 OrganizeIt

A lightweight **task management app** 🗂️ that helps keep track of tasks in a *simple* and *organized* way.  
It lets you manage tasks with basic features like creating, editing, and deleting, making it a handy tool for everyday use.


---

## 🚀 Table of Contents
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Prerequisites](#-prerequisites)
- [Environment Variables](#-environment-variables)
- [Installation](#-installation)
- [Tech Stack](#-tech-stack)
- [License](#-license)

---

## ✨ Features
- ✅ **Authorization** – access your tasks securely from any device, anywhere  
- ✅ **Task Management** – add, edit, and delete tasks easily  
- ✅ **Flexible Search & Filters** – find tasks by **date**, **priority**, **category**, and more  
- ✅ **Centralized Organization** – keep all your to-dos neatly in one place

---

## 📸 Screenshots
<p>
  <img width="300" alt="auth" src="https://github.com/user-attachments/assets/293ed7dd-16be-46fd-b40a-b8f065e36ce1" />
  <img width="300" alt="new task" src="https://github.com/user-attachments/assets/aba8e2bb-99e8-4efb-9136-4ecfd360abe3" />
  <img width="300" alt="my tasks" src="https://github.com/user-attachments/assets/6df380de-65a3-4879-af61-d309304dd956" />
</p>

---

## 🔑 Prerequisites
Before running this project, make sure you have installed:

- [Node.js](https://nodejs.org/) (v18 or later)  
- [Yarn](https://yarnpkg.com/) or npm  
- [PostgreSQL](https://www.postgresql.org/) (v14 or later)  

You also need to create a PostgreSQL database manually:

```sql
CREATE DATABASE OrganizeIt;
```

---

## 🔧 Environment Variables

You need to create `.env` files in both the **server** and **client** folders.  

### Server (`server/.env`)
```env
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/OrganizeIt?schema=public"

JWT_SECRET="your_secret_key"
JWT_EXP="1d"

DOMAIN=localhost
ORIGIN=http://localhost:3000

PORT=3001
NODE_ENV=development
```

### Client (`client/.env`)
```env
NEXT_PUBLIC_SERVER_URL=http://localhost:3001/api
NEXT_PUBLIC_DOMAIN=localhost
```

---

## ⚙️ Installation

### 1. Clone the repository:
```bash
git clone https://github.com/cxvxcxv/OrganizeIt.git
cd OrganizeIt
```

### 2. Setup environment variables (see [Environment Variables](#-environment-variables)).

### 3. Install and start the backend (server):
```bash
cd server
yarn install   # or: npm install
yarn dev       # or: npm run dev
```

### 4. Install and start the frontend (client):
```bash
cd ../client
yarn install   # or: npm install
yarn dev       # or: npm run dev
```

### 5. Open the app in your browser:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🛠 Tech Stack

### Frontend (Client)
- [**Next.js (React 18)**](https://nextjs.org/) – UI framework  
- [**Tailwind CSS**](https://tailwindcss.com/) – styling  
- [**React Hook Form**](https://react-hook-form.com/) & [**TanStack React Query**](https://tanstack.com/query/latest) – forms and data fetching  
- [**TypeScript**](https://www.typescriptlang.org/) – language  

### Backend (Server)
- [**NestJS**](https://nestjs.com/) – backend framework  
- [**Prisma ORM**](https://www.prisma.io/) + [**PostgreSQL**](https://www.postgresql.org/) – database layer  
- [**Passport.js (JWT)**](http://www.passportjs.org/) + [**Argon2**](https://github.com/ranisalt/node-argon2) – authentication & security  
- [**TypeScript**](https://www.typescriptlang.org/) & [**Jest**](https://jestjs.io/) – language and testing

---

## 📄 License
This project does **not** have an open-source license.  
It is intended only for **educational and personal purposes**.
