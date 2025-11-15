/**
 * Employee Form Handler
 * Handles form submission and employee addition via API
 */

document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employeeForm');
    const successMessage = document.getElementById('successMessage');

    employeeForm.addEventListener('submit', async function(event) {
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

        try {
            // Add employee using API
            await APIClient.addEmployee(newEmployee);

            // Show success message
            successMessage.style.display = 'block';
            successMessage.textContent = 'Employee added successfully!';

            // Clear form
            employeeForm.reset();

            // Redirect after 2 seconds
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        } catch (error) {
            // Show error message
            alert('Error: ' + error.message);
        }
    });
});
