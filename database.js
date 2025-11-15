/**
 * SQLite Database Module
 * Handles all database operations for employee management
 */

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

class Database {
    constructor() {
        this.dbPath = path.join(__dirname, 'employees.db');
        this.db = null;
    }

    /**
     * Initialize database connection and create tables
     */
    initialize() {
        return new Promise((resolve, reject) => {
            this.db = new sqlite3.Database(this.dbPath, (err) => {
                if (err) {
                    console.error('Error opening database:', err);
                    reject(err);
                } else {
                    console.log('✓ Database connected');
                    this.createTables()
                        .then(() => {
                            console.log('✓ Database tables created');
                            resolve();
                        })
                        .catch(reject);
                }
            });
        });
    }

    /**
     * Create employees table if it doesn't exist
     */
    createTables() {
        return new Promise((resolve, reject) => {
            this.db.run(`
                CREATE TABLE IF NOT EXISTS employees (
                    id TEXT PRIMARY KEY,
                    name TEXT NOT NULL,
                    department TEXT NOT NULL,
                    email TEXT NOT NULL,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )
            `, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Get all employees
     */
    getAllEmployees(callback) {
        this.db.all(
            'SELECT * FROM employees ORDER BY created_at DESC',
            [],
            (err, rows) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, rows || []);
                }
            }
        );
    }

    /**
     * Get employee by ID
     */
    getEmployeeById(employeeId, callback) {
        this.db.get(
            'SELECT * FROM employees WHERE id = ?',
            [employeeId],
            (err, row) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, row);
                }
            }
        );
    }

    /**
     * Add new employee
     */
    addEmployee(employee, callback) {
        const { id, name, department, email } = employee;

        // Check if employee ID already exists
        this.db.get('SELECT id FROM employees WHERE id = ?', [id], (err, row) => {
            if (err) {
                callback(err, null);
                return;
            }

            if (row) {
                callback(new Error('Employee ID already exists'), null);
                return;
            }

            this.db.run(
                'INSERT INTO employees (id, name, department, email) VALUES (?, ?, ?, ?)',
                [id, name, department, email],
                function(err) {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, {
                            id,
                            name,
                            department,
                            email,
                            created_at: new Date().toISOString()
                        });
                    }
                }
            );
        });
    }

    /**
     * Update employee
     */
    updateEmployee(employeeId, updates, callback) {
        const { name, department, email } = updates;

        this.db.run(
            'UPDATE employees SET name = ?, department = ?, email = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
            [name, department, email, employeeId],
            function(err) {
                if (err) {
                    callback(err, null);
                } else if (this.changes === 0) {
                    callback(new Error('Employee not found'), null);
                } else {
                    callback(null, {
                        id: employeeId,
                        name,
                        department,
                        email,
                        updated_at: new Date().toISOString()
                    });
                }
            }
        );
    }

    /**
     * Delete employee
     */
    deleteEmployee(employeeId, callback) {
        this.db.run(
            'DELETE FROM employees WHERE id = ?',
            [employeeId],
            function(err) {
                if (err) {
                    callback(err, null);
                } else if (this.changes === 0) {
                    callback(new Error('Employee not found'), null);
                } else {
                    callback(null, { success: true });
                }
            }
        );
    }

    /**
     * Search employees by name or department
     */
    searchEmployees(query, callback) {
        const searchQuery = `%${query}%`;
        this.db.all(
            'SELECT * FROM employees WHERE name LIKE ? OR department LIKE ? ORDER BY created_at DESC',
            [searchQuery, searchQuery],
            (err, rows) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, rows || []);
                }
            }
        );
    }

    /**
     * Get total employee count
     */
    getEmployeeCount(callback) {
        this.db.get(
            'SELECT COUNT(*) as count FROM employees',
            [],
            (err, row) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, row.count);
                }
            }
        );
    }

    /**
     * Clear all employees (for testing/resetting)
     */
    clearAllEmployees(callback) {
        this.db.run('DELETE FROM employees', [], (err) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, { success: true });
            }
        });
    }

    /**
     * Close database connection
     */
    close(callback) {
        if (this.db) {
            this.db.close(callback);
        } else {
            callback(null);
        }
    }
}

module.exports = Database;
