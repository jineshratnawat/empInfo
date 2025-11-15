/**
 * API Client Module
 * Handles all HTTP requests to the backend server
 */

const API_BASE_URL = 'http://localhost:3000/api';

const APIClient = {
    /**
     * Fetch all employees
     */
    getAllEmployees: async function() {
        try {
            const response = await fetch(`${API_BASE_URL}/employees`);
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            return result.data || [];
        } catch (error) {
            console.error('Error fetching employees:', error);
            throw error;
        }
    },

    /**
     * Fetch employee by ID
     */
    getEmployeeById: async function(employeeId) {
        try {
            const response = await fetch(`${API_BASE_URL}/employees/${employeeId}`);
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            return result.data;
        } catch (error) {
            console.error('Error fetching employee:', error);
            throw error;
        }
    },

    /**
     * Add new employee
     */
    addEmployee: async function(employee) {
        try {
            const response = await fetch(`${API_BASE_URL}/employees`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(employee)
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            return result.data;
        } catch (error) {
            console.error('Error adding employee:', error);
            throw error;
        }
    },

    /**
     * Update employee
     */
    updateEmployee: async function(employeeId, updates) {
        try {
            const response = await fetch(`${API_BASE_URL}/employees/${employeeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updates)
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            return result.data;
        } catch (error) {
            console.error('Error updating employee:', error);
            throw error;
        }
    },

    /**
     * Delete employee
     */
    deleteEmployee: async function(employeeId) {
        try {
            const response = await fetch(`${API_BASE_URL}/employees/${employeeId}`, {
                method: 'DELETE'
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            return result;
        } catch (error) {
            console.error('Error deleting employee:', error);
            throw error;
        }
    },

    /**
     * Search employees
     */
    searchEmployees: async function(query) {
        try {
            const response = await fetch(`${API_BASE_URL}/employees/search/${encodeURIComponent(query)}`);
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            return result.data || [];
        } catch (error) {
            console.error('Error searching employees:', error);
            throw error;
        }
    },

    /**
     * Get employee count
     */
    getEmployeeCount: async function() {
        try {
            const response = await fetch(`${API_BASE_URL}/employees/stats/count`);
            const result = await response.json();
            if (!response.ok) throw new Error(result.message);
            return result.count;
        } catch (error) {
            console.error('Error getting employee count:', error);
            throw error;
        }
    }
};
