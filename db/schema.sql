-- User Roles Enum
CREATE TYPE user_role AS ENUM ('admin', 'staff', 'client');

-- Appointment Status Enum
CREATE TYPE appointment_status AS ENUM ('Pending', 'Confirmed', 'Cancelled', 'Completed');

-- Room Status Enum
CREATE TYPE room_status AS ENUM ('Available', 'Occupied', 'Cleaning');

-- Transaction Type Enum
CREATE TYPE transaction_type AS ENUM ('Income', 'Expense');

-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role user_role NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Profiles Table (for clients and staff personal info)
CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    user_id INT UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone_number VARCHAR(50),
    avatar_url VARCHAR(255),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Clients Table (links a profile to client-specific data)
CREATE TABLE clients (
    profile_id INT PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
    last_visit DATE,
    rfid_bracelet_id VARCHAR(255) UNIQUE
);

-- Staff Table (links a profile to staff-specific data)
CREATE TABLE staff (
    profile_id INT PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
    role_title VARCHAR(100) -- e.g., 'Pilates Coach', 'Therapist'
);

-- Service Categories Table
CREATE TABLE service_categories (
    id SERIAL PRIMARY KEY,
    name_en VARCHAR(255) NOT NULL,
    name_id VARCHAR(255) NOT NULL,
    description_en TEXT,
    description_id TEXT,
    emoji VARCHAR(10)
);

-- Services Table
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    category_id INT REFERENCES service_categories(id) ON DELETE SET NULL,
    title_en VARCHAR(255) NOT NULL,
    title_id VARCHAR(255) NOT NULL,
    description_en TEXT,
    description_id TEXT,
    price_usd NUMERIC(10, 2),
    price_idr INT,
    duration_minutes INT,
    image_url VARCHAR(255),
    image_hint VARCHAR(100)
);

-- Pilates Categories Table
CREATE TABLE pilates_categories (
    id SERIAL PRIMARY KEY,
    name_en VARCHAR(255) NOT NULL,
    name_id VARCHAR(255) NOT NULL,
    description_en TEXT,
    description_id TEXT,
    emoji VARCHAR(10)
);

-- Pilates Classes Table
CREATE TABLE pilates_classes (
    id SERIAL PRIMARY KEY,
    category_id INT REFERENCES pilates_categories(id) ON DELETE SET NULL,
    title_en VARCHAR(255) NOT NULL,
    title_id VARCHAR(255) NOT NULL,
    description_en TEXT,
    description_id TEXT
);

-- Appointments Table
CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    client_profile_id INT NOT NULL REFERENCES clients(profile_id) ON DELETE CASCADE,
    staff_profile_id INT REFERENCES staff(profile_id) ON DELETE SET NULL,
    service_id INT REFERENCES services(id) ON DELETE SET NULL,
    pilates_class_id INT REFERENCES pilates_classes(id) ON DELETE SET NULL,
    appointment_time TIMESTAMPTZ NOT NULL,
    status appointment_status NOT NULL DEFAULT 'Pending',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- Rooms Table
CREATE TABLE rooms (
    id SERIAL PRIMARY KEY,
    name_en VARCHAR(255) NOT NULL,
    name_id VARCHAR(255) NOT NULL,
    description_en TEXT,
    description_id TEXT,
    status room_status NOT NULL DEFAULT 'Available',
    image_url VARCHAR(255),
    image_hint VARCHAR(100)
);

-- Inventory Table
CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    stock_level INT NOT NULL DEFAULT 0,
    supplier VARCHAR(255)
);

-- Financial Transactions Table
CREATE TABLE financial_transactions (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    amount NUMERIC(12, 2) NOT NULL,
    currency VARCHAR(3) NOT NULL, -- e.g., 'IDR', 'USD'
    type transaction_type NOT NULL,
    transaction_date DATE NOT NULL DEFAULT CURRENT_DATE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Marketplace Integrations Table
CREATE TABLE marketplace_integrations (
    id VARCHAR(50) PRIMARY KEY, -- e.g., 'traveloka', 'klook'
    name VARCHAR(100) NOT NULL,
    logo_url VARCHAR(255),
    type VARCHAR(100),
    url VARCHAR(255),
    status VARCHAR(50) NOT NULL DEFAULT 'Not Connected', -- 'Connected', 'Not Connected'
    description_en TEXT,
    description_id TEXT
);
