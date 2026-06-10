# 🚀 InfraPilot
**Production Grade Cloud Deployment Platform**

InfraPilot is a full-stack cloud deployment platform that enables users to deploy, monitor, and manage applications through an intuitive web interface.

The project simulates the core workflow of modern cloud deployment platforms such as Vercel, Render, and Railway while demonstrating real-world DevOps practices including containerization, CI/CD, orchestration, monitoring, and centralized logging.

---

## 📌 Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Session Management

### Deployment Management

* Upload Application (ZIP)
* Deploy via GitHub Repository URL
* Deployment Status Tracking
* Deployment History
* Deployment Details

### Dashboard

* Deployment Overview
* Running Services
* Success Rate Metrics
* System Health Monitoring
* Activity Feed
* Recent Logs

### Monitoring

* CPU Usage
* Memory Usage
* Network Usage
* Response Time
* Uptime Monitoring
* Deployment Metrics

### Logging

* Deployment Logs
* Error Logs
* Live Log Streaming
* Search & Filter Logs
* Download Logs

### User Experience

* Responsive Design
* Dark Mode
* Real-Time Updates
* Interactive Charts
* Notification Center
* Command Palette

---

# 🏗 Architecture

```text
User
 │
 ▼
React Frontend
 │
 ▼
Node.js API
 │
 ▼
MongoDB
 │
 ▼
Jenkins
 │
 ▼
Docker
 │
 ▼
Kubernetes
 │
 ▼
Prometheus + Grafana
 │
 ▼
ELK Stack
```

---

# 🖥 Frontend Stack

| Technology    | Purpose            |
| ------------- | ------------------ |
| React         | UI Development     |
| TypeScript    | Type Safety        |
| Vite          | Build Tool         |
| Tailwind CSS  | Styling            |
| Zustand       | State Management   |
| React Router  | Routing            |
| Framer Motion | Animations         |
| Recharts      | Data Visualization |
| Lucide React  | Icons              |

---

# ⚙ Backend Stack

| Technology | Purpose        |
| ---------- | -------------- |
| Node.js    | Runtime        |
| Express.js | API Layer      |
| JWT        | Authentication |
| MongoDB    | Database       |
| Mongoose   | ODM            |

---

# 🐳 DevOps Stack

| Technology | Purpose          |
| ---------- | ---------------- |
| Docker     | Containerization |
| Jenkins    | CI/CD            |
| Kubernetes | Orchestration    |
| Minikube   | Local Cluster    |
| Prometheus | Metrics          |
| Grafana    | Visualization    |
| ELK Stack  | Logging          |

---

# 📂 Project Structure

```text
InfraPilot/

frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── charts/
│   ├── hooks/
│   ├── layout/
│   ├── pages/
│   ├── router/
│   ├── services/
│   ├── store/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx

backend/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/

database/

docker/

jenkins/

k8s/

monitoring/

logging/

docs/
```

---

# 🚀 Frontend Setup

## Clone Repository

```bash
git clone https://github.com/yourusername/infrapilot.git

cd infrapilot/frontend
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Application:

```text
http://localhost:5173
```

---

# 🔧 Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend API:

```text
http://localhost:5000
```

---

# 📊 Dashboard Modules

### Dashboard

* Metrics Cards
* Deployment Trends
* Activity Feed
* Resource Monitoring

### Deployments

* Deployment Table
* Status Tracking
* Deployment Details

### Monitoring

* CPU Metrics
* Memory Metrics
* Network Metrics
* Response Metrics

### Logs

* Terminal Style Logs
* Search & Filtering
* Live Updates

### Settings

* Profile Settings
* Notification Settings
* Security Settings
* API Key Management

---

# 🔄 Deployment Pipeline

```text
Source Code
      │
      ▼
Build
      │
      ▼
Docker Image
      │
      ▼
Push Registry
      │
      ▼
Kubernetes Deploy
      │
      ▼
Health Check
      │
      ▼
Application Running
```

---

# 📈 Monitoring Flow

```text
Application
      │
      ▼
Prometheus
      │
      ▼
Grafana Dashboard
```

---

# 📝 Logging Flow

```text
Application
      │
      ▼
Logstash
      │
      ▼
Elasticsearch
      │
      ▼
Kibana
```

---

# 🔐 Security Features

* JWT Authentication
* Protected Routes
* Password Hashing
* Secure API Access
* Role-Based Access (Future Enhancement)

---

# 🎯 Learning Objectives

This project demonstrates:

* Frontend Architecture
* Backend API Design
* Authentication & Authorization
* CI/CD Pipelines
* Docker Containerization
* Kubernetes Deployment
* Monitoring & Observability
* Centralized Logging
* Production-Style Project Structure

---

# 📸 Screenshots

Add screenshots after implementation:

```text
docs/screenshots/

dashboard.png
deployments.png
monitoring.png
logs.png
settings.png
```

---

# 🛣 Roadmap

### Phase 1

* Frontend Development

### Phase 2

* Backend Development

### Phase 3

* Docker Integration

### Phase 4

* Jenkins CI/CD

### Phase 5

* Kubernetes Deployment

### Phase 6

* Monitoring & Logging

---

# 👨‍💻 Author

Aryan Sarvaiya.


---

# ⭐ Project Status

🚧 Under Active Development
