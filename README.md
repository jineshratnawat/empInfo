# Employee Management System with Database

A complete Employee Information Management System with a separate SQLite database backend.

## 📁 Project Structure

### Frontend Files
- `index.html` - Main employee list page
- `add-employee.html` - Add new employee form
- `script.js` - List page logic
- `add-employee.js` - Form handler
- `api-client.js` - API communication module
- `style.css` - Responsive styling

### Backend Files
- `server.js` - Express.js server with API endpoints
- `database.js` - SQLite database module
- `package.json` - Dependencies

## 🚀 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

This will install:
- **express** - Web framework
- **body-parser** - Request parsing
- **sqlite3** - Database
- **cors** - Cross-origin support

### 2. Start the Server
```bash
npm start
```

The server will start at `http://localhost:3000`

You should see:
```
✓ Server running on http://localhost:3000
✓ Database initialized and ready
```

### 3. Open the Application
Open your browser and navigate to:
```
http://localhost:3000
```

## 📊 Database Schema

### Employees Table
```sql
CREATE TABLE employees (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    department TEXT NOT NULL,
    email TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

The database file (`employees.db`) is automatically created in the project root.

## 🔌 API Endpoints

### GET `/api/employees`
Retrieve all employees
```
Response: { success: true, data: [...] }
```

### GET `/api/employees/:id`
Retrieve specific employee by ID
```
Response: { success: true, data: {...} }
```

### POST `/api/employees`
Add a new employee
```
Body: { name, id, department, email }
Response: { success: true, message: "...", data: {...} }
```

### PUT `/api/employees/:id`
Update an employee
```
Body: { name, department, email }
Response: { success: true, message: "...", data: {...} }
```

### DELETE `/api/employees/:id`
Delete an employee
```
Response: { success: true, message: "..." }
```

### GET `/api/employees/search/:query`
Search employees by name or department
```
Response: { success: true, data: [...] }
```

### GET `/api/employees/stats/count`
Get total employee count
```
Response: { success: true, count: 0 }
```

## 🎯 Features

✅ **SQLite Database** - Persistent data storage
✅ **RESTful API** - Clean API endpoints
✅ **CRUD Operations** - Create, Read, Update, Delete employees
✅ **Search Functionality** - Find employees by name or department
✅ **Data Validation** - Prevents duplicate employee IDs
✅ **Error Handling** - Comprehensive error messages
✅ **Timestamps** - Track when employees are created/updated
✅ **Responsive Design** - Works on all devices
✅ **CORS Enabled** - Can be used with different frontend origins

## 📝 Usage Examples

### Add an Employee
1. Click "Add New Employee" on the home page
2. Fill in the form (Name, Employee ID, Department, Email)
3. Click "Add Employee"
4. You'll be redirected back to the employee list

### View Employees
- All employees are displayed in a table on the home page
- Shows Name, Employee ID, Department, and Email

### Search Employees
1. Enter search query in the search box
2. Click "Search" or press Enter
3. Results filtered by name or department

### Delete an Employee
1. Click the "Delete" button next to the employee
2. Confirm the deletion
3. Employee is removed from the database

## 🔧 Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can change it:
```bash
set PORT=3001
npm start
```

### CORS Issues
The server has CORS enabled by default. If you encounter issues:
- Check that the API_BASE_URL in `api-client.js` matches your server URL
- Ensure the server is running on port 3000

### Database Issues
To reset the database, simply delete `employees.db` and restart the server:
```bash
del employees.db
npm start
```

## 📦 Dependencies Details

- **express@^4.18.2** - Fast, unopinionated web framework
- **body-parser@^1.20.2** - Middleware to parse request bodies
- **sqlite3@^5.1.6** - SQLite3 database binding
- **cors@^2.8.5** - Enable CORS for API requests

## 📄 License

ISC

## 👤 Author

Your Name

---

**Ready to use!** Start the server with `npm start` and access the application at `http://localhost:3000`
