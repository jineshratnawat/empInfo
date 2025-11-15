/**
 * Employee Management System - Backend Server
 * Handles all database operations and API endpoints
 */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const Database = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;
const db = new Database();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Initialize database
db.initialize();

// ============== API Endpoints ==============

/**
 * GET /api/employees
 * Retrieve all employees
 */
app.get('/api/employees', (req, res) => {
    db.getAllEmployees((err, employees) => {
        if (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
        res.json({ success: true, data: employees });
    });
});

/**
 * GET /api/employees/:id
 * Retrieve a specific employee by ID
 */
app.get('/api/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    db.getEmployeeById(employeeId, (err, employee) => {
        if (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
        if (!employee) {
            return res.status(404).json({ success: false, message: 'Employee not found' });
        }
        res.json({ success: true, data: employee });
    });
});

/**
 * POST /api/employees
 * Add a new employee
 */
app.post('/api/employees', (req, res) => {
    const { name, id, department, email } = req.body;

    // Validation
    if (!name || !id || !department || !email) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    db.addEmployee({ name, id, department, email }, (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
        res.json({ success: true, message: 'Employee added successfully', data: result });
    });
});

/**
 * PUT /api/employees/:id
 * Update an employee
 */
app.put('/api/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    const { name, department, email } = req.body;

    if (!name || !department || !email) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    db.updateEmployee(employeeId, { name, department, email }, (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
        res.json({ success: true, message: 'Employee updated successfully', data: result });
    });
});

/**
 * DELETE /api/employees/:id
 * Delete an employee
 */
app.delete('/api/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    db.deleteEmployee(employeeId, (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
        res.json({ success: true, message: 'Employee deleted successfully' });
    });
});

/**
 * GET /api/employees/search/:query
 * Search employees by name or department
 */
app.get('/api/employees/search/:query', (req, res) => {
    const query = req.params.query;
    db.searchEmployees(query, (err, employees) => {
        if (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
        res.json({ success: true, data: employees });
    });
});

/**
 * GET /api/employees/stats/count
 * Get total employee count
 */
app.get('/api/employees/stats/count', (req, res) => {
    db.getEmployeeCount((err, count) => {
        if (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
        res.json({ success: true, count: count });
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`✓ Server running on http://localhost:${PORT}`);
    console.log(`✓ Database initialized and ready`);
});

module.exports = app;
