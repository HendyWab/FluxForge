# ChendyForge

Forge the future of developer collaboration.

Modern AI-powered issue tracking, realtime collaboration, and engineering workflow platform built for modern software teams.

![ChendyForge Board Preview](docs/screenshots/board-preview.png)

---

## What is ChendyForge?

ChendyForge is an AI-powered engineering collaboration platform that combines issue tracking, workflow automation, realtime collaboration, analytics, and developer productivity tooling into a unified workspace.

Designed as a flagship open-source project, ChendyForge showcases modern frontend engineering, scalable backend architecture, realtime systems, AI-assisted workflows, and cloud-native infrastructure.

Built by HendyWab.

---

# Features

## Workflow Management

* Kanban boards
* Sprint planning
* Backlog management
* Project milestones
* Issue prioritization
* Team collaboration

---

## Issue Tracking

* Create, update, and manage issues
* Labels and priorities
* Assignments
* Due dates
* Milestones
* Threaded discussions
* Markdown support

---

## Realtime Collaboration

* WebSocket-powered synchronization
* Live board updates
* Realtime notifications
* Team activity feeds
* Presence indicators
* Collaborative workflows

---

## AI-Assisted Engineering

* Issue summarization
* Duplicate issue detection
* Priority recommendations
* Sprint planning assistance
* Risk estimation
* Issue clustering

---

## Documentation & Knowledge Base

* Project wiki
* Architecture documentation
* API documentation
* Engineering guides
* Release notes
* Team knowledge sharing

---

## Analytics & Observability

* Sprint velocity
* Contributor analytics
* Project health metrics
* Release tracking
* Performance insights
* Workflow analytics

---

# Technology Stack

## Backend

* FastAPI
* PostgreSQL
* Redis
* SQLAlchemy
* Alembic
* Celery
* JWT Authentication
* WebSockets

---

## Frontend

* React
* TypeScript
* Vite
* TailwindCSS v4
* Zustand
* React Query
* Framer Motion
* DnD Kit

---

## Infrastructure

* Docker
* Docker Compose
* Nginx
* GitHub Actions
* Prometheus
* Grafana
* OpenTelemetry

---

# Architecture

The ChendyForge Platform follows a scalable monorepo architecture designed for modularity, maintainability, contributor friendliness, and enterprise-grade development workflows.

```txt
chendyforge/
│
├── apps/
│   ├── api/               # FastAPI backend
│   ├── web/               # React frontend
│   ├── realtime/          # WebSocket gateway
│   └── workers/           # Celery workers
│
├── packages/
│   ├── ui/                # Shared UI library
│   ├── types/             # Shared types
│   └── config/            # Shared configuration
│
├── infrastructure/
│   ├── docker/
│   ├── nginx/
│   └── monitoring/
│
├── docs/
│   ├── architecture/
│   ├── diagrams/
│   ├── roadmap/
│   └── screenshots/
│
└── .github/
```

---

# Development Status

## Current Milestone

### v0.2.0 — Workflow Engine

---

## Completed

* Monorepo architecture
* FastAPI backend foundation
* React + TypeScript frontend
* TailwindCSS v4 setup
* Dashboard shell
* Sidebar navigation
* Kanban board UI
* Dark SaaS design system
* Branding migration to ChendyForge

---

## In Progress

* Routing system
* Drag & drop board engine
* Zustand state management
* Backend API integration
* Realtime synchronization

---

# Screenshots

## Sprint Board

![Sprint Board](docs/screenshots/board-preview.png)

---

## Dashboard

![Dashboard](docs/screenshots/dashboard-preview.png)

---

# Roadmap

## v0.1.0 Foundation

* Repository setup
* Monorepo architecture
* FastAPI initialization
* React foundation
* Dashboard shell
* Kanban UI

Status: Completed

---

## v0.2.0 Workflow Engine

* React Router
* Active navigation
* Drag & drop board
* State management
* Issue CRUD foundation
* API integration

Status: In Progress

---

## v0.3.0 Realtime Collaboration

* WebSocket synchronization
* Notifications
* Live board updates
* Activity feeds
* Team presence system

Status: Planned

---

## v0.4.0 AI Intelligence

* AI issue summaries
* Duplicate detection
* Priority recommendations
* Sprint planning assistance
* Workflow intelligence

Status: Planned

---

## v1.0.0 Public Beta

* Public deployment
* CI/CD pipelines
* Monitoring stack
* Contributor onboarding
* Production documentation

Status: Future

---

# Quick Start

## Clone Repository

```bash
git clone https://github.com/HendyWab/ChendyForge.git
cd ChendyForge
```

---

## Backend

```bash
cd apps/api

python -m venv .venv

# Windows
.venv\Scripts\activate

# Linux/macOS
source .venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend:

```txt
http://127.0.0.1:8000
```

Swagger UI:

```txt
http://127.0.0.1:8000/docs
```

---

## Frontend

```bash
cd apps/web

npm install

npm run dev
```

Frontend:

```txt
http://localhost:5173
```

---

# Git Workflow

## Branch Strategy

### Main

Production-ready stable branch.

### Develop

Primary integration branch.

### Feature Branches

```txt
feature/auth-system
feature/drag-drop-board
feature/websocket-sync
feature/issue-crud
feature/analytics-dashboard
```

---

## Commit Convention

```txt
feat: new feature
fix: bug fix
refactor: code restructuring
docs: documentation
style: formatting
chore: tooling/configuration
test: tests
```

Example:

```bash
git commit -m "feat(board): implement drag and drop engine"
```

---

## Merge Strategy

* Pull Requests required
* Squash Merge only
* Protected main branch
* Linear history

---

# Project Vision

ChendyForge aims to become:

* a flagship open-source engineering platform
* an AI-native developer collaboration workspace
* a realtime project management ecosystem
* a modern alternative to traditional workflow tools
* a showcase of full-stack engineering excellence

The platform is intentionally built to demonstrate:

* Frontend Engineering
* Backend Architecture
* Realtime Systems
* AI Integration
* DevOps Maturity
* Cloud-Native Infrastructure
* Scalable Monorepo Organization
* Open-Source Leadership

---

# Contributing

Contributions, feature requests, architecture discussions, and improvements are welcome.

Future contributor resources include:

* CONTRIBUTING.md
* Architecture documentation
* Development guides
* Issue templates
* Pull request templates
* Contributor onboarding

---

# Author

## HendyWab

Founder and creator of ChendyForge.

Building modern engineering systems, realtime platforms, AI-native developer tooling, and open-source software.

---

# License

MIT License
