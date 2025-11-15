/**
 * Database Module for Employee Information Management
 * Handles all database operations including CRUD operations on employee data
 */

const DB = {
    // Get all employees from localStorage
    getAllEmployees: function() {
        try {
            const employees = JSON.parse(localStorage.getItem('employees')) || [];
            return employees;
        } catch (error) {
            console.error('Error retrieving employees:', error);
            return [];
        }
    },

    // Get a single employee by ID
    getEmployeeById: function(employeeId) {
        const employees = this.getAllEmployees();
        return employees.find(emp => emp.id === employeeId);
    },

    // Add a new employee
    addEmployee: function(employee) {
        try {
            const employees = this.getAllEmployees();
            
            // Check if employee ID already exists
            if (employees.some(emp => emp.id === employee.id)) {
                throw new Error('Employee ID already exists!');
            }

            employees.push(employee);
            localStorage.setItem('employees', JSON.stringify(employees));
            return { success: true, message: 'Employee added successfully!' };
        } catch (error) {
            console.error('Error adding employee:', error);
            return { success: false, message: error.message };
        }
    },

    // Update an existing employee
    updateEmployee: function(index, updatedEmployee) {
        try {
            const employees = this.getAllEmployees();
            if (index >= 0 && index < employees.length) {
                employees[index] = updatedEmployee;
                localStorage.setItem('employees', JSON.stringify(employees));
                return { success: true, message: 'Employee updated successfully!' };
            }
            throw new Error('Employee not found!');
        } catch (error) {
            console.error('Error updating employee:', error);
            return { success: false, message: error.message };
        }
    },

    // Delete an employee by index
    deleteEmployee: function(index) {
        try {
            const employees = this.getAllEmployees();
            if (index >= 0 && index < employees.length) {
                employees.splice(index, 1);
                localStorage.setItem('employees', JSON.stringify(employees));
                return { success: true, message: 'Employee deleted successfully!' };
            }
            throw new Error('Employee not found!');
        } catch (error) {
            console.error('Error deleting employee:', error);
            return { success: false, message: error.message };
        }
    },

    // Clear all employees
    clearAllEmployees: function() {
        try {
            localStorage.removeItem('employees');
            return { success: true, message: 'All employees cleared!' };
        } catch (error) {
            console.error('Error clearing employees:', error);
            return { success: false, message: error.message };
        }
    },

    // Get employee count
    getEmployeeCount: function() {
        return this.getAllEmployees().length;
    },

    // Search employees by name or department
    searchEmployees: function(query) {
        const employees = this.getAllEmployees();
        const lowerQuery = query.toLowerCase();
        return employees.filter(emp => 
            emp.name.toLowerCase().includes(lowerQuery) || 
            emp.department.toLowerCase().includes(lowerQuery)
        );
    }
};
