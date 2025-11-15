# Quick Start Guide

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies
Open PowerShell in the project directory and run:
```powershell
npm install
```

### Step 2: Start the Server
```powershell
npm start
```

You should see:
```
✓ Server running on http://localhost:3000
✓ Database initialized and ready
```

### Step 3: Open the Application
Open your browser and go to:
```
http://localhost:3000
```

---

## 🎯 What You Can Do

### ✅ Add Employees
- Click "Add New Employee"
- Fill in the form
- Data is saved to SQLite database

### ✅ View All Employees
- Homepage shows all employees
- Displays Name, ID, Department, Email

### ✅ Search Employees
- Search by name or department
- Real-time filtering

### ✅ Delete Employees
- Click Delete button
- Confirm deletion
- Removed from database

---

## 📊 Database Information

**Database File:** `employees.db` (auto-created in project folder)

**Table:** `employees`
- `id` - Employee ID (Primary Key)
- `name` - Employee Name
- `department` - Department Name
- `email` - Email Address
- `created_at` - Creation Timestamp
- `updated_at` - Last Update Timestamp

---

## 🔌 API Endpoints (For Advanced Users)

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/:id` | Get specific employee |
| POST | `/api/employees` | Add new employee |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Delete employee |
| GET | `/api/employees/search/:query` | Search employees |
| GET | `/api/employees/stats/count` | Get total count |

---

## ❓ FAQ

**Q: Where is the data stored?**
A: Data is stored in `employees.db` (SQLite database file in project root)

**Q: Can I change the port?**
A: Yes, set PORT environment variable before running:
```powershell
$env:PORT=3001; npm start
```

**Q: How do I reset the database?**
A: Delete `employees.db` and restart the server

**Q: Do I need to restart the server when I edit HTML/CSS/JS files?**
A: No, but yes for server.js or database.js changes

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **Database:** SQLite3
- **API:** RESTful

Enjoy! 🚀
