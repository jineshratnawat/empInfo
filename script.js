document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employeeForm');
    const employeeTableBody = document.querySelector('#employeeTable tbody');

    let employees = JSON.parse(localStorage.getItem('employees')) || [];

    function renderEmployees() {
        employeeTableBody.innerHTML = ''; // Clear existing rows
        employees.forEach((employee, index) => {
            const row = employeeTableBody.insertRow();
            row.insertCell(0).textContent = employee.name;
            row.insertCell(1).textContent = employee.id;
            row.insertCell(2).textContent = employee.department;
            row.insertCell(3).textContent = employee.email;

            const actionsCell = row.insertCell(4);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-btn'); // Optional: for styling
            deleteButton.onclick = () => deleteEmployee(index);
            actionsCell.appendChild(deleteButton);
        });
    }

    function addEmployee(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('employeeName').value;
        const id = document.getElementById('employeeID').value;
        const department = document.getElementById('employeeDepartment').value;
        const email = document.getElementById('employeeEmail').value;

        const newEmployee = { name, id, department, email };
        employees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(employees));
        renderEmployees();
        employeeForm.reset(); // Clear form fields
    }

    function deleteEmployee(index) {
        employees.splice(index, 1); // Remove employee from array
        localStorage.setItem('employees', JSON.stringify(employees));
        renderEmployees();
    }

    employeeForm.addEventListener('submit', addEmployee);

    // Initial render when the page loads
    renderEmployees();
});