# First Project

A React + TypeScript + Vite storefront application with dashboard functionality, product management, category management, authentication flow, and cart/checkout features.

## Overview

This project is a modern front-end application for a commerce-style system. It includes a customer-facing experience with product browsing, cart, checkout, and contact pages, as well as an admin dashboard for managing categories and products.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- TanStack React Form
- TanStack React Query
- Zustand
- Zod
- Tailwind CSS

## Features

- User login flow with protected routes
- Dashboard for admins
- Product listing and product details
- Category management
- Product creation, update, and deletion
- Cart and checkout flow
- Responsive layout and reusable UI components
- Form validation using Zod schemas
- State management with Zustand

## Project Structure

```text
first-project/
├── public/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── schemas/
│   ├── store/
│   ├── types/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── App.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── README.md
└── .gitignore
```

## Prerequisites

Before running the project, make sure you have:

- Node.js 18 or later
- npm

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd first-project
```

2. Install dependencies:

```bash
npm install
```

## Available Scripts

### Development

```bash
npm run dev
```

Runs the app in development mode with Vite hot reloading.

### Production Build

```bash
npm run build
```

Creates a production build in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

Serves the built app locally for preview.

### Linting

```bash
npm run lint
```

Runs ESLint checks against the project.

## Main App Areas

### Client/UI side
- Home and storefront pages
- Product details
- Cart and checkout
- About and contact pages

### Admin dashboard
- Dashboard overview
- Category management
- Product management
- Authentication-protected routes

## Forms and Validation

This project uses TanStack React Form with Zod validation schemas. The validation logic is stored in `src/schemas` and is connected to forms used in authentication and CRUD pages.

## State Management

State is managed through:

- Zustand stores in `src/store`
- React Query hooks in `src/hooks`
- Local component state for simple UI interactions

## Notes

- The app is structured for modular feature development.
- The routing setup is organized under `src/routes`.
- Shared UI is centralized in `src/components`.
