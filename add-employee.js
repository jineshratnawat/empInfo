/**
 * Employee Form Handler
 * Handles form submission and employee addition
 */

document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employeeForm');
    const successMessage = document.getElementById('successMessage');

    employeeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('employeeName').value.trim();
        const id = document.getElementById('employeeID').value.trim();
        const department = document.getElementById('employeeDepartment').value.trim();
        const email = document.getElementById('employeeEmail').value.trim();

        // Validate form data
        if (!name || !id || !department || !email) {
            alert('Please fill in all fields!');
            return;
        }

        // Create employee object
        const newEmployee = {
            name,
            id,
            department,
            email
        };

        // Add employee using DB module
        const result = DB.addEmployee(newEmployee);

        if (result.success) {
            // Show success message
            successMessage.style.display = 'block';
            successMessage.textContent = result.message;

            // Clear form
            employeeForm.reset();

            // Hide message after 2 seconds and redirect
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        } else {
            // Show error message
            alert('Error: ' + result.message);
        }
    });
});
