# 🚀 Full-Stack Docker Application

A simple full-stack application built with **React** and **Node.js (Express)**, fully containerized using **Docker** and **Docker Compose**. This project demonstrates how to develop and run a frontend and backend together in isolated containers with a single command.

## ✨ Features

* ⚛️ React frontend
* 🚀 Node.js & Express backend
* 🐳 Dockerized development environment
* 📦 One-command setup with Docker Compose
* 📁 Clean and organized project structure
* 🔄 Hot reloading for development

## 🛠️ Tech Stack

| Layer            | Technology              |
| ---------------- | ----------------------- |
| Frontend         | React.js                |
| Backend          | Node.js + Express       |
| Containerization | Docker & Docker Compose |

## 📂 Project Structure

```text
docker-fullstack-app/
├── client/              # React frontend
├── server/              # Node.js backend
├── docker-compose.yml   # Docker Compose configuration
├── README.md
└── .gitignore
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/TimothyOla/docker-fullstack-app.git
cd docker-fullstack-app
```

### 2. Start the Application

```bash
docker compose up --build
```

### 3. Access the Application

* **Frontend:** http://localhost:3000
* **Backend:** http://localhost:5000

## 🛑 Stop the Application

```bash
docker compose down
```

## 📜 License

This project is open source and available under the MIT License.
