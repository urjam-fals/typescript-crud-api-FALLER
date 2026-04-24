# TypeScript CRUD API

## 📌 Description
This is a simple REST API built using Node.js, Express, and TypeScript. It supports basic CRUD operations for users with validation and MySQL database integration.

---

## ⚙️ Setup Instructions

### 1. Install dependencies
```bash
npm install

2. Run the server
npm run start:dev

Server runs at:

http://localhost:4000

📡 API Endpoints
Create User

POST /users

Get All Users

GET /users

Get User by ID

GET /users/:id

Update User

PUT /users/:id

Delete User

DELETE /users/:id

🧪 Testing (Postman)
Create User (POST /users)
{
  "title": "Mr",
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "password": "secret123",
  "confirmPassword": "secret123",
  "role": "User"
}

Expected response:
{
  "message": "User created."
}

👨‍💻 Tech Stack
Node.js
Express
TypeScript
MySQL
Joi Validation