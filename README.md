# Serenity Spa - Wellness and Pilates Management System

Serenity Spa is a full-stack web application designed to manage the operations of a modern spa and wellness center. It features a beautiful, public-facing website for clients and a powerful, role-based dashboard for administrators and staff to manage every aspect of the business.

This application is built with a modern tech stack, ensuring a responsive, fast, and scalable user experience.

![Serenity Spa Dashboard](https://placehold.co/1200x600)
*<p align="center">A placeholder image of the dashboard interface.</p>*

## ✨ Key Features

The application is divided into two main parts: the public website and the admin dashboard.

### 🌐 Public Website (Client-Facing)

- **Homepage:** A beautiful landing page to welcome visitors and showcase featured services.
- **Service Catalog:** A detailed view of all spa services offered, with descriptions and pricing.
- **Class Schedule:** A full listing of all Pilates classes available.
- **Online Booking:** A streamlined process for clients to book appointments (functionality to be fully implemented).
- **Multi-language Support:** Fully localized content in both **English** and **Bahasa Indonesia**.

### 🔒 Admin Dashboard (Backend)

- **Role-Based Access Control:**
    - **Admin:** Full access to all management features, including financials and staff management.
    - **Staff:** Access to operational features like appointments and client management.
- **Client Management:** View, add, and manage client data, including contact information and RFID bracelet assignments.
- **Financial Reporting:** A comprehensive overview of revenue, expenses, and profit with interactive charts and a list of recent transactions.
- **Room Management:** Manage the status and availability of treatment rooms (e.g., Single Suite, Couple Suite).
- **Service & Class Management:** Internal views for managing service and class offerings.
- **Appointment Management:** A central hub to view and manage all client appointments.
- **Inventory & Staff Management:** Tools to track product inventory and manage staff profiles.
- **Marketplace Integration:** A dedicated page to manage integrations with popular travel and wellness platforms like Traveloka and ClassPass.
- **Multi-language & Currency:** The dashboard supports both English (USD) and Bahasa Indonesia (IDR).

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **Generative AI:** [Genkit by Firebase](https://firebase.google.com/docs/genkit) for potential AI-powered features.
- **Icons:** [Lucide React](https://lucide.dev/)

## 🛠️ Getting Started

Follow these instructions to get the project running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later recommended)
- [pnpm](https://pnpm.io/), `npm`, or `yarn` for package management
- A running [PostgreSQL](https://www.postgresql.org/download/) instance

### 1. Installation

Clone the repository and install the dependencies:

```bash
# Using pnpm
pnpm install

# Using npm
npm install

# Using yarn
yarn install
```

### 2. Environment Variables

Create a `.env` file in the root of the project and populate it with your database credentials. A `db/schema.sql` file is provided to set up the necessary tables.

```env
# PostgreSQL Database Connection
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password_here
DB_DATABASE=spabaru
```

### 3. Database Setup

Connect to your PostgreSQL instance and run the `db/schema.sql` script to create the required tables for the application. You can use a tool like `psql` or any GUI client (e.g., DBeaver, Postico).

Example using `psql`:

```bash
psql -U your_username -d your_database -a -f db/schema.sql
```

### 4. Running the Application

Start the development server:

```bash
pnpm dev
```

The application will be available at [http://localhost:9002](http://localhost:9002).

## 📂 Folder Structure

A brief overview of the key directories in the project:

```
/
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── (public)/       # Route group for public-facing pages
│   │   ├── dashboard/      # Route group for admin dashboard pages
│   │   ├── api/            # API routes
│   │   └── layout.tsx      # Root layout
│   ├── ai/                 # Genkit AI flows and configuration
│   ├── components/         # Reusable UI components (ShadCN, custom)
│   ├── context/            # React context providers (e.g., Settings)
│   ├── db/                 # Database schema and migration files
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions, data, and database connection
│   └── ...
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind CSS configuration
```
