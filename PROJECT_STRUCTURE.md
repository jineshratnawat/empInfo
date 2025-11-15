📁 Employee Management System
│
├── 🎨 Frontend Files
│   ├── index.html                 # Main employee list page
│   ├── add-employee.html          # Add employee form page
│   ├── script.js                  # List page logic (uses API)
│   ├── add-employee.js            # Form handler (uses API)
│   ├── api-client.js              # API communication module ⭐
│   └── style.css                  # Responsive styling
│
├── 🖥️  Backend Files
│   ├── server.js                  # Express.js server ⭐
│   ├── database.js                # SQLite database module ⭐
│   └── employees.db               # SQLite database (auto-created)
│
├── 📦 Configuration Files
│   ├── package.json               # Dependencies & scripts
│   ├── .gitignore                 # Git ignore rules
│   │
├── 📖 Documentation
│   ├── README.md                  # Full documentation
│   ├── QUICK_START.md             # Quick start guide
│   └── PROJECT_STRUCTURE.md       # This file
│
└── 🗂️  Directories
    └── node_modules/              # Installed dependencies (auto-created)


🔑 Key Files Description:

⭐ server.js
  └─ Express.js server
  └─ Defines all API endpoints
  └─ Handles HTTP requests
  └─ Started with: npm start

⭐ database.js
  └─ SQLite database module
  └─ Handles all DB operations
  └─ CRUD (Create, Read, Update, Delete)
  └─ Validation and error handling

⭐ api-client.js
  └─ Frontend API communication
  └─ Async functions for all endpoints
  └─ Error handling
  └─ Used by script.js and add-employee.js


📊 Data Flow:

User Interface (HTML/CSS/JS)
         ↓
    API Client (api-client.js)
         ↓
    HTTP Request/Response
         ↓
    Express Server (server.js)
         ↓
    Database Module (database.js)
         ↓
    SQLite Database (employees.db)


📝 File Relationships:

index.html
  → loads script.js
  → loads api-client.js
  → API calls to server.js

add-employee.html
  → loads add-employee.js
  → loads api-client.js
  → API calls to server.js

server.js
  → requires database.js
  → Creates Express app
  → Serves static files (index.html, style.css, etc.)
  → Defines API routes

database.js
  → Handles SQLite operations
  → Imported by server.js


🚀 Startup Sequence:

1. npm install          # Install dependencies once
   └─ Installs express, sqlite3, cors, body-parser

2. npm start            # Run server
   └─ Starts server.js
   └─ Initializes database.js
   └─ Creates employees.db if not exists
   └─ Listens on port 3000

3. Open browser
   └─ http://localhost:3000
   └─ Serves index.html
   └─ JavaScript loads api-client.js
   └─ Communicates with server.js


💾 Database Schema:

TABLE: employees
┌─────────────┬─────────┬──────────────────┐
│ Column      │ Type    │ Description      │
├─────────────┼─────────┼──────────────────┤
│ id          │ TEXT    │ Primary Key      │
│ name        │ TEXT    │ Employee Name    │
│ department  │ TEXT    │ Department       │
│ email       │ TEXT    │ Email Address    │
│ created_at  │ DATETIME│ Creation Time    │
│ updated_at  │ DATETIME│ Update Time      │
└─────────────┴─────────┴──────────────────┘


🔄 API Endpoints Summary:

GET    /api/employees              ← Get all
GET    /api/employees/:id          ← Get one
POST   /api/employees              ← Create
PUT    /api/employees/:id          ← Update
DELETE /api/employees/:id          ← Delete
GET    /api/employees/search/:query ← Search
GET    /api/employees/stats/count  ← Count


📋 Checklist for First Run:

□ npm install                       (Install dependencies)
□ npm start                         (Start server)
□ Open http://localhost:3000        (Open application)
□ Click "Add New Employee"          (Test add function)
□ Fill form and submit              (Add test data)
□ Verify in table                   (Check if saved to DB)
□ Try search functionality          (Test search)
□ Click delete button                (Test delete)
□ Check employees.db exists         (Verify database created)


✅ You're all set!

The system is now fully functional with:
- Separate SQLite database
- RESTful API backend
- Frontend communicating with API
- Data persistence
- All CRUD operations working

