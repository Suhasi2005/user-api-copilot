# User Management API

This is a simple REST API built using Node.js and Express.

## Features
- CRUD operations (GET, POST, PUT, DELETE)
- Middleware (Logging)
- Validation for user data
- Debugging and suggestions using GitHub Copilot

## API Endpoints

- GET /users → Get all users
- GET /users/:id → Get user by ID
- POST /users → Create user
- PUT /users/:id → Update user
- DELETE /users/:id → Delete user

## How to Run

1. Install dependencies:
   npm install

2. Start server:
   node index.js

3. Open:
   http://localhost:3000/users

## Copilot Usage

GitHub Copilot was used to:
- Suggest API structure
- Debug issues
- Improve middleware and validation logic