# 🔧 COMMAND REFERENCE & TROUBLESHOOTING

## ⚡ Essential Commands

### Installation & Setup
```powershell
# Install dependencies (first time only)
npm install

# Start the server
npm start

# Stop the server
Ctrl + C

# Check if server is running
curl http://localhost:3000
```

### Database Operations
```powershell
# Open SQLite database directly
sqlite3 employees.db

# View all employees
SELECT * FROM employees;

# Count employees
SELECT COUNT(*) FROM employees;

# Delete all records (use with caution!)
DELETE FROM employees;

# Exit SQLite
.quit
```

### Advanced Setup
```powershell
# Change port to 3001
$env:PORT=3001
npm start

# Set and run in one command
$env:PORT=3001; npm start

# Reset database (delete file and restart)
Remove-Item employees.db
npm start

# View node version
node --version

# View npm version
npm --version
```

---

## 🐛 Troubleshooting Guide

### Problem: "Port 3000 already in use"
**Solution:**
```powershell
# Change to a different port
$env:PORT=3001; npm start
```

### Problem: "npm: command not found"
**Solution:**
- Install Node.js from https://nodejs.org/
- Restart PowerShell after installation

### Problem: "CORS errors in browser"
**Solution:**
- Check that server is running on port 3000
- Verify api-client.js has correct API_BASE_URL
- Make sure you're accessing http://localhost:3000 (not 127.0.0.1)

### Problem: "Database file not created"
**Solution:**
- Database is created on first server start
- Check that server started successfully
- Look for "Database initialized" message

### Problem: "Cannot find module 'express'"
**Solution:**
```powershell
# Run npm install again
npm install
```

### Problem: "Data not saving"
**Solution:**
- Check browser console for errors (F12)
- Check server console for API errors
- Verify employees.db file exists in project folder
- Try resetting database:
  ```powershell
  Remove-Item employees.db
  npm start
  ```

### Problem: "Cannot connect to localhost:3000"
**Solution:**
- Verify server is running (check PowerShell window)
- Try http://localhost:3000 exactly
- Check that port 3000 isn't blocked by firewall
- Try different port: `$env:PORT=3001; npm start`

### Problem: "Form not submitting"
**Solution:**
- Check browser console (F12 → Console tab)
- Verify server is running
- Check that API_BASE_URL in api-client.js is correct
- Try clearing browser cache

### Problem: "Search not working"
**Solution:**
- Check browser console for errors
- Verify employees are in database
- Try searching with exact name

### Problem: "Delete button not working"
**Solution:**
- Check browser console for errors
- Verify employee exists in database
- Try refreshing page and trying again

---

## 📝 File Editing Guide

### Edit server.js
1. Stop server (Ctrl + C)
2. Edit server.js
3. Restart server (npm start)

### Edit database.js
1. Stop server (Ctrl + C)
2. Edit database.js
3. Restart server (npm start)

### Edit HTML/CSS/JS Frontend
1. Edit file
2. Refresh browser (F5)
3. No restart needed

### Edit api-client.js
1. Stop server (Ctrl + C)
2. Edit api-client.js
3. Restart server (npm start)

---

## 🧪 Testing the API

### Using PowerShell (Invoke-WebRequest)
```powershell
# Get all employees
Invoke-WebRequest -Uri "http://localhost:3000/api/employees" -Method GET

# Add employee
$body = @{
    name = "John Doe"
    id = "E001"
    department = "IT"
    email = "john@example.com"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:3000/api/employees" -Method POST -Body $body -ContentType "application/json"

# Search employees
Invoke-WebRequest -Uri "http://localhost:3000/api/employees/search/John" -Method GET

# Delete employee
Invoke-WebRequest -Uri "http://localhost:3000/api/employees/E001" -Method DELETE
```

### Using curl (if installed)
```bash
# Get all employees
curl http://localhost:3000/api/employees

# Add employee
curl -X POST http://localhost:3000/api/employees \
  -H "Content-Type: application/json" \
  -d '{"name":"John","id":"E001","department":"IT","email":"john@example.com"}'

# Delete employee
curl -X DELETE http://localhost:3000/api/employees/E001
```

---

## 📊 Database Management

### Backup Database
```powershell
# Copy database file
Copy-Item employees.db employees.db.backup
```

### Restore from Backup
```powershell
# Copy backup back
Copy-Item employees.db.backup employees.db
```

### Reset Database
```powershell
# Delete and recreate
Remove-Item employees.db
npm start
```

### Export Data
```powershell
# Using SQLite command
sqlite3 employees.db ".mode csv" ".output employees.csv" "SELECT * FROM employees;"
```

---

## 🔍 Debugging Tips

### Check Browser Console
1. Press F12 in browser
2. Go to "Console" tab
3. Look for error messages
4. Try commands in console

### Check Server Console
1. Look at PowerShell window running npm start
2. Check for error messages
3. Look for API response logs

### Enable Verbose Logging
1. Edit server.js
2. Add console.log() statements
3. Restart server
4. Check PowerShell output

### View Network Requests
1. Press F12 in browser
2. Go to "Network" tab
3. Perform action (add/search/delete)
4. Click on request to see details

---

## 📋 Pre-Deployment Checklist

- [ ] npm install runs without errors
- [ ] npm start shows success message
- [ ] Browser loads http://localhost:3000
- [ ] Can add employee
- [ ] Employee appears in list
- [ ] Can search employees
- [ ] Can delete employee
- [ ] employees.db file is created
- [ ] No console errors (F12)
- [ ] All 7 API endpoints working

---

## 🚀 Performance Tips

### Optimize Database
```powershell
# Run database optimization
sqlite3 employees.db "VACUUM;"
```

### Monitor Server Memory
```powershell
# Check running processes
Get-Process node

# Check memory usage
Get-Process node | Select-Object Name, WorkingSet
```

### Clear Browser Cache
1. Press Ctrl + Shift + Delete
2. Clear cache
3. Refresh page

---

## 🔐 Security Checklist

- [ ] Validate all inputs
- [ ] Use HTTPS in production
- [ ] Set strong database password (if needed)
- [ ] Regular database backups
- [ ] Monitor API for abuse
- [ ] Update Node.js regularly
- [ ] Update npm packages regularly

---

## 📞 Quick Help

**Forgot database name?** → employees.db
**Forgot API URL?** → http://localhost:3000/api
**Forgot default port?** → 3000
**Forgot how to start?** → npm start
**Forgot dependencies?** → See package.json

---

## 🎓 Additional Resources

- Node.js: https://nodejs.org/
- Express.js: https://expressjs.com/
- SQLite3: https://www.sqlite.org/
- npm: https://www.npmjs.com/

---

## ✅ Everything Working?

If all commands work and no errors appear:
- ✅ Backend is ready
- ✅ Database is ready
- ✅ Frontend is ready
- ✅ System is fully operational!

**Congratulations! Your system is ready for use.** 🎉
