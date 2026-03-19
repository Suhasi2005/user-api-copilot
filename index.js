const express = require('express');
const app = express();

app.use(express.json());

// ================== MIDDLEWARE ==================

// Logging Middleware
app.use((req, res, next) => {
    console.log(`[LOG] ${req.method} ${req.url}`);
    next();
});

// ================== DATA ==================

let users = [
    { id: 1, name: "John Doe", email: "john@example.com" }
];

// ================== VALIDATION ==================

const validateUser = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Validation failed: Name and Email are required"
        });
    }

    next();
};

// ================== ROUTES ==================

// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});

// POST create user
app.post('/users', validateUser, (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);

    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
});

// PUT update user
app.put('/users/:id', validateUser, (req, res) => {
    const user = users.find(u => u.id == req.params.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name;
    user.email = req.body.email;

    res.json({
        message: "User updated successfully",
        user
    });
});

// DELETE user
app.delete('/users/:id', (req, res) => {
    const userExists = users.some(u => u.id == req.params.id);

    if (!userExists) {
        return res.status(404).json({ message: "User not found" });
    }

    users = users.filter(u => u.id != req.params.id);

    res.json({ message: "User deleted successfully" });
});

// ================== SERVER ==================

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});