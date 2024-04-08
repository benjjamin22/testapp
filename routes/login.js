const url = require('url')
const express = require('express')
const router = express.Router()
const fs = require('fs');
const bodyParser = require('body-parser')
    //const filepath = path.join("/tmp", 'db/users.json')

// Load user data from JSON file
//let userData = JSON.parse(fs.readFileSync("/tmp", 'db/users.json'));
//let userData = fs.writeFileSync(filepath, JSON.stringify(data))

//Login route
router.post('/', (req, res) => {
    const { username, password } = req.body;
    const user = userData.res.find(user => user.username === username && user.password === password);
    if (user) {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid username or password');
    }
});

module.exports = router