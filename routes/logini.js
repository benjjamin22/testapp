const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express')
const router = express.Router()

// Simulated user data
const users = [
    { id: 1, username: 'john_doe', password: 'password123' },
    { id: 2, username: 'jane_smith', password: 'example456' }
];

const sessions = {};

function setSession(userId, res) {
    const sessionId = `session_${new Date().getTime()}`;
    sessions[sessionId] = userId;

    // Set the session ID as a cookie
    res.setHeader('Set-Cookie', `sessionId=${sessionId}; HttpOnly; Path=/`);
}

router.post('/', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        setSession(user.id, res);
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid username or password');
    };
})
module.exports = router