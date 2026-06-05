CREATE TABLE budgets (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(120) NOT NULL,
    service_name VARCHAR(120) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) DEFAULT 0,
    status VARCHAR(40) NOT NULL DEFAULT 'Rascunho',
    deadline DATE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);