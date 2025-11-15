/**
 * Main Script for Employee List Display
 * Handles rendering and managing the employee list
 */

document.addEventListener('DOMContentLoaded', () => {
    const employeeTableBody = document.querySelector('#employeeTable tbody');
    const employeeCount = document.getElementById('employeeCount');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const noDataMessage = document.getElementById('noDataMessage');

    // Render all employees on page load
    renderEmployees();

    // Search functionality
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value;
        if (query.trim() === '') {
            renderEmployees();
        } else {
            const results = DB.searchEmployees(query);
            renderEmployeesData(results);
        }
    });

    // Clear search
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        renderEmployees();
    });

    // Allow search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    /**
     * Render all employees from database
     */
    function renderEmployees() {
        const employees = DB.getAllEmployees();
        renderEmployeesData(employees);
    }

    /**
     * Render employee data to table
     * @param {Array} employees - Array of employee objects to render
     */
    function renderEmployeesData(employees) {
        employeeTableBody.innerHTML = '';
        employeeCount.textContent = employees.length;

        if (employees.length === 0) {
            noDataMessage.style.display = 'block';
            return;
        }

        noDataMessage.style.display = 'none';

        employees.forEach((employee, index) => {
            const row = employeeTableBody.insertRow();
            row.insertCell(0).textContent = employee.name;
            row.insertCell(1).textContent = employee.id;
            row.insertCell(2).textContent = employee.department;
            row.insertCell(3).textContent = employee.email;

            const actionsCell = row.insertCell(4);
            
            // Delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('btn', 'btn-delete');
            deleteButton.onclick = () => {
                if (confirm('Are you sure you want to delete this employee?')) {
                    const result = DB.deleteEmployee(index);
                    if (result.success) {
                        renderEmployees();
                    } else {
                        alert('Error: ' + result.message);
                    }
                }
            };
            
            actionsCell.appendChild(deleteButton);
        });
    }
});