CREATE DATABASE inarawan;

-- INDEPENDENT TABLES
CREATE TABLE logs(
    log_id SERIAL PRIMARY KEY,
    date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    category VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    action VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
);
CREATE TABLE archives();

-- RELATION TABLE
CREATE TABLE branches(
    branch_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
);

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    category VARCHAR(50),
    cost DECIMAL(12, 2),
);

CREATE TABLE materials(
    material_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    cost DECIMAL(12, 2),
    stock DECIMAL(12, 2),
    branch_id INTEGER,
    FOREIGN KEY (branch_id) REFERENCES branches(branch_id)
);

CREATE TABLE product_materials(
    product_id INTEGER,
    material_id INTEGER,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
    FOREIGN KEY (material_id) REFERENCES materials(material_id)
);